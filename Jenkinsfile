pipeline {
    agent any

    stages {
        stage('build'){
            steps{
                bat 'docker-compose up -d'
                bat 'cd frontend/src'
                bat 'npm test'
            }
        }
    }
}
