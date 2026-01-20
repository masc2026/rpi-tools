FROM codeberg.org/forgejo/forgejo:13.0

# 1. Assets in einen temporären Ordner im Image kopieren
COPY assets/favicon.svg /tmp/assets/favicon.svg
COPY assets/favicon.png /tmp/assets/favicon.png
COPY assets/logo.svg /tmp/assets/logo.svg

# 2. Unser Start-Skript kopieren
COPY entrypoint.sh /entrypoint-wrapper.sh

# 3. Skript ausführbar machen
RUN chmod +x /entrypoint-wrapper.sh

# 4. Unseren Wrapper als neuen Entrypoint setzen
ENTRYPOINT ["/entrypoint-wrapper.sh"]