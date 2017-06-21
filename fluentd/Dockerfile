FROM fluent/fluentd:v0.14.14-onbuild

USER root

RUN apk add --update --virtual .build-deps \
    build-base \
    curl \
    ruby-dev \
    sudo \
 && sudo -u fluent gem install \
    fluent-plugin-elasticsearch -v 1.9.3 \
 && sudo -u fluent gem install \
    fluent-plugin-elasticsearch-timestamp-check -v 0.1.2 \
 && sudo -u fluent gem install \
    fluent-plugin-rewrite-tag-filter -v 1.5.5 \
 && sudo -u fluent gem install \
    fluent-plugin-s3 -v 1.0.0.rc2 \
 && sudo -u fluent gem sources --clear-all \
 && apk del .build-deps \
 && rm -rf /var/cache/apk/* \
    /home/fluent/.gem/ruby/2.3.0/cache/*.gem
