---
id_name: neuroprofiler
layout: project
title:  "Neuroprofiler"
date:   2016-07-01 15:30:11 +0100
categories: projects
context: cstar Industries
duration: Toujours en cours
start_project: Juillet 2016
developers: 3
links: http://app.neuroprofiler.com/
icons: rails rubocop postgresql angular-icon aws sass git heroku
images:
  img_1: Neuroprofiler | Home
---

Crée par [Tiphaine Saltini][tiphaine] et [Julien Revelle][julien], Neuroprofiler
se présente sous la forme d'une application web.

> Basé sur les dernières avancées en Finance Comportementale, Neuroprofiler est
un outil de profilage de risque, conforme aux directives MiFIDII, pour les
conseillers financiers.

Leur application s'articule autour d'une administration et d'une partie publique.

L'administration, disponible pour les conseillers financiers, leur permet à la
fois de générer des test clients mais aussi de pouvoir acheter de nouveaux
crédits.

La partie publique concerne le passage de questionnaire et l'affichage des
résultats. Lorsqu'un client passe le test, il est amené à rencontrer
majoritairement deux types d'écran: des questions sur lui, sur ses actifs ...
et des petits "jeux" développés par [Neuroprofiler][neuroprofiler] afin de
déterminer au mieux son profil.

### La première version

Récupérée quelques mois après le lancement de la première version, l'application
avait été développée en Ruby on Rails. Quelques temps après, nous sommes passés
sous AngularJS (v1.5), motivés notamment par une expérience utilisateur fluide
et dynamique lors du passage de questionnaire par le client.

Ce n'est pas sans difficulté que le passage s'est fait car l'application avait
une structure de données assez complexe et n'avait pas été du tout pensé pour
être utilisée sous forme d'API. Nous avons donc dû modifier l'application
existante, non sans difficulté, pour pouvoir l'utiliser avec AngularJS.

Ce fut le même souci lorsque nous devions rajouter de nouvelles fonctionnalités
à cause d'un format trop rigide et complexe. Lorsque de nouvelles features
assez importantes nous ont été demandées, cela a été le déclencheur pour
ré-écrire le back-end de l'application.

### La nouvelle version

Développé pendant l'été 2017, cette nouvelle version marque le re-nouveau de
l'API et de l'administration de Neuroprofiler.

Débuter en Septembre, l'API Neuroprofiler a complètement été refaite et
repensée pour s'adapter aux nouveaux besoins et avoir plus de flexibilité.
Ce fût l'occasion d'avoir une application pensée en "mode" API et d'ajouter
de nouvelles fonctionnalités (côté back-end et front-end).

Pour cela, l'équipe était composée de:
- [Stéphane Schmidely][stephlm2dev]: Lead développeur
- [Eric Cestari][cstar]: Développeur
- [Yoan Dieu][yoan]: Développeur

Yoan s'est majoritairement occupé de toute la refonte de l'API en Ruby on
Rails avec l'aide de Eric et moi sur certains points. Le code a, par
ailleurs, été passé sous [RuboCop][rubocop] afin de suivre les bonnes pratiques
Ruby et d'en améliorer la qualité. Toujours dans cette optique d'écrire une
belle API, une documentation basée sur [Slate][slate] a été rédigée
afin que les futurs intégrateurs techniques puissent avoir une documentation
claire et précise.

Ce changement de base de données nous a aussi permis d'améliorer le format de
données des questions pour avoir un système plus souple, avec moins de
redondance et surtout un format unifié entre toutes les questions.

Côté front-end, le code a été revue et simplifié suite au passage sur la
nouvelle API.

Débuté en Décembre, l'administration va subir à son tour une refonte totale
suite à l'ajout de nouvelles fonctionnalités. Adieu AngularJS, l'application
est passée sous Angular 5.

A suivre ...

[tiphaine]: https://www.linkedin.com/in/tiphaine-saltini-9523b126
[julien]: https://www.linkedin.com/in/julien-revelle-6967a6109
[neuroprofiler]: https://www.neuroprofiler.com
[stephlm2dev]: http://stephlm2dev.github.io/
[cstar]: https://fr.linkedin.com/in/ecestari
[yoan]: https://fr.linkedin.com/in/yoan-dieu-821b83104
[rubocop]: https://github.com/bbatsov/rubocop
[slate]: https://github.com/lord/slate
