pipeline {
    agent any

    stages {


        stage('React Test'){
            steps{
                bat 'echo %cd%'
                bat 'cd ./frontend'
                bat 'echo %cd%'
                bat 'npm test'
            }
        }
    }
}
