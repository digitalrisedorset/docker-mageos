FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y nginx vim && \
    rm -rf /var/lib/apt/lists/*

# Remove default site to avoid conflicts
RUN rm -f /etc/nginx/sites-enabled/default

# Copy the local nginx/ folder (conf, sites, snippets, ssl)
COPY ./nginx /etc/nginx
# Replace all '-local' hostnames with '-docker' for container runtime
RUN find /etc/nginx/sites-enabled -type f -name "*" -exec sed -i 's/-local/-docker/g' {} +

# Match Magento docroot
WORKDIR /var/www/magento

CMD ["nginx", "-g", "daemon off;"]
