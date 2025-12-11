FROM php:8.3-fpm

# Install system dependencies + PHP extensions
RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libicu-dev libpng-dev libonig-dev libxml2-dev \
    libxslt1-dev libjpeg62-turbo-dev libfreetype6-dev libcurl4-openssl-dev \
    libssl-dev pkg-config libedit-dev gettext libsodium-dev libsodium23 \
    && docker-php-ext-install intl pdo_mysql zip ftp calendar \
    && docker-php-ext-enable calendar \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd mbstring soap xsl bcmath opcache sockets \
    && pecl install redis \
    && docker-php-ext-enable redis

# Copy Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
WORKDIR /var/www/magento