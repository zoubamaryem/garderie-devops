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
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('frontend') {
                    sh 'npm test'
                }
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t garderie-backend ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t garderie-frontend ./frontend'
            }
        }
    }
}