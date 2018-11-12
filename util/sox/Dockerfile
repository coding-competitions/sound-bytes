FROM ubuntu

LABEL description="Wrapper for Sound eXchange"

RUN apt-get update && apt-get -y install sox

VOLUME [ "/data" ]
WORKDIR /data

ENTRYPOINT [ "/usr/bin/sox" ]
