FROM opensearchproject/opensearch:2.11.1

# Single-node mode (required for dev/upgrade environments)
ENV discovery.type=single-node
# ENV OPENSEARCH_JAVA_OPTS="-Xms1g -Xmx1g"   # Optional, uncomment if you want fixed heap

# Install required plugins – OpenSearch syntax
RUN /usr/share/opensearch/bin/opensearch-plugin install --batch analysis-icu \
 && /usr/share/opensearch/bin/opensearch-plugin install --batch analysis-phonetic

WORKDIR /usr/share/opensearch
