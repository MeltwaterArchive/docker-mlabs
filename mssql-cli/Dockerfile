FROM debian:stretch

USER root
RUN apt-get update && apt-get install -y \
    curl \
    apt-transport-https \
    gnupg \
    gnupg1 \
    gnupg2 \

RUN wget -qO- https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN echo "deb [arch=amd64] https://packages.microsoft.com/debian/8/prod jessie main" | tee /etc/apt/sources.list.d/mssql-cli.list

RUN apt-get update && apt-get install -y \
    mssql-cli \
 && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["mssql-cli"]
