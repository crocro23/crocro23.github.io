---
title: "Qualité Logicielle et Tests"
date: "2026-04-11"
location: "Mordelles, France"
description: "Comprendre la qualité logicielle, les rôles QA, les techniques de test, les ateliers collaboratifs et les stratégies d’automatisation"
type: "test-logiciel"
tags: ["QA", "tests", "qualité", "agilité", "CI/CD", "automatisation", "testeur"]
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: true
---

# 🏆 Définition de la qualité

La qualité est l’ensemble des caractéristiques d’un produit ou d’un service qui influent sur sa capacité à satisfaire des besoins :

- Besoins déclarés → *vérification*  
- Besoins implicites → *validation*

L’assurance qualité regroupe toutes les activités planifiées et systématiques nécessaires pour garantir qu’un produit ou un service réponde aux exigences.

---

# 👥 Les rôles dans le test logiciel

Plusieurs intitulés existent :

- Ingénieur QA  
- Analyste QA  
- Ingénieur tests et validation  
- Testeur  
- Ingénieur en développement logiciel de test  

Le testeur établit et maintient les tests.

---

# 🧩 Types de besoins

## Besoins fonctionnels
Décrivent les attentes des utilisateurs.  
Présents dans les User Stories ou documents de conception.

## Besoins non fonctionnels
Concernent :
- Performance  
- Compatibilité  
- Fiabilité  
- Usabilité  

---

# 🤝 La qualité : une responsabilité collective

La qualité logicielle est portée par toute l’équipe.

- Les tests sont détectifs  
- L’ingénierie de la qualité est préventive  
- C’est la vision du manifeste du test

---

# 🚀 CI/CD et amélioration continue

Mettre en place le CI/CD permet un feedback rapide

### Activités préventives
- Tests statiques  
- Revue des spécifications  
- Pair-testing  
- Exigences testables  
- Sensibilisation de l’équipe  
- Responsabilisation collective  

---

# 🎭 Le rôle élargi du testeur

Le testeur peut être :

- Consultant  
- Spécialiste qualité  
- Coach agile  
- Leader  
- Facilitateur  
- Enseignant  
- Agent du changement  

### Compétences nécessaires
- Communication orale et écrite  
- Collaboration  
- Créativité  
- Pensée critique  
- Proactivité  

### Compétences techniques
- Bases de la programmation  
- Technologies web et mobiles  
- Connaissance des OS  
- Langages de test  
- Connaissance fonctionnelle du logiciel  

---

# 🔄 Cycle CI/CD détaillé

## Monitor
- Collecter les données  
- Surveiller les erreurs  
- Analyser la production  

## Plan
- Cartes mentales pour les risques  
- Tester les hypothèses  
- US testables  

## Code
- Tests unitaires  
- Pull Requests et revues de code  
- Automatisation du déploiement  

## Integrate
- Tester les US  
- Tests manuels, API, automatiques, E2E  

## Deploy
- Tests de charge et performance  
- Vérification de la pipeline  
- Exécution des tests automatiques  

## Operate
- Retour utilisateur  
- Analyse de la valeur métier  
- Mise à jour du backlog  

---

# 🗺️ Impact Mapping

Un outil collaboratif structuré :
Objectif → Acteur → Impact → Livrable

---

# 👨‍👩‍👧‍👦 Atelier des 4 amigos

Participants :  
Métier / Développeur / Testeur / DevOps

Objectifs :
- Revue multi-perspectives  
- Collaboration renforcée  
- Amélioration du process  

---

# 🧱 Example Mapping

Permet de diviser une fonctionnalité en US.

Principes :
- Exemples concrets  
- Garder l’objectif principal  
- Se concentrer sur la valeur  
- Identifier les risques  
- Tester les hypothèses  
- Créer des US testables  

---

# 🧪 Types de tests : expérience & couverture

Les deux approches sont nécessaires :

- Tests basés sur l’expérience  
- Tests basés sur la couverture  

---

# 🧠 Techniques de conception

1. Flux de contrôle / flux métier  
2. Points de décision  
3. Données  
4. Apparence, fonctionnement, performance  

### Partitions d’équivalences
Regroupent des données similaires pour réduire le nombre de tests.

### Valeurs limites
Permettent de détecter les erreurs fréquentes.

---

# 📄 Structure d’un cas de test

