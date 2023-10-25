# 敬请所有读者注意
>
> - 原则上这里只进行文档编辑工作
> - 如果觉得有改进之处，或任何想法，建议直接在仓库讨论
> - 原则上这里不适合讨论`laravel-admin`的使用问题，建议相关问题在`laravel-admin`的 [issues](https://github.com/z-song/laravel-admin/issues) 或各大主流技术社区讨论，以便得到更多帮助和更充分的讨论。

<p align="center">
  <a href="https://github.com/z-song/laravel-admin" target="_blank" rel="noopener noreferrer">
    <img width="180" src="/logo.png" alt="Larave-Admin">
  </a>
</p>


## local docs

> Docker run 


```
# 打包
docker build . --tag ghcr.io/yingchaoorg/local_docs-laravel-admin-docs-cn:main
# 临时运行 (停止后删除)
docker run -p  34802:80 --name  local_docs-laravel-admin-docs-cn --rm ghcr.io/yingchaoorg/local_docs-laravel-admin-docs-cn:main
# 后台运行
docker run -p  34802:80 --name local_docs-laravel-admin-docs-cn -d ghcr.io/yingchaoorg/local_docs-laravel-admin-docs-cn:main

docker stop local_docs-laravel-admin-docs-cn
```