FROM node:24-bullseye-slim

# Normal upstream repo is currently down
RUN rm -f /etc/apt/sources.list.d/debian.sources \
    && printf '%s\n' \
       'deb http://ftp.debian.org/debian bookworm main' \
       'deb http://ftp.debian.org/debian bookworm-updates main' \
       'deb http://security.debian.org/debian-security bookworm-security main' \
       > /etc/apt/sources.list \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get update --error-on=any \
    && apt-get upgrade -y \
    && apt-get install -y make python3 \
    && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production

RUN addgroup --gid 1017 --system appgroup \
  && adduser --uid 1017 --system appuser --gid 1017

WORKDIR /app

COPY . .

RUN npm install

RUN chown -R appuser:appgroup /app

USER 1017

RUN chmod +x start.sh

CMD ["./start.sh"]
