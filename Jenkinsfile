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
				fileOperations([
					fileDeleteOperation(
						includes: '/deployment/index.html', 
						excludes: ''
					),
					fileCopyOperation(
						includes: 'index.html', 
						excludes: '', 
						targetLocation: '/deployment', 
						flattenFiles: false
					)
				])
            }
        }
    }
}