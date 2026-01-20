#!/bin/bash
# entrypoint.sh

echo "--> Kopiere eigene Assets (Logo/Favicon)..."

mkdir -p /data/gitea/public/assets/img

# Bilder kopieren
cp -f /tmp/assets/favicon.svg /data/gitea/public/assets/img/favicon.svg
cp -f /tmp/assets/favicon.png /data/gitea/public/assets/img/favicon.png
cp -f /tmp/assets/logo.svg /data/gitea/public/assets/img/logo.svg

echo "--> Korrigiere Dateirechte..."
chown -R 1000:1000 /data/gitea/public

# Den Original-Entrypoint von Forgejo aufrufen
exec /usr/bin/entrypoint "$@"
