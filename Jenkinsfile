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
                /*dir('frontend') {
                    dir('src') {
                        bat 'echo %cd%'
                        bat 'npm install'
                        bat 'npm test'
                    }
                }*/
            }
        }
    }
}
