FROM jenkins/jenkins:lts-jdk17
USER root
RUN groupadd -f docker \
    && usermod -aG docker jenkins
USER jenkins
