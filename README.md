### Installation 

ATTENTION le back ne contient pas le .env voici un exemple de .env:

### " MONGODB_URL=mongodb+srv://<pseudo>:<passe>@board0.9zgjlkq.mongodb.net/?retryWrites=true&w=majority "

### npm install 

### npm start



API pour les offres d'emploi
Routes disponibles
### GET /api/jobs
Retourne toutes les offres d'emploi présentes dans la base de données.

### GET /api/jobs/search
Recherche les offres d'emploi selon les paramètres de recherche fournis dans la requête.

### GET /api/jobs/:id
Retourne une offre d'emploi par son identifiant unique.

### POST /api/jobs/create/
Ajoute une nouvelle offre d'emploi à la base de données.

### DELETE /api/jobs/:id
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

###Technologies utilisées
###Node.js
###Express.js
###MongoDB
###Mongoose
###Moment


exemple de données attendu : 
_id possède un underscore car Mongodb fait un id de lui même (pour plus de sécurité )

"_id": "6446f09d68efb09521e6e731",
        "company": "OpenAI",
        "logo": "https://www.example.com/openai-logo.svg",
        "logoBackground": "#FFFFFF",
        "position": "Développeur Logiciel",
        "postedAt": "2023-04-20T00:00:00.000Z",
        "contract": "Full time",
        "location": "États-Unis",
        "website": "https://www.openai.com/",
        "apply": "https://www.example.com/postuler",
        "description": "OpenAI cherche un développeur logiciel passionné pour rejoindre notre équipe de recherche en intelligence artificielle. Nous recherchons un candidat possédant une expérience de travail avec des langages de programmation comme Python, C++, et TensorFlow.",
        "__v": 0
    }
