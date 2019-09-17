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
				fileOperations {
					fileDeleteOperation('/deployment/index.html', '')
					fileCopyOperation('index.html', '', '/deployment', false)
				}
            }
        }
    }
}