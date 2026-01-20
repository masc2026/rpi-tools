# Verwenden des offiziellen Nginx Basisimages
FROM nginx:1.26.0

RUN --mount=type=cache,target=/var/cache/apt \
    --mount=type=cache,target=/var/lib/apt/lists \
    apt-get update && apt-get install -y \
    nano \
    tree

# Setzen des Arbeitsverzeichnisses
WORKDIR /etc/nginx

# Kopieren der Konfigurationsdateien
COPY ./development_nginx.conf /etc/nginx/conf.d/development.conf
COPY ./production_nginx.conf /etc/nginx/conf.d/production.conf
COPY ./entrypoint.sh /entrypoint.sh

# Ausführbare Rechte für das Skript
RUN chmod +x /entrypoint.sh

# Entry Point Skript
ENTRYPOINT ["/entrypoint.sh"]

# Port freigeben
EXPOSE 5000

# Startbefehl für Nginx
CMD ["nginx", "-g", "daemon off;"]
