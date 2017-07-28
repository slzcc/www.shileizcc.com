FROM registry.aliyuncs.com/slzcc/nginx:1.13.1
COPY . /usr/share/nginx/html
RUN mv /usr/share/nginx/html/index.conf /etc/nginx/conf.d/index.conf
