# Dockerfile for Magento cron
FROM magento_php83_base

COPY ./docker_images/magento_php_cron/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

RUN echo "memory_limit=2G" > /usr/local/etc/php/conf.d/memory-limit.ini

# Set working directory
WORKDIR /var/www/magento

# Default command: loop through Magento cron jobs
CMD ["/usr/local/bin/entrypoint.sh"]