- ID  
- Description  
- Préconditions  
- Étapes  
- Données  
- Résultat attendu  
- Actions post-test  
- Résultat obtenu  
- État du test (nouveau / non régression)  

---

# 🔍 Tests exploratoires

Durée : 30 min à 1h30

Charte :
- Quoi explorer ?  
- En tant que qui ?  
- Avec quelles ressources ?  
- Remonter les informations  
- Conserver les fichiers  
- Noter anomalies, idées, questions  

Débriefing :
- Ce qu’il s’est passé  
- Apprentissages  
- Points bloquants  
- Ce qu’il reste à faire  

---

# 🐞 Cycle de vie d’une anomalie

La priorité détermine l’ordre de correction.

| Sévérité | Priorité | Action |
|---------|----------|--------|
| Haute | Haute | Corriger immédiatement |
| Haute | Faible | Impact limité |
| Faible | Haute | Fonctionne mais gênant |
| Faible | Faible | À corriger plus tard |

Pipeline d’anomalies :  
**Nouveau → Prêt pour le développement → En cours → Retester → Fini**

Penser à chercher la cause racine du bug

---

# 🌀 Tests dans un sprint

- Développements  
- Tests  
- Corrections d’anomalies  
- L’atelier risk storming est un bon outil pour définir les risques et aussi pour les techniques de tests

---

# 🧱 Variété de tests

## Pyramide de tests
- Tests unitaires  
- Tests d’intégration  
- Tests système  
- Tests d’acceptation  

## Quadrants de test
- Tests unitaires & intégration (TDD)  
- Tests métier (PO, dev, testeurs)  
- Tests utilisateurs & exploratoires  
- Tests non fonctionnels  

## Progression / Régression / Re-test
- Progression : nouvelles fonctionnalités  
- Régression : vérifier que l’existant fonctionne  
- Re-test : vérifier la correction d’un bug  

---

# 🧭 Stratégie de test

### Contexte
- Description du projet  
- Impacts utilisateurs  

### Analyse de risques
- Pourquoi tester ?  
- Pourquoi automatiser ?  
- Risques liés aux évolutions  

### Démarche
- Quels tests ?  
- Comment organiser ?  
- Comment garantir la qualité ?  
- Quels livrables ?  

### Moyens
- Environnements  
- Matériel  
- Logiciels  
- Ressources humaines  

### Organisation
- Acteurs  
- Gouvernance  

### Planning
- Phases et étapes  
- Intégration de l’automatisation  

---

# 🎉 Bug Bash

À planifier :
- 1er vendredi du mois  
- Après chaque release  

Objectifs :
- Tester les fonctionnalités critiques  
- Générer de nouvelles idées  
- Explorer l’application  

Inclure le temps de correction dans le sprint.

---

# 🤖 Automatisation des tests

Principes :
- Équipe interne plutôt que pilotée  
- Vue d’ensemble  
- Choix des outils  
- Responsabilités claires  
- Automatiser les tests répétitifs  
- Rétrospective régulière  

### Pyramide d’automatisation
- Tests unitaires  
- Tests d’intégration  
- Tests interface (Selenium, RobotFramework, Appium…)  

### Avantages
- Détection rapide  
- Maintenance facilitée  
- Accélération du cycle  
- Réduction des risques  
- Réutilisation des tests  

---

# 🧭 Stratégie d’automatisation

Questions clés :
- Quelle valeur apporte l’automatisation ?  
- Qui automatise quoi ?  
- Quand et comment structurer le travail ?  
- Quelles tâches automatiser en priorité ?  
- Quels outils, données, environnements ?  

Les tests exploratoires complètent l’automatisation.

---

# 🔗 Pour aller plus loin

- [Risk Storming et Pré-Mortem (Modèle) | Miroverse](https://miro.com/fr/modeles/risk-storming-and-premortem/)
- [Pourquoi une "pyramide" pour les tests ? - La taverne du testeur](https://latavernedutesteur.fr/2022/02/07/pourquoi-une-pyramide-pour-les-tests/)
- [La pyramide des tests est un modèle économique dépassé. : r/programming](https://www.reddit.com/r/programming/comments/1i5xasa/the_testing_pyramid_is_an_outdated_economic_model/?tl=fr)
- [Prêt à transformer votre approche des tests dans un environnement agile?](https://www.linkedin.com/posts/emnaayadi_agile-testing-condensed-a-brief-introduction-activity-7140021717049008128-xBTn) 

---

_Note: MAJ au 11 avril 2026_