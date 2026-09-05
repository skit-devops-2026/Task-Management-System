pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                bat 'echo No external dependencies required'
            }
        }

        stage('Test') {
            steps {
                 bat '"C:\\Program Files\\Git\\bin\\bash.exe" tests/test_project.sh'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Static HTML/CSS/JavaScript project - build check passed'
            }
        }
    }

    post {
        success {
            echo 'Organizr pipeline completed successfully!'
        }
        failure {
            echo 'Organizr pipeline failed.'
        }
    }
}