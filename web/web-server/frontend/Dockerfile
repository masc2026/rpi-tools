# Basisimage
FROM node:22.21.1

# Arbeitsverzeichnis im Container
WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./

RUN npm install

# App-Quellcode kopieren
COPY . .

RUN npm run clean
RUN npm run build

# Port freigeben
EXPOSE 5080

# App starten
CMD ["npm", "run", "serve"]
