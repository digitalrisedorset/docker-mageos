#!/bin/bash
set -e

echo "⚙️  Generating app/etc/env.php ..."

# Ensure destination folder exists
mkdir -p /var/www/magento/app/etc

# Generate env.php by replacing placeholders
envsubst < /docker-entrypoint-initdb.d/env.php.template > /var/www/magento/app/etc/env.php

echo "✅ env.php created at /var/www/magento/app/etc/env.php"

cd /var/www/magento
find var generated vendor pub/static pub/media app/etc -type f -exec chmod g+w {} +
find var generated vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} +

exec "$@"