FROM php:8.3-apache

# Dependencias del sistema
RUN apt-get update && apt-get install -y \
  git \
  unzip \
  curl \
  libzip-dev \
  libpng-dev \
  libonig-dev \
  libxml2-dev \
  && docker-php-ext-install \
  pdo_mysql \
  mbstring \
  zip \
  exif \
  pcntl \
  && a2enmod rewrite

# 👉 Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- \
  --install-dir=/usr/local/bin \
  --filename=composer

# DocumentRoot Laravel
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
  /etc/apache2/sites-available/*.conf \
  /etc/apache2/apache2.conf \
  /etc/apache2/conf-available/*.conf

WORKDIR /var/www/html
