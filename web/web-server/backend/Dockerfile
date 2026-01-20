# Update auf Node 22
FROM node:22.21.1

# WICHTIG: Zuerst in das Verzeichnis wechseln
WORKDIR /app

# Dann die Paket-Infos kopieren
COPY package*.json ./

# Dann installieren (jetzt landen die Module in /app/node_modules)
RUN npm install

# Zum Schluss den Rest kopieren
COPY . .

EXPOSE 3000
CMD ["npm", "start"]