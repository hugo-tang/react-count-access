pipeline {
    agent any

    stages {


        stage('React Test'){
            steps{
                dir('frontend') {
                    dir('src') {
                        bat 'echo %cd%'
                        bat 'npm install'
                        bat 'npm test'
                    }
                }
            }
        }
    }
}
