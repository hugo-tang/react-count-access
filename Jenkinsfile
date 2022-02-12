pipeline {
    agent any

    stages {
        stage('build'){
            steps{
                bat 'docker-compose up -d'
            }
        }

        stage("Sleep") {
            steps {
            sleep time: 30, unit: 'SECONDS'
            }
        }

        stage('React Test'){
            steps{
                bat 'cd frontend/src'
                bat 'npm test'
            }
        }
    }
}
