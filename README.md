# FlashCards
## Objectif pédagogique

L'objectif pédagogique de cette pratique est d'apprendre à utiliser les principaux composants de AdonisJS et de savoir les mettre en pratique dans un projet concret. À travers ce travail, je dois développer ma capacité à comprendre le fonctionnement du framework et à l’utiliser correctement pour créer différentes fonctionnalités. L'utilisation de l'intelligence artificielle est autorisée pour m'aider pendant la réalisation de la pratique. Cependant, je dois être capable de comprendre et d'expliquer chaque ligne de code que j'écris ou que je copie afin de montrer que je maîtrise réellement ce que je fais.


## Objectif produit

L'objectif du produit est de développer une application web intitulée Flashcards. C'est une application destinée aux étudiants qui cherchent à approfondir leurs connaissances dans une matière de manière amusante.
Une flashcard est une carte qui contient, d'un côté, une question et, de l'autre, une réponse. Pour s'exercer, l'utilisateur parcourt toutes les cartes du deck de son choix en commençant par le côté question. L'utilisateur donne ensuite une réponse, puis la vérifie avec l'autre côté de la carte, qui contient la réponse correcte. Les cartes sont regroupées par thème (decks) que l'utilisateur choisit entièrement.

## Utilisation

Pour utiliser l'application Flashcards il faut clôner le repository en faisant :

```bash
git clone https://github.com/latifcodess/FlashCards.git
cd FlashCards
```

ensuite il faut installer les dependances :

```bash
cd src
npm install
```

pour finir lancer le projet : 
```bash
npm run dev
```

## Bilan

J'ai réussi à implémenter un CRUD complet pour les decks et les cartes, ce qui permet de créer, modifier, supprimer et consulter facilement ces éléments. J'ai également ajouté un mode d'exercice, qui permet d'utiliser les cartes pour s'entraîner et tester ses connaissances. Cependant, je trouve un peu dommage que nous n'ayons pas eu le temps de développer la partie inscription et connexion. Travailler sur cette fonctionnalité m’aurait permis d’apprendre comment fonctionne un système d’authentification, par exemple la gestion des comptes, la vérification des identifiants, ou encore la sécurisation des mots de passe. Cela aurait été intéressant car c’est une fonctionnalité très présente dans les applications réelles, et la mettre en place aurait été une bonne occasion de découvrir concrètement comment on gère l’authentification dans une application.

## Utilisation de l'IA

Dans ce projet, j’ai principalement utilisé l’intelligence artificielle pour les parties qui ne concernent pas AdonisJS, c’est-à-dire pour le HTML, le CSS et le JavaScript du frontend ainsi que pour la partie liée aux exercices. L’IA m’a aidé à générer certaines structures de code et à accélérer le développement de l’interface. Cependant, pour tout le JavaScript qui n’est pas lié à AdonisJS, j’ai pris le temps d’étudier attentivement le code généré afin de bien le comprendre et d’être capable de l’expliquer. Cela m’a permis d’apprendre comment les différentes fonctionnalités fonctionnent et d’éviter d’utiliser du code sans le maîtriser. En revanche, je n’ai pas forcément analysé en détail le CSS généré, car mon objectif principal était de me concentrer sur l’architecture MVC et le fonctionnement du framework AdonisJS. Toute la partie backend liée à AdonisJS, incluant l’organisation du projet selon le modèle MVC, la gestion des routes, des contrôleurs et de la logique serveur, a été réalisée entièrement par moi-même sans l’aide de l’IA. Cette approche m’a permis de prioriser l’apprentissage des concepts importants du framework tout en utilisant l’IA comme un outil d’assistance pour les aspects plus visuels du projet.
