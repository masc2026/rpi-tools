#!/bin/sh

echo "----------------------------------------"
echo "ENTRYPOINT GESTARTET (Zeitstempel: $(date))"
echo "Der ENV_MODE ist: $ENV_MODE"

if [ "$ENV_MODE" = "production" ]; then
    echo "--> Konfiguriere Nginx für PRODUKTION"
    
    cp /etc/nginx/conf.d/production.conf /etc/nginx/conf.d/default.conf
    
    if [ -f /etc/nginx/conf.d/development.conf ]; then
        echo "--> Lösche inaktive development.conf"
        rm /etc/nginx/conf.d/development.conf
    fi

elif [ "$ENV_MODE" = "development" ]; then
    echo "--> Konfiguriere Nginx für ENTWICKLUNG"
    cp /etc/nginx/conf.d/development.conf /etc/nginx/conf.d/default.conf
else
    echo "WARNUNG: Kein gültiger ENV_MODE gesetzt ($ENV_MODE). Nutze Standard."
fi

echo "--> Starte Hauptprozess (exec '$@')"
echo "----------------------------------------"

exec "$@"