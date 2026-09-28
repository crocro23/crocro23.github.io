---
title: "Méthode de débug en 5 étapes"
date: "2026-09-04"
location: "Mordelles, France"
description: "Méthode structurée pour débugger du code, illustrée par des exemples HTML/CSS et des workflows pratiques."
type: "Dev"
tags:
  - debug
  - méthodologie
  - agilité
  - Lean
  - Kanban
  - Scrum
  - XP
  - SAFe
  - feedback
  - vélocité
  - gestion du changement
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: true
---

# Méthode de débug en 5 étapes 🛠️🐞
Une méthode simple et réutilisable pour débugger ton code et apprendre de tes erreurs.

---
## Résumé rapide ✅

1. Se poser des questions ❓  
2. Relire le code 🔎  
3. Prendre du recul 🌤️  
4. Utiliser les ressources disponibles 📚🤖  
5. Résoudre le problème par incrémentations 🧩

--- 
On apprend de ses erreurs — documente ce que tu as fait et ce qui a fonctionné.

## Étape 1 – Je me pose des questions pour analyser la situation 🧠

- Y a‑t‑il une erreur clairement indiquée (stack trace, message d'erreur) ? Si oui → passe à l'étape 5.  
- Ou bien le comportement de l'application n'est pas celui attendu ? Dans ce cas, clarifie le comportement attendu et observable.
Questions utiles :
- Qu'est‑ce que je veux faire ?
- Depuis quand le problème apparaît‑t‑il ?
- Quels changements récents ont pu l'introduire ?
---
## Étape 2 – Procédez par élimination en relisant le code 📖

- Relis le code attentivement.  
- Outils qui aident :
  - Visual Studio Code (indique souvent l'emplacement du bug)  
  - Prettier (aère/formatte le code)  
  - Linter (ex. Flake8 pour Python)  
- Utilise les logs pour afficher la valeur de variables ou vérifier l'appel des fonctions.  
- Place des breakpoints pour mettre en pause et inspecter l'état.
---
## Étape 3 – Prenez du recul pour identifier clairement le problème 🌳

- Explique à voix haute ce que tu as fait et ce que tu attends (rubber ducking).  
- Prends l'air, fais une pause.  
- Écris du pseudo‑code ou fais un schéma en français.  
- Teste différents cas d'utilisation.  
- Développe la fonctionnalité isolée dans un petit projet séparé.  
- Reviens en arrière (git) pour vérifier si le bug existait déjà avant une modification.  
- Commente/décommente des blocs pour isoler la source.
---
## Étape 4 – Utilisez les ressources disponibles 🔍

- Chercher sur Internet (souvent en anglais pour de meilleurs résultats).  
- Appuie‑toi sur l'IA (expliquer le contexte, montrer le code et l'erreur).  
- Console/logs pour suivre l'exécution étape par étape.  
- Code review : demander l'avis d'un pair.  
- Forums et documentation (Stack Overflow, docs officielles).

Conseil pour l'IA, fournis toujours :
1. Rappel du contexte  
2. L'erreur ou le comportement observé  
3. Le code concerné  
4. La question précise que tu poses

---
## Étape 5 – Résolvez le problème par incrémentations 🛠️

- Modifie peu de choses à la fois.  
- Teste fréquemment (boucle courte).  
- Ajoute des tests unitaires pour éviter les régressions.  
- Commit souvent et clair (Git).
---

## Exemple concret — correction d'un header manquant 🔧

Dans cet exemple repris depuis OpenClassrooms, le validateur W3C signale une erreur : il manque la balise `<header>`.
Code problématique :
```html
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

Correction : ajouter la balise `<header>` au début et lancer Prettier (Shift + Alt + F) pour l'indentation :
```html
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
## Exemple : réponse structurée à une demande de code (4 étapes) 💡

Étape 1 — Poser les questions :
- Que veux‑tu faire ? Quel langage ? Quels outils ? Quel MVP ?
Étape 2 — Isoler la fonctionnalité :
- Développer la fonctionnalité séparément si possible.
Étape 3 — Utiliser les ressources :
- Schémas, maquettes, pseudo‑code, tutoriels, projets existants, IA.
Étape 4 — Intégrer par incrémentation :
- Tester dans un projet à part → vérifier les retours API → commits Git → ajouter tests unitaires.
---
## Exemple pratique : structure HTML de base 🧱

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title>Accueil - Robbie Lens Photographie</title>
    <link href="style/style.css" rel="stylesheet" />
    <link href="style/index.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Montserrat&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Contenu -->
</body>
</html>
```
Afficher 6 photos (extrait) :
```html
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
---
## Extraits CSS utiles 🎨

Variables globales & styles de base :
```css
* { margin: 0; }
body {
  font-family: 'Manrope', sans-serif;
  font-size: 1em;
  background-color: #1f2039;
  color: #f9f8ff;
}
h1 { font-size: 3.5em; color: #a5b4fc; font-family: 'Montserrat', sans-serif; }
.cta { display: inline-block; background: linear-gradient(#8e86b5,#acaeed); color: white; border-radius: 50px; padding: 20px 30px; }
```

Section photos :
```
.accueil-photos { background-color: white; padding: 80px; }
.accueil-photos h2 { color: #242424; text-align: center; margin-bottom: 80px; }
.accueil-photos div { display:flex; gap: 15px; justify-content: center; margin-bottom: 15px; }
```

Responsive :
```
@media screen and (max-width: 996px) {
  h1 { font-size: 2em; }
  section { padding: 50px 20px; }
  .accueil-introduction { flex-direction: column; align-items: center; }
  .accueil-photos div { flex-direction: column; }
}
```

---
## Ajouter une barre de navigation fixe (4 étapes) 🔝

HTML :
```
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
```

CSS :
```
.topnav { background-color: #333; overflow: hidden; position: sticky; top: 0; z-index: 100; }
.topnav a { float: left; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 17px; }
.topnav a:hover { background-color: #ddd; color: black; }
.topnav a.active { background-color: #04AA6D; color: white; }
```

Intégration :

1. git pull  
2. Ajouter HTML  
3. Ajouter CSS par étapes  
4. Commit & push
---

## Modifier l'alignement via flexbox (exemple) ↗️

1. Créer une branche :
```bash
git branch flexbox-right
git checkout flexbox-right
```
2. CSS pour aligner à droite :
```css
.container { display:flex; flex-direction: row-reverse; }
```
3. Tester, puis merger quand OK.
---

## Exemple de workflow rapide pour demander de l'aide à l'IA 🤖

- Contexte court  
- Copie de l'erreur exacte  
- Extrait de code minimal reproductible  
- Question précise (ex : "Pourquoi `x` vaut `undefined` ici ?")
---

# 🌐 Pour aller plus loin : 

- Gerrit Code Review : https://www.gerritcodereview.com/  
- Stack Overflow : https://stackoverflow.com/  
- W3Schools : https://www.w3schools.com/  
- OpenClassrooms (Git) : https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github/7165692-travaillez-avec-un-depot-distant#/id/r-7481330  
- https://www.canva.com/templates
- https://www.figma.com/fr-fr/
- https://marvelapp.com/
- https://dev.to/
- https://feedly.com/i/discover
- Loop de debug sur Claude (exemple) : https://www.instagram.com/p/DcQYcfnNihX/

---

_Note : MAJ du 4 septembre 2026_