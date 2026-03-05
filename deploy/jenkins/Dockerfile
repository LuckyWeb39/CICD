FROM jenkins/jenkins:lts-jdk17
USER root
RUN apt-get update && apt-get install -y docker.io && rm -rf /var/lib/apt/lists/*
RUN groupmod -g 988 docker \
    && usermod -aGdocker jenkins
USER jenkins
