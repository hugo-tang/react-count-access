pipeline {
    agent any

    stages {
        stage('build'){
            steps{
                bat 'docker-compose up -d'
            }
        }
    }

    
    stage ("wait_prior_starting_smoke_testing") {
        def time = 30
        echo "Waiting ${30} seconds for deployment to complete prior starting smoke testing"
        sleep time.toInteger() // seconds
    }


    stages {
        stage('React Test'){
            steps{
                bat 'cd frontend/src'
                bat 'npm test'
            }
        }
    }
}
