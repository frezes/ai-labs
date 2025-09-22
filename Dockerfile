FROM ghcr.io/helm/chartmuseum:v0.16.1
LABEL maintainer="frezes"

COPY .extensions-museum/*.tgz /charts/

ENTRYPOINT ["/chartmuseum","--storage-local-rootdir","/charts","--storage","local"]