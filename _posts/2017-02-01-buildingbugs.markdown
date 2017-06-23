---
id_name: buildingbugs
layout: project
title:  "Building Bugs"
date:   2017-02-01 15:30:11 +0100
categories: projects
context: cstar Industries
duration: 4 mois
start_project: Février 2017
developers: 3
links: http://buildingbugs.com
icons: react ios android aws pusher codepush auth0 angular-icon html-5 sass gulp git
images:
  img_1: Building Bugs | Home de l'application mobile
  img_2: Building Bugs | Un exemple de liste de tickets
  img_3: Building Bugs | Page d'aide
  img_4: Building Bugs | Menu de l'application
  img_5: Building Bugs | Interface d'administration (accueil)
  img_6: Building Bugs | Première page de la landing page
---

Building Bugs est, avant tout, une application mobile permettant aux locataires d'un
bâtiment (centre commercial, bureaux ...) de signaler les différentes problèmes
rencontrés (nuisance, entretien, sécurité ...). Ces incidents sont ensuite
remontées aux gérants via la plate-forme d'administration.

Le but est de faciliter le processus d'échange entre le locataire et son gérant afin de
pouvoir traiter l'incident le plus efficacement possible.

> Building Bugs ne se substitue pas aux différents acteurs de la gestion immobilière, elle
> place l’occupant au cœur d’un cercle vertueux qui transforme l’ensemble
> immobilier pour créer un lieu de vie et de partage dans lequel chacun agit
> dans l’intérêt commun.

Tout au long du processus, le locataire est informé de l'avancement de son
ticket; que ce soit lors de la validation de la prise en charge du ticket ou
encore de lors de la prise en rendez-vous d'intervention.

Le gérant de l'immeuble possède son interface d'administration depuis laquelle
il peut traiter les tickets en attente. Il a aussi accès à toutes une série de
statistiques.

Le propriétaire du bâtiment peut, quant à lui, avoir une vue d'ensemble
des problèmes remontés sur ses immeubles que ce soit par locataires, par
catégories d'incidents ou même à travers plusieurs bâtiments.

> Grâce à son interactivité, Building Bugs devient la passerelle entre les occupants des
> ensembles immobiliers , leurs propriétaires et les prestataires de service
> qui assurent la gestion courante (property manager, facilty manager,
> prestataires techniques, PC sécurité , etc ...).


[Plus d'informations sur Building Bugs][landing]


Ce projet s'articule donc autour de 3 "sous-projets":
- une application mobile dédié au locataire pour le signalement de bugs
- une plateforme d'administration pour le gérant
- une landing page

### Application mobile

Développé avec React Native, l'application est disponible sur [iOS][ios] et
[Android][android]. Elle se compose majoritairement d'une partie "Création de
ticket" et d'une partie "Liste de tickets".

Le processus de signalement d'un incident a été conçu dans l'idée de le rendre
le plus simple et le plus complet possible afin que le property puisse traiter
l'information le plus efficacement.

Dans la liste des tickets, l'utilisateur peut à la fois retrouver l'ensemble
des tickets ouverts pour sa partie privative mais aussi pour celle des parties
communes et y suivre leurs avancements.

Au niveau du back-end, l'application se base majoritairement sur les services
[AWS][aws] ([SNS][sns], [S3][s3], [DynamoDB][dynamodb], [API
Gateway][apigateway], [Lambda][lambda]) et sur [Auth0][auth0] pour tout le processus
d'authentification et de gestion des utilisateurs.

Toute la partie stockage est gérée par [S3][s3] / [DynamoDB][dynamodb] et la
logique de l'application par le couple [Lambda][lambda] / [API
Gateway][apigateway]. Au niveau de la gestion de l'ensemble des services
[AWS][aws], nous utilisons le framework [Serverless][serverless].

### Administration

Contrairement à l'application mobile qui est uniquement dédié aux locataires,
la plateforme d'administration est à la fois un outils pour le property manager
mais aussi pour le propriétaire.

Côté technologie, elle est basée sur [AngularJS (v1)][angular] avec du [D3.js][d3]
pour toute la partie graphe/statistiques. Au niveau du back-end, elle se base à la fois
sur l'API développée pour l'application mobile ([Lambda][lambda] / [API Gateway][apigateway])
mais aussi sur une API spécifique à l'administration.

Tout comme le locataire, le gérant est notifié en temps-réel des différentes
mises à jour des tickets.

### Landing page

Cette page de présentation du produit Building Bugs se base sur des
technologies comme HTML5, [SASS][sass], Javascript et le plugin [One Page
Scroll][onepagescroll].

### Un projet riche et varié

L'équipe pour ce projet était composée de:
- [Philippe Poux][poux]: Chef de projet fonctionnel
- [Eric Cestari][cstar]: Chef de projet technique
- [Stéphane Schmidely][stephlm2dev]: Lead développeur
- [Yoan Dieu][yoan]: Développeur
- [Diouma Traore][diouma]: Développeur junior
- [Juliette Ramos][juliette]: Designer UI / UX Freelance

Au niveau de la répartion des développements, Diouma s'est occupée de la
landing page et de l'administration. Yoan a, quant à lui, participer au
développement de l'application mobile et a travaillé en collaboration avec
Diouma sur l'administration. Pour ma part, j'ai majoritairement travaillé sur
toute la partie application mobile et le back-end.

Ce projet a été pour moi une nouvelle occasion de développer une application
mobile (native cette fois-ci avec [React Native][reactnative] - [Ionic][ionic]
pour les fois précédentes). Ce fut aussi, une très bonne opportunité
d'approfondir ou de découvrir les différents services d'Amazon Web Services et
de pouvoir les mettre en place autour d'une [architecture serverless][fowler].

_En résumé, ce projet a été pour moi l'opportunité de découvrir ou d'approfondir un
certains nombres de concept ([serverless][serverless], [React][reactnative] ...) et
de vouloir continuer à explorer d'autres alternatives ([Cloud Functions][google],
[Azure Functions][azure], [NativeScript][nativescript])._

[landing]: http://buildingbugs.com
[ios]: https://appsto.re/fr/FIq5ib.i
[android]: https://play.google.com/store/apps/details?id=com.techbugs.buildingbugs&hl=fr
[aws]: https://aws.amazon.com/fr/
[sns]: https://aws.amazon.com/fr/sns/
[s3]: https://aws.amazon.com/fr/s3/
[dynamodb]: https://aws.amazon.com/fr/dynamodb/
[apigateway]: https://aws.amazon.com/fr/api-gateway/
[lambda]: https://aws.amazon.com/fr/lambda/
[serverless]: https://serverless.com
[angular]: https://angularjs.org
[d3]: https://d3js.org
[auth0]: https://auth0.com
[onepagescroll]: https://github.com/peachananr/onepage-scroll
[sass]: http://sass-lang.com
[poux]: https://fr.linkedin.com/in/ppxppx
[stephlm2dev]: http://stephlm2dev.github.io/
[yoan]: https://fr.linkedin.com/in/yoan-dieu-821b83104
[diouma]: http://www.dioumatraore.com/
[cstar]: https://fr.linkedin.com/in/ecestari
[juliette]: https://juliette-ramos-designer.squarespace.com
[reactnative]: https://facebook.github.io/react-native/
[ionic]: https://ionicframework.com
[fowler]: https://martinfowler.com/articles/serverless.html
[google]: https://cloud.google.com/functions/
[azure]: https://azure.microsoft.com/fr-fr/services/functions/
[nativescript]: https://www.nativescript.org
