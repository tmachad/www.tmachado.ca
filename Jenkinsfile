pipeline {
    agent any
    options {
        skipDefaultCheckout true
    }
    
    stages {
        stage('Pre-Checkout') {
            steps {
                sh 'git lfs install'
            }
        }
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
				sshPublisher(
					continueOnError: false,
					failOnError: true,
					publishers: [
						sshPublisherDesc(
							configName: "Website Server",
							transfers: [
								sshTransfer(
									sourceFiles: "**/*.html, images/**/*, scripts/**/*.js, styles/**/*.css, node_modules/**/*"
								)
							]
						)
					]
				)
            }
        }
    }
}