---
title: "Jira avec Xray – Mise en oeuvre du projet de tests"
date: "2026-01-07"
location: "Mordelles, France"
coordinates: [48.066669, -1.85]
description: "Installation et utilisation de TestLink pour la gestion des tests manuels"
type: "test-logiciel"
tags: ["Jira", "Xray", "gestion de projet", "QA", "reporting"]
authors:
  - name: 'Mickael Crozon'
    role: 'Auteur'
featured: true
---
# Jira avec Xray – Mise en œuvre d’un projet de test

## 🧭 Création du projet Jira

* Connexion à Jira (https://home.atlassian.com/)
* Création d’un projet **Kanban** nommé *QA Testing en Kanban*
* Types d’éléments activés :
  * Task : petite tâche
  * Story : besoin utilisateur
  * Feature : fonctionnalité large
  * Request : demande d’assistance
  * Bug : anomalie à corriger
* Colonnes du tableau Kanban : Do To, In Progress, In Review, Done

Jira crée automatiquement 3 tâches :

* KAN-1 : Tâche 1
* KAN-2 : Tâche 2
* KAN-3 : Sous-tâche 2.1

Jira fonctionne !

---

## 🧪 Ajout de l’extension Xray

* Extension : [Xray Test Management for Jira](https://marketplace.atlassian.com/apps/1211769/xray-test-management-for-jira?tab=overview&hosting=cloud)
* Édition Standard : 30 jours gratuits, puis 10 $/mois
* Installation via le menu **Apps** → **Créer un projet**

---

## 📋 Vue du projet Xray

Dans le tableau XSP :

* Éléments visibles : Epic, Story, Test, Bug, Précondition, Test Plan, Test Execution, Test Set
* Onglets : Résumé, Chronologie (sprint 1 mois), Backlog, Sprints actifs (Kanban 3 colonnes)

---

## 🔗 Structure des tests

* Un test peut être lié à : Story, Epic, Test Plan, Test Execution, Test Set

Exemples :

* Epic XSP-3 → Story XSP-15 et XSP-22
* Story XSP-22 → 7 tests : XSP-1 à XSP-45
* Test Plan XSP-32 → 5 tests : XSP-1 à XSP-12
* Test Execution XSP-33 → 5 tests : XSP-42 à XSP-56
* Test Set XSP-41 → 5 tests : XSP-42 à XSP-56

Ordre recommandé :

1. Création des tests & préconditions
2. Test Set
3. Test Plan
4. Test Execution
   🎥 [Vidéo explicative](https://youtu.be/AqB-N31DicU?list=PLYbxiVM16d2J6e9NWooisV2JEyhO6OMG2&t=391)

---

## 🌍 Environnements de test

Par défaut : Desktop Chrome, Desktop Safari, Mobile Chrome, Mobile Safari

Suggestion : Développement, Recette, PréProd, Maintenance à chaud

---

## 🧩 Couverture des tests

* Story XSP-10 : UNCOVERED → Ajouter un test → rattacher au ticket → couverture activée

---

## ▶️ Exécution des tests

* Test Plan XSP-39 → lancement des tests XSP-42
* Bouton "Play" → démarrage du chronomètre → date du jour
* En cas de bug : ajouter constatation, résumé, environnement, pièce jointe
* Si tout est OK → clic sur le carré vert

---

## 📊 Reporting et suivi

* **Test Coverage Report** : Story et Epic sans couverture (ex. : XSP-8, XSP-2)
* **Requirement Traceability Report** : Epic, Story, Tests, Exécutions, Bugs
* **Test Plans Metrics Report** : avancement des plans de test

---

## 🔍 Requêtes JQL utiles

📄 [JQL Cheat Sheet](https://atlassianblog.wpengine.com/wp-content/uploads/2017/01/atlassian_jql-cheat-sheet.pdf)

Top 5 requêtes :

* `Status = "Open"`
* `Assignee = currentUser()`
* `Project = "Project Name"`
* `created > startOfWeek()`
* `Priority = "High" AND Status != "Closed"`

---

## 🎓 Ressources complémentaires

* [Démo Xray – Modus Create France](https://www.youtube.com/watch?v=tWbLVYpn4rI&t=307s)
* [Playlist Xray Jira – SMART QA](https://www.youtube.com/watch?v=AqB-N31DicU&list=PLYbxiVM16d2J6e9NWooisV2JEyhO6OMG2)
* [Académie Xray](https://academy.getxray.app/plus/catalog)
* [Créer et gérer des scénarios de test](https://www.atlassian.com/fr/devops/testing-tutorials/jira-xray-integration-manage-test-cases)

---

## 🧪 Exemple de test XP-S1

**Titre** : Vérifier le calcul pour un montant initial de 100, taux d’intérêt 1 %, fréquence hebdomadaire, durée 1 an, taux d’imposition 0 %

**Scénario utilisateur** :

> En tant qu’invité ou utilisateur enregistré, je souhaite pouvoir payer et finaliser mon achat en toute sécurité.

**Critères d’acceptation** :

* Paiement par carte (Visa, MasterCard, Amex) et PayPal
* Sélection du mode de paiement
* Connexion sécurisée
* Stockage sécurisé pour utilisateurs enregistrés
* Confirmation de commande

**Définition de "Terminé"** :

* Paiement sécurisé mis en place
* Interface utilisateur claire
* Fonction de stockage sécurisé
* Cryptage conforme aux normes
* Tests de validation effectués
* Confirmation de commande opérationnelle
* Documentation fournie au support client
* Code intégré à la branche principale

---

## 🧱 Epic XSP-3 – Fonctionnalité de paiement

Objectif : offrir un processus de paiement fluide et intuitif, avec possibilité de retirer des produits du panier.

---

## 🧪 Préconditions

### Précondition XSP-29 (Cucumber)

```
gherkin
Étant donné que j'utilise un téléphone portable et qu'il a accès à Internet
et qu'il dispose d'une application de navigation fonctionnelle
Lorsque j'ouvre l'application de navigation
Alors l'utilisateur peut accéder au Web
```

### Précondition XSP-30 (Manuel)

* Vérifier que l'appareil est chargé
* Allumer l'appareil
* Déverrouiller l’écran
* Vérifier la connectivité réseau
* Vérifier la disponibilité d’un navigateur
* Ajuster les paramètres si nécessaire
* S’assurer d’un éclairage et d’une visibilité adéquats

Note: MAJ au 09 janvier 2026