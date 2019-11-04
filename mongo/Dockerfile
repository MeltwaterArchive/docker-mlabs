FROM debian:stretch

RUN apt-get update && apt-get install -y \
    gnupg \
    wget \
 && wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add - \
 && echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.2 main" \
    | tee /etc/apt/sources.list.d/mongodb-org-4.2.list \
 && apt-get update && apt-get install -y \
    mongodb-org-shell \
 && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["mongo"]
