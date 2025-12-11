#!/bin/bash
set -e

echo "🚀 Starting Magento cron container..."
cd ${MAGENTO_ROOT:-/var/www/magento}

# Run indefinitely every minute
while true; do
  echo "⏰ Running cron at $(date '+%Y-%m-%d %H:%M:%S')"
  php bin/magento cron:run | grep -v "Ran jobs by schedule" || true
  sleep ${CRON_INTERVAL:-60}
done
