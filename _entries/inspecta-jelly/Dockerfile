FROM python:3
RUN git clone -q https://github.com/DennisMitchell/jellylanguage.git && \
    cd jellylanguage && \
    pip3 install --upgrade --user .

WORKDIR /jellylanguage

RUN mkdir /code
COPY inspecta.jelly /code

CMD [ "python", "./jelly/__main__.py", "f", "/code/inspecta.jelly" ]
