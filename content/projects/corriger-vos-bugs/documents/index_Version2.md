---
title: "Méthode en 5 étapes pour débugger efficacement"
date: "2026-08-19"
location: "Mordelles, France"
description: "Guide complet pour analyser, isoler, corriger et améliorer son code grâce à une méthode structurée en 5 étapes"
type: "Développement"
tags: ["debug", "programmation", "html", "css", "javascript", "vscode", "git", "TDD"]
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: True
---

# 🐞 Méthode en 5 étapes pour débugger

Débugger est une compétence essentielle pour tout développeur. Voici une méthode simple, efficace et réutilisable pour résoudre les problèmes de code.

---
## 1️⃣ Se poser des questions

- ❓ Y a‑t‑il une erreur clairement indiquée ?  
  Si oui → passer directement à l’étape 5.
- 🤔 Le comportement de l’application n’est pas celui attendu ?  
  Analyser ce qui devrait se produire.
---

## 2️⃣ Relire le code (procéder par élimination)

- 👀 Relire attentivement le code.
- 🧩 VS Code indique souvent l’origine du bug.
- 🎨 Utiliser Prettier pour aérer le code.
- 🧹 Utiliser un linter (ex : Flake8 pour Python).
- 📜 Lire les logs pour vérifier les valeurs et l’exécution des fonctions.
- ⏸️ Placer des breakpoints pour mettre le programme en pause.
---

## 3️⃣ Prendre du recul

- 🗣️ Expliquer à voix haute ce que vous faites.
- 🌿 Prendre l’air quelques minutes.
- 📝 Faire du pseudo‑code ou des schémas.
- 🔄 Tester différents cas d’utilisation.
- 🧪 Développer la fonctionnalité à part.
- ⏪ Revenir en arrière pour vérifier si le bug existait déjà.
- 💬 Commenter / décommenter le code ligne par ligne.
---

## 4️⃣ Utiliser les ressources disponibles

- 🧘 C’est normal de passer du temps sur un bug.
- 🌍 Chercher sur Internet… en anglais !
- 🤖 S’appuyer sur l’IA.
- 🖨️ Utiliser des `print()` pour suivre l’exécution.
- 👥 Faire une code review.
- 🧑‍🤝‍🧑 Demander conseil à ses pairs.
---

## 5️⃣ Résoudre le problème par incrémentations

- 🧩 Modifier un minimum de code à la fois.
- 🔁 Tester régulièrement.
- 🌐 Exemple : valider un fichier HTML avec le validateur du W3C → erreurs détectées.
### Exemple de correction
Code incorrect :
```
<nav>
  <img src="images/logo.png" alt="Logo Robbie Lens" />
  <div>
    <a href="index.html">Accueil</a>
    <a href="a-propos.html">À propos</a>
    <a href="portfolio.html">Portfolio</a>
  </div>
</nav>
</header>
```

Code corrigé :
```
<header>
  <nav>
    <img src="images/logo.png" alt="Logo Robbie Lens" />
    <div>
      <a href="index.html">Accueil</a>
      <a href="a-propos.html">À propos</a>
      <a href="portfolio.html">Portfolio</a>
    </div>
  </nav>
</header>
```

---
# Méthode en 4 étapes pour écrire une fonctionnalité

## 1️⃣ Se poser des questions

- Quel est l’objectif ?
- Quel langage utiliser ?
- Quels outils sont disponibles ?
- Quel est le MVP ?

## 2️⃣ Isoler la fonctionnalité

- Développer à part si possible

## 3️⃣ Utiliser les ressources

- Schémas
- Maquettes
- Pseudo‑code
- Tutoriels
- IA

## 4️⃣ Intégrer par incrémentation

- Tester dans un projet à part
- Vérifier les retours API
- Faire des commits Git
- Ajouter des tests unitaires

---
# 🧱 Exemple : créer une page HTML

