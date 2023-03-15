# 数据操作

数据表格默认有3个行操作`编辑`、`查看`和`删除`，可以通过下面的方式关闭它们：

```php
 $grid->actions(function ($actions) {

    // 去掉删除
    $actions->disableDelete();

    // 去掉编辑
    $actions->disableEdit();

    // 去掉查看
    $actions->disableView();
});

// 全部关闭
$grid->disableActions();
```

可以通过传入的`$actions`参数来获取当前行的数据：

```php
 $grid->actions(function ($actions) {

    // 当前行的数据数组
    $actions->row;

    // 获取当前行主键值
    $actions->getKey();
});
```

默认情况下有一个批量删除的操作，有下面的一些使用方法

```php
$grid->batchActions(function ($batch) {
    $batch->disableDelete();
});

// 去掉批量操作
$grid->disableBatchActions();
```