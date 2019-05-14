FROM debian:stretch

RUN apt-get update && apt-get install -y \
    apt-transport-https \
    curl \
    gnupg \
    wget \
 && wget -qO- https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
 && echo "deb [arch=amd64] https://packages.microsoft.com/debian/9/prod stretch main" \
    | tee /etc/apt/sources.list.d/mssql-cli.list \
 && apt-get update && apt-get install -y \
    mssql-cli \
 && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["mssql-cli"]
