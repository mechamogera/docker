FROM alpine:latest

ARG user="user"
ARG password="password"

ENV HOME /root
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

COPY squid.conf /etc/squid/
RUN apk update && apk add --no-cache squid apache2-utils
RUN htpasswd -c -b /etc/squid/.htpasswd $user $password

EXPOSE 3128

ENTRYPOINT [ "/usr/sbin/squid" ]
CMD [ "-N", "-d", "1", "-f", "/etc/squid/squid.conf" ]
