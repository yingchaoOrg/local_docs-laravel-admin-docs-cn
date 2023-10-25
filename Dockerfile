FROM node:16

RUN mkdir -p /home/node/www

RUN npm install -g http-server

COPY docs/index.html /home/node/www
WORKDIR /home/node/www
RUN mkdir /home/node/www/laravel-admin-docs-cn
COPY docs/ /home/node/www/laravel-admin-docs-cn

EXPOSE 80
CMD http-server -p 80 -a 0.0.0.0