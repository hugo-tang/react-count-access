pipeline {
    agent any

    stages {


        stage('React Test'){
            steps{
                bat 'echo %cd%'
                bat 'dir'
                bat 'cd ./frontend/src'
                bat 'echo %cd%'
                bat 'dir'
                bat 'npm test'
            }
        }
    }
}
