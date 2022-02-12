pipeline {
    agent any

    stages {


        stage('React Test'){
            steps{
                dir('frontend') {
                    dir('frontend') {
                        bat 'echo %cd%'
                        bat 'npm test'
                    }
                }
            }
        }
    }
}
