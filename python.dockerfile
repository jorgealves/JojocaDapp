FROM python:3

RUN mkdir /project

ADD . /project

WORKDIR /project

VOLUME [ "/project" ]

EXPOSE 8000

RUN pip install -r requirements/docker.pip

CMD [ "bash" ]