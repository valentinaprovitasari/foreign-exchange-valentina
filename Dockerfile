# Create the container from the alpine linux image
FROM node:10 as ui-builder
# Add nginx and nodejs
#RUN apk add --update nginx nodejs
# Create the directories we will need
RUN mkdir -p /tmp/nginx/foreign-exchange-currency-master
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html
# Copy the respective nginx configuration files
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
# Set the directory we want to run the next commands for
WORKDIR /tmp/nginx/foreign-exchange-currency-master
COPY package.json /tmp/nginx/foreign-exchange-currency-master
# Copy our source code into the container
COPY . .
# Install the dependencies, can be commented out if you're running the same node version
RUN npm install
# run webpack and the vue-loader
#RUN npm run build

FROM nginx
# copy the built app to our served directory
#RUN cp -r dist/* /var/www/html
COPY --from=ui-builder  /tmp/nginx/foreign-exchange-currency-master/dist /usr/share/nginx/html
# make all files belong to the nginx user
RUN chown nginx:nginx /usr/share/nginx/html
# start nginx and keep the process from backgrounding and the container from quitting
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


