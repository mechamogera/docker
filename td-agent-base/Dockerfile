From centos:centos7
MAINTAINER mechamogera

ADD td.repo /etc/yum.repos.d/td.repo

RUN yum clean all && yum update -y

# install td-agent
RUN rpm --import https://packages.treasuredata.com/GPG-KEY-td-agent
RUN yum install td-agent -y
RUN yum clean all

VOLUME ["/etc/td-agent"]

ENTRYPOINT ["td-agent"]
