#!/bin/bash
set -e

# Render template with environment variables
envsubst < /docker-entrypoint-initdb.d/init-local-config.sql.template > /tmp/init-local-config.sql

# Wait until MySQL is up
until mysqladmin ping -h"localhost" -u"${MYSQL_USER}" -p"${MYSQL_PASSWORD}" --silent; do
  echo "Waiting for MySQL..."
  sleep 3
done

# Execute the rendered SQL
mysql -u"${MYSQL_USER}" -p"${MYSQL_PASSWORD}" "${MYSQL_DATABASE}" < /tmp/init-local-config.sql
echo "✅ Local Magento config applied."
