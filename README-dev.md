# Magsite Docker Environment

This repository provides a **MageOS local development environment** for Magsite using Docker.  
It includes **PHP-FPM, Nginx, MySQL, Redis, OpenSearch, and Mailhog** containers.
---

## 🚀 Getting Started
## Initialise folder
Once the docker files are copied over the system, we can setup files permissions
```bash
chmod +x docker_images/magento_mysql/init-config.sh
chmod +x docker_images/magento_php/init-env.sh
```
## Install mageos
install mageos file in magento folder
```bash
composer create-project --repository-url=https://repo.mage-os.org/ mage-os/project-community-edition magento
sudo chown -R :www-data magento
```

## Add the hosts to the OS at `/etc/hosts`
```bash
127.0.0.1 mageos-docker.magsite.co.uk
```

### create ssl certifcate
openssl req -x509 -nodes -newkey rsa:2048 \
-keyout magsite.local.key \
-out magsite.local.crt \
-days 365 \
-subj "/CN=mageos-docker.magsite.co.uk"

### Create docker images 
```bash
docker build --no-cache -f docker_images/magento_php/Dockerfile -t magento_php83_base .
docker build --no-cache -f docker_images/magento_php/Dockerfile.dev -t magento_php83_dev --build-arg DEVELOPER=true .
docker build --no-cache -f docker_images/magento_php/Dockerfile.frontend -t magento_php83_frontend --build-arg GRUNT_ENABLED=true .
docker build -f docker_images/magento_mysql/Dockerfile -t magento_mysql_base .
docker compose build
docker compose up -d
```

## Install Magento for new install
First remove app/etc/env.php (eg: `mv magento/app/etc/env.php magento/app/etc/env.php.bak`)
```bash
bin/magento setup:install \
--base-url=https://mageos-docker.magsite.co.uk/ \
--db-host=mysql \
--db-name=magsite \
--db-user=magsite \
--db-password=magsite \
--admin-firstname=admin \
--admin-lastname=admin \
--admin-email=admin@admin.com \
--admin-user=admin \
--admin-password=admin123 \
--language=en_GB \
--currency=GBP \
--timezone=Europe/London \
--use-rewrites=1 \
--search-engine=opensearch \
--opensearch-host=opensearch \
--opensearch-port=9200 \
--opensearch-index-prefix=magento2 \
--opensearch-timeout=15
```
then reintegrate rabbitmq, redis settings in env.php

## Install sample data
```bash
bin/magento sampledata:deploy
bin/magento setup:upgrade
bin/magento index:reindex
```

### Prepare xdebug
ufw allow 9003/tcp (this is performed in the OS, not the container)

```bash
bin/magento set:upg or bin/magento app:config:import
php bin/magento mod:dis Magento_Csp 
bin/magento config:set dev/static/sign 0
bin/magento cache:enable
```

# Toggle local environment to docker
```bash
sudo service elasticsearch start && sudo service apache2 start && sudo service php8.1-fpm start && sudo systemctl start rabbitmq-server 
sudo service elasticsearch stop && sudo service apache2 stop && sudo service php8.1-fpm stop && sudo systemctl stop rabbitmq-server 
```

### grunt refresh
```bash
grunt clean && grunt exec:default && grunt less:default
```








































