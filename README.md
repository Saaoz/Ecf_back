API pour les offres d'emploi
Routes disponibles
GET /api/jobs
Retourne toutes les offres d'emploi présentes dans la base de données.

GET /api/jobs/search
Recherche les offres d'emploi selon les paramètres de recherche fournis dans la requête.

GET /api/jobs/:id
Retourne une offre d'emploi par son identifiant unique.

POST /api/jobs/create/
Ajoute une nouvelle offre d'emploi à la base de données.

DELETE /api/jobs/:id
Supprime une offre d'emploi existante de la base de données en utilisant l'identifiant unique.

Fonctionnalités disponibles
Récupération de toutes les offres d'emploi présentes dans la base de données.
Recherche d'offres d'emploi selon les paramètres de recherche fournis dans la requête.
Récupération d'une offre d'emploi spécifique en utilisant son identifiant unique.
Ajout d'une nouvelle offre d'emploi à la base de données.
Mise à jour d'une offre d'emploi existante dans la base de données en utilisant l'identifiant unique.
Suppression d'une offre d'emploi existante de la base de données en utilisant l'identifiant unique.
Utilisation
Pour utiliser cette API, vous devez d'abord l'installer en utilisant la commande npm install. Ensuite, vous pouvez exécuter l'API en utilisant la commande npm start. Assurez-vous que la base de données est configurée correctement dans le fichier .env avant d'exécuter l'API.

Technologies utilisées
Node.js
Express.js
MongoDB
Mongoose
Moment
