FROM debian:stretch

USER root
RUN apt-get update && apt-get install -y \
    vim \
    curl \
    httpie \
    jq \
 && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["http"]