## 1️⃣ Structure de base
```
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <title>Titre</title>
</head>
<body>
</body>
</html>
```
## 2️⃣ Ajouter un titre
```
<head>
  <meta charset="utf-8" />
  <title>Accueil - Robbie Lens Photographie</title>
  <link href="style/style.css" rel="stylesheet" />
  <link href="style/index.css" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Montserrat&display=swap" rel="stylesheet">
</head>
```
## 3️⃣ Afficher 6 photos
```
<section class="accueil-photos">
  <h2>Mon dernier projet</h2>
  <div>
    <img src="images/accueil/element-1.png" alt="Twelve apostles - Australie" />
    <img src="images/accueil/element-2.png" alt="Wai-O-Tapu - Nouvelle-Zélande" />
    <img src="images/accueil/element-3.png" alt="Parc National d’Abel Tasman - Nouvelle-Zélande" />
  </div>
  <div>
    <img src="images/accueil/element-4.png" alt="Lac Rotorua - Nouvelle-Zélande" />
    <img src="images/accueil/element-5.png" alt="Milford Sound - Nouvelle-Zélande" />
    <img src="images/accueil/element-6.png" alt="Lac Wanaka - Nouvelle-Zélande" />
  </div>
</section>
```
## 4️⃣ Ajouter un fichier CSS
```
body {
  font-family: 'Manrope', sans-serif;
  background-color: #1f2039;
}

h1 {
  font-size: 3.5em;
  color: #a5b4fc;
  font-family: 'Montserrat', sans-serif;
}

.accueil-photos {
  background-color: white;
  padding: 80px;
}
```

## 📱 Rendre la page responsive
```
@media screen and (max-width: 996px) {
  h1 { font-size: 2em; }
  section { padding: 50px 20px; }
}
```

---
# ➕ Ajouter une fonctionnalité : barre de navigation fixe

## 1️⃣ je me pose des questions
	Vous avez vu sur plusieurs sites internet une barre qui reste collée en permanence en haut de la page : il y aura 3 liens vers 3 pages ; l’accueil, le portfolio et la partie À propos.

## 2️⃣ isoler la fonctionnalité
	Sur CodePen: il est possible de créer du code HTML, CSS

## 3️⃣ utiliser les ressources disponibles
	Je rajoute dans le fichier html :

HTML
```
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
```
CSS
```
	/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
```
## 4️⃣ intégrer la solution
  1) git pull
  2) je rajoute le code HTML
  3) je rajoute un groupe CSS à la fois
  4) je fais mon commit sur Git.

---
# 🔧 Modifier une fonctionnalité existante
## 1️⃣ je me pose des questions
	modifier l’emplacement des liens permettant la navigation sur votre page depuis la barre de navigation qui se trouve en haut de l’écran. Ils passeront de gauche à droite

## 2️⃣ isoler la fonctionnalité
		Créer une branche dans Git :
  Git
  ```
  git branch flexbox-right
  git checkout flexbox-right
  ```

## 3️⃣ utiliser les ressources disponibles
	Ici, je peux aligner les boites à droite du flexbox
  CSS
  ```
  .container {
    flex-direction: row-reverse;
  }
  ```

## 4️⃣ intégrer la solution
  1) Tester pour voir et bien comprendre chacune des propriétés !
	2) Fusionner cette modification sur la branche principale

---
# 🔗 Pour aller plus loin

https://www.gerritcodereview.com/
https://stackoverflow.com/
https://www.w3schools.com/
https://openclassrooms.com/us/courses/8204091-utilisez-chatgpt-pour-ameliorer-votre-productivite/8254851-developpeurs-codez-avec-chatgpt
https://www.canva.com/templates
https://www.figma.com/fr-fr/
https://marvelapp.com/
https://dev.to/
https://feedly.com/i/discover
https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github/7165692-travaillez-avec-un-depot-distant#/id/r-7481330
https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github/7475886-apprehendez-le-systeme-de-branches

Note: MAJ au 19 aout 2026