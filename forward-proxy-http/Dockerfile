FROM nginx:mainline-alpine

ENV PROXY_PASS="https://example.com"
ENV PROXY_HIDE_HEADER="Cf-Ray"

COPY run.sh /run.sh
COPY default.template /etc/nginx/conf.d/default.template

ENTRYPOINT ["/bin/sh", "/run.sh"]
CMD ["nginx", "-g", "daemon off;"]
