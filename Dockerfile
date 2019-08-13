FROM node:10-alpine as ui-builder
RUN mkdir -p /tmp/nginx/foreign-exchange-currency-master
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html
WORKDIR /tmp/nginx/foreign-exchange-currency-master
COPY package.json /tmp/nginx/foreign-exchange-currency-master
COPY . .
RUN npm install

FROM nginx:stable-alpine
COPY --from=ui-builder  /tmp/nginx/foreign-exchange-currency-master/dist /usr/share/nginx/html
COPY nginx_conf/nginx.conf /etc/nginx/nginx.conf
COPY nginx_conf/default.conf /etc/nginx/conf.d/default.conf
RUN chown nginx:nginx /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


