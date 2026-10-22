
# Ma Garderie - Projet DevOps

**Étudiante :** Zouba Maryem  
**Formation :** Master DevOps & Cloud

## Présentation

Ma Garderie est une application Web composée d'un frontend Next.js et d'un backend Node.js/Express.

L'application permet d'afficher les informations de la garderie, les services proposés et les activités disponibles à travers une API REST.

---

## Technologies utilisées

- Frontend : Next.js
- Backend : Node.js / Express
- Tests : Jest
- Conteneurisation : Docker
- Orchestration : Docker Compose
- CI/CD : Jenkins
- Virtualisation : Vagrant
- Configuration : Ansible
- Gestion de versions : Git / GitHub

---

## Architecture du projet

```text
garderie-devops/
│
├── frontend/
├── backend/
├── ansible/
│   ├── inventory.ini
│   ├── site.yml
│   └── roles/docker/tasks/main.yml
│
├── deploy/
│   └── docker-compose.yml
│
├── screenshots/
│
├── Jenkinsfile
├── Vagrantfile
├── docker-compose.yml
└── README.md
```

---

## API REST

### Informations de la garderie

```http
GET /api/garderie
```

### Services

```http
GET /api/services
```

### Activités

```http
GET /api/activites
```

---

## Jenkins Pipeline

Pipeline défini dans :

```text
Jenkinsfile
```

Étapes :

1. Checkout
2. Install
3. Test
4. Build Frontend
5. Build Backend
6. Push Frontend
7. Push Backend

Le pipeline s'arrête automatiquement en cas d'échec des tests.

---

## Images Docker Hub

Frontend :

```text
https://hub.docker.com/r/maryem102/garderie-frontend
```

Backend :

```text
https://hub.docker.com/r/maryem102/garderie-backend
```

---

## Création et provisioning de la VM

```bash
vagrant up
```

Connexion SSH :

```bash
vagrant ssh
```

Adresse IP privée :

```text
192.168.56.10
```

---

## Déploiement avec Docker Compose

Depuis la VM :

```bash
cd /vagrant/deploy

docker-compose pull
docker-compose up -d
```

Vérification :

```bash
docker ps
```

---

## Accès à l'application

Frontend :

```text
http://192.168.56.10:3000
```

API :

```text
http://192.168.56.10:5000/api/garderie
```

---

## Captures d'écran

Les captures d'écran sont disponibles dans le dossier :

```text
screenshots/
```

- Docker Hub
- Vagrant
- Docker Compose
- APIs REST
- Application Web
- Conteneurs Docker

---

## Auteur

Zouba Maryem

Master DevOps & Cloud
