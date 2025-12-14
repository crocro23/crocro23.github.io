---
title: "TestLink - un gestionnaire de tests manuels"
date: "2025-12-14"
location: "Mordelles, France"
coordinates: [48.066669, -1.85]
description: "Installation et utilisation de TestLink pour la gestion des tests manuels"
type: "testlogiciel"
tags: ["TestLink", "tests manuels", "gestion de projet", "QA", "reporting"]
authors:
  - name: 'Mickael Crozon'
    role: 'Auteur'
featured: true
---

# TestLink - Mise en œuvre d’un gestionnaire de tests manuels

## 🎯 Objectifs

- Outiller le référentiel de tests  
- Mise en œuvre de TestLink  
- Création et gestion des projets  
- Gestion des exigences  
- Conception et organisation des tests  
- Gestion des campagnes de tests  
- Exécution, suivi et reporting  
- Métriques et éditions de rapports   

---

## ⚙️ Installation

1. Télécharger et installer **XAMPP**  
   🔗 [XAMPP Windows](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/5.6.24/xampp-win32-5.6.24-2-VC11-installer.exe/download)

2. Télécharger **TestLink**  
   🔗 [TestLink 1.9.20](https://sourceforge.net/projects/testlink/files/TestLink%201.9/TestLink%201.9.20/testlink-1.9.20.tar.gz/download)

3. Extraire les fichiers et renommer le répertoire `testlink-1.9.20` en `testlink`  
   Copier le répertoire dans `C:\xampp\htdocs\`

4. Renommer le fichier `custom_config.inc.php.example` en `custom_config.inc.php`  
   Ajouter les lignes suivantes :
	```
	$tlCfg->log_path = 'c:/xampp/htdocs/testlink/logs/';
	$g_repositoryPath = 'c:/xampp/htdocs/testlink/upload_area/';
	```

5. Dans XAMPP : lancer Apache et MySQL Vérifier via http://localhost/ → Welcome to XAMPP

6. Créer une base de données MySQL nommée testlink avec un compte root.

7. Installer TestLink via http://localhost/testlink
	- Login admin : admin / Password : admin
	- Créer un projet : test_projet avec préfixe test 
	- ✅ Installation réussie !

---

## 👤 Gestion des utilisateurs
- Créer un nouvel utilisateur (⚠️ pas d’espace dans le nom d’utilisateur).
- Modifier les droits via phpMyAdmin (valeur 8 pour admin).
- Les modifications sont visibles dans TestLink.

---

## 📂 Gestion des projets
Exemple :
- Nom : Test_leboncoin
- Préfixe : lbc
- Description : Tests à faire sur le bon coin-coin
- Options activées : gestion des exigences, priorité de test, automatisation (API), inventaire.

---

## 📑 Gestion des exigences
1. Créer un dossier d’exigences :
- ID : Dossier_Exigence1
-  : Dossier d’exigences d’enregistrement
- Périmètre : Pouvoir s’enregistrer sur le bon coin-coin

2. Créer une exigence :
- ID : Exigence1
- Titre : Enregistrement par compte Google
- Périmètre : valide / non valide / double validation
- Nombre de fiches de test nécessaires : 3

---

## 📊 Gestion des campagnes de test
Créer une campagne :
- Nom : Campagne Leboncoin
- Description : Campagne de tests Leboncoin avec Authentification
- Options : actif et public

👉 Ces menus sont alors disponibles :
1. Gestion des campagnes de test
2. Gestion des versions du produit
3. Gestion des indicateurs d’avancement
4 Gestion des exécutions
5. Rapports et métriques
6. Tableau de bord des métriques

---

## 🌐 Gestion des plateformes
Exemple :
- Plateforme : Chrome
- Description : Tests avec PC et navigateur Google Chrome
- Options : On Design et On Execution

---

## 🧮 Gestion des versions du produit
- Titre : Espace client v1
- Description : Test de la 1ère version de l’espace client
- Date de début : aujourd’hui
- Commit ID, tag, branch et release candidate pour les développeurs

---

## 📈 Indicateurs d’avancement
Exemple :
- Nom : Indicateur des tests espace client
- Date cible : fin du plan de tests (dans un mois)
- Exécutions haute priorité : 100% 💯
- Exécutions moyenne priorité : 90%
- Exécutions basse priorité : 80%

---

## 🧪 Gestion des fiches de test
1. Créer un dossier de tests : "Suite authentification"

2. Créer une fiche de test :
- Titre : Cas de tests 1 afficher la page
- Résumé : Vérifier la disponibilité de la page
- Préconditions : application disponible, connexion Internet
- Criticité : haute / moyenne / basse
- Type : manuel ou automatisé
- Durée estimée : 1 min

3. Ajouter des étapes :
- Action : ouvrir la page d’accueil → Résultat attendu : page disponible
- Action : cliquer sur connecter → Résultat attendu : formulaire disponible
- Lier la fiche de test à l’exigence : Exigence1

---

## 📋 Gestion des rôles et utilisateurs
Créer des comptes utilisateurs et réinitialiser les mots de passe
- Rôles disponibles : guest, tester, senior tester, test designer, admin, leader
- Affecter les rôles aux projets et campagnes

---

## 🔑 Gestion des mots-clés et inventaire
- Exemple de mot-clé : fonctionnel, non fonctionnel
- Inventaire :
- Nom d’hôte : Smartphone Android
- Usage : Tests sur téléphone
- Matériel : Android 15, connexion 5G

---

## 🧾 Gestion des exécutions
Exemple : 
- fiche de test lbc-1
- Notes : 1er test OK, 2ème test KO → bandeau rouge en échec
```
Dernière exécution : 30/11/2025 19:03:12 par Mimi → résultat en échec
```
---

## 📊 Indicateurs finaux
Indicateur des tests espace client (01/12/2025 → 30/12/2025) :
- Priorité haute : 100% 💯
- Priorité moyenne : 90%
- Priorité basse : 80%
- Global : 100%

---

## 🎥 Ressources complémentaires
[Tutoriel vidéo TestLink de Oussama Ben Hedia](https://www.youtube.com/watch?v=Ht4Ba_-_1nM&list=PLVJxQWwLvT2Dl3FChbQgJhDdLZWMOubz0&index=2)

Note: MAJ au 14 décembre 2025