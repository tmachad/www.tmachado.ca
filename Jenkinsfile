pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
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
							verbose: true,
							transfers: [
								sshTransfer(
									sourceFiles: "index.html"
								)
							]
						)
					]
				)
            }
        }
    }
}