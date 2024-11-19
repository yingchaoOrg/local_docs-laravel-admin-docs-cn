FROM nginx:1.24.0

COPY docs/index.html /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN mkdir //usr/share/nginx/html/laravel-admin-docs-cn
COPY docs/ /usr/share/nginx/html/laravel-admin-docs-cn
