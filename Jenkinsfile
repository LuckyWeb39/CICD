pipeline {
	agent any

	environment {
		REGISTRY = "LuckyWeb39"
		IMAGE_NAME = "CICD"
		IMAGE_TAG = "${env.GIT_COMMIT}"
		FULL_IMAGE = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
	}

	stages {
		stage("Checkout") {
			steps {
				checkout scm
			}
		}

		stage("Build Docker image") {
			steps {
				sh "docker build -t ${FULL_IMAGE} ."
			}
		}

		stage("Push image") {
			steps {
				withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
					sh """
            echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin
            docker push ${FULL_IMAGE}
          """
				}
			}
		}

		stage("Deploy STAGING") {
			steps {
				sshagent(credentials: ['vps-ssh-key']) {
					sh """
            ssh -o StrictHostKeyChecking=no deploy@31.129.110.81 '
              cd ~/apps/clicker-docker &&
              echo IMAGE_TAG=${IMAGE_TAG} > deploy/staging/.env &&
              docker compose --env-file deploy/staging/.env -f deploy/staging/docker-compose.yml pull &&
              docker compose --env-file deploy/staging/.env -f deploy/staging/docker-compose.yml up -d
            '
          """
				}
			}
		}

		stage("Approve PROD") {
			steps {
				input message: "Deploy to PROD?"
			}
		}

		stage("Deploy PROD") {
			steps {
				sshagent(credentials: ['vps-ssh-key']) {
					sh """
            ssh -o StrictHostKeyChecking=no deploy@31.129.110.81 '
              cd ~/apps/clicker-docker &&
              echo IMAGE_TAG=${IMAGE_TAG} > deploy/prod/.env &&
              docker compose --env-file deploy/prod/.env -f deploy/prod/docker-compose.yml pull &&
              docker compose --env-file deploy/prod/.env -f deploy/prod/docker-compose.yml up -d
            '
          """
				}
			}
		}
	}
}