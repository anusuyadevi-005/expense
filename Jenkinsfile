pipeline {
    agent any

    tools {
        nodejs "Node16"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/anusuyadevi-005/expense.git'
            }
        }

        stage('Install Dependencies') {
    steps {
        dir('expense') {
            bat "npm install"
        }
    }
}


        stage('Build') {
            steps {
                dir('expense') {
                    bat "npm run build"
                }
            }
        }

        stage('Archive') {
            steps {
                // If React, use build/**; if Angular/Vue, use dist/**
                archiveArtifacts artifacts: 'dist/**, build/**', fingerprint: true
            }
        }
    }
}
