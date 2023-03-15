# 基于数据模型的表格

`Encore\Admin\Grid`类用于生成基于数据模型的表格，下面以`movies`表为例：

```sql
movies
    id          - integer
    title       - string
    director    - integer
    describe    - string
    rate        - tinyint
    released    - enum(0, 1)
    release_at  - timestamp
    created_at  - timestamp
    updated_at  - timestamp
```

对应的数据模型为`App\Models\Movie`，用下面的代码生成表`movies`的数据表格：

```php
use App\Models\Movie;
use Encore\Admin\Grid;

$grid = new Grid(new Movie);

// 第一列显示id字段，并将这一列设置为可排序列
$grid->column('id', 'ID')->sortable();

// 第二列显示title字段，由于title字段名和Grid对象的title方法冲突，所以用Grid的column()方法代替
$grid->column('title');

// 第三列显示director字段，通过display($callback)方法设置这一列的显示内容为users表中对应的用户名
$grid->column('director')->display(function($userId) {
    return User::find($userId)->name;
});

// 第四列显示为describe字段
$grid->column('describe');

// 第五列显示为rate字段
$grid->column('rate');

// 第六列显示released字段，通过display($callback)方法来格式化显示输出
$grid->column('released', '上映?')->display(function ($released) {
    return $released ? '是' : '否';
});

// 下面为三个时间字段的列显示
$grid->column('release_at');
$grid->column('created_at');
$grid->column('updated_at');

// filter($callback)方法用来设置表格的简单搜索框
$grid->filter(function ($filter) {

    // 设置created_at字段的范围查询
    $filter->between('created_at', 'Created Time')->datetime();
});
```

## 基础方法 {#基础方法}

模型表格有以下的一些基础方法

## 添加列 {#添加列}

```php
// 直接通过字段名`username`添加列
$grid->username('用户名');

// 效果和上面一样
$grid->column('username', '用户名');

// 显示JSON内嵌字段
$grid->column('profile->mobile', '手机号');

// 添加多列
$grid->columns('email', 'username' ...);
```

## 添加数据查询条件 {#添加数据查询条件}

默认情况下，表格的数据没有任何查询条件，可以使用`model()`方法来给当前表格数据添加查询条件：

```php
$grid->model()->where('id', '>', 100);

$grid->model()->whereIn('id', [1, 2, 3]);

$grid->model()->whereBetween('votes', [1, 100]);

$grid->model()->whereColumn('updated_at', '>', 'created_at');

$grid->model()->orderBy('id', 'desc');

$grid->model()->take(100);

...
```

`$grid->model()`后面可以直接调用`Eloquent`的查询方法来给表格数据添加查询条件，更多查询方法参考[文档](https://laravel.com/docs/5.8/queries).

## 设置每页显示行数 {#设置每页显示行数}

```php
// 默认为每页20条
$grid->paginate(15);
```

## 修改显示输出 {#修改显示输出}

```php
$grid->column('text')->display(function($text) {
    return str_limit($text, 30, '...');
});

$grid->column('name')->display(function ($name) {
    return "<span class='label'>$name</span>";
});

$grid->column('email')->display(function ($email) {
    return "mailto:$email";
});

// 添加不存在的字段
$grid->column('column_not_in_table')->display(function () {
    return 'blablabla....';
});
```

`display()`方法接收的匿名函数绑定了当前行的数据对象，可以在里面调用当前行的其它字段数据

```php
$grid->column('first_name');
$grid->column('last_name');

// 不存的字段列
$grid->column('full_name')->display(function () {
    return $this->first_name.' '.$this->last_name;
});
```

## 禁用创建按钮 {#禁用创建按钮}

```php
$grid->disableCreateButton();
```

## 禁用分页条 {#禁用分页条}

```php
$grid->disablePagination();
```

## 禁用查询过滤器 {#禁用查询过滤器}

```php
$grid->disableFilter();
```

## 禁用导出数据按钮 {#禁用导出数据按钮}

```php
$grid->disableExport();
```

## 禁用行选择checkbox {#禁用行选择checkbox}

```php
$grid->disableRowSelector();
```

## 禁用行操作列 {#禁用行操作列}

```php
$grid->disableActions();
```

## 禁用行选择器 {#禁用行选择器}

```php
$grid->disableColumnSelector();
```

## 设置分页选择器选项 {#设置分页选择器选项}

```php
$grid->perPages([10, 20, 30, 40, 50]);
```

## 关联模型 {#关联模型}

## 一对一 {#一对一}

`users`表和`profiles`表通过`profiles.user_id`字段生成一对一关联

```sql
uers
    id      - integer 
    name    - string
    email   - string

profiles
    id      - integer 
    user_id - integer 
    age     - string
    gender  - string
```

对应的数据模分别为:

```php
class User extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}

class Profile extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

通过下面的代码可以关联在一个grid里面:

```php
$grid = new Grid(new User);

$grid->column('id', 'ID')->sortable();

$grid->column('name');
$grid->column('email');

$grid->column('profile.age');
$grid->column('profile.gender');

//or
$grid->profile()->age();
$grid->profile()->gender();
```

## 一对多 {#一对多}

`posts`表和`comments`表通过`comments.post_id`字段生成一对多关联

```sql
posts
    id      - integer 
    title   - string
    content - text

comments
    id      - integer 
    post_id - integer 
    content - string
```

对应的数据模分别为:

```php
class Post extends Model
{
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}

class Comment extends Model
{
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
```

通过下面的代码可以让两个模型在grid里面互相关联:

```php
$grid = new Grid(new Post);

$grid->column('id', 'id')->sortable();
$grid->column('title');
$grid->column('content');

$grid->column('comments', '评论数')->display(function ($comments) {
    $count = count($comments);
    return "<span class='label label-warning'>{$count}</span>";
});

return $grid;
$grid = new Grid(new Comment);
$grid->column('id');
$grid->column('post.title');
$grid->column('content');

return $grid;
```

## 多对多 {#多对多}

`users`和`roles`表通过中间表`role_users`产生多对多关系

```sql
users
    id       - integer 
    username - string
    password - string
    name     - string 

roles
    id      - integer 
    name    - string
    slug    - string

role_users
    role_id - integer 
    user_id - integer 
```

对应的数据模分别为:

```php
class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}

class Role extends Model
{
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
```

通过下面的代码可以让两个模型在grid里面互相关联:

```php
$grid = new Grid(new User);

$grid->column('id', 'ID')->sortable();
$grid->column('username');
$grid->column('name');

$grid->column('roles')->display(function ($roles) {

    $roles = array_map(function ($role) {
        return "<span class='label label-success'>{$role['name']}</span>";
    }, $roles);

    return join('&nbsp;', $roles);
});
```