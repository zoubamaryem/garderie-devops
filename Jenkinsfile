pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('frontend') {
                    bat 'npm test'
                }
            }
        }

        stage('Build Backend') {
            steps {
                bat 'docker build -t garderie-backend ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                bat 'docker build -t garderie-frontend ./frontend'
            }
        }
    }
}