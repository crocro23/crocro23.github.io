---
title: "Introduction au HTML et au CSS"
date: "2026-07-30"
location: "Mordelles, France"
description: "Une introduction complete aux bases du HTML et du CSS avec des exemples pratiques et des conseils pour débutants"
type: "web"
tags: ["HTML","CSS","Web Development","Frontend","Tutorial"]
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: True
---

# Introduction au HTML et au CSS ✨

Le HTML et le CSS sont deux langages complémentaires :

- HTML structure le contenu. 🏗️
- CSS gère la mise en forme visuelle et dynamique. 🎨

---

# Historique 📜

### HTML

Apparu en 1991, il sert à organiser le contenu des pages web. 🌐

### CSS

Introduit en 1996, il gère :
- l’agencement, 📐
- le positionnement, 📍
- la décoration, 🎀
- les couleurs, 🌈
- la taille du texte… 🔠

---

# Structurer une page HTML 🧱

### Paragraphes
```
<p>Mon texte</p>
```
### Retour à la ligne
```
<br>
```
### Titres
```
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Titre niveau 3</h3>
```
### Titre de l’onglet
```
<title>Ma page</title>
```
### Mise en forme du texte
```
<mark>Texte surligné</mark>
<em>Texte en italique</em>
<strong>Texte en gras</strong>
```
## Lien hypertexte 🔗
```
<p>
Bonjour. Souhaitez-vous apprendre sur
<a href="https://openclassrooms.com" target="_blank">OpenClassrooms</a> ?
</p>
```
## Insertion d’images 🖼️
```
<p>
Vous souhaitez voir l'image dans sa taille d'origine ? Cliquez dessus !<br>
<a href="images/montagne.jpg">
  <img src="images/montagne_mini.jpg"
       alt="Chemin de randonnée au milieu des montagnes"
       title="Cliquez pour agrandir">
</a>
</p>
```
---

# Intégration du CSS dans une page HTML 🎛️

## Exemple de structure HTML + CSS
```
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Ma page</title>
  <link href="css.css" rel="stylesheet">
</head>

<body>
  <h1>Titre principal h1</h1>
  <p>Ceci est le contenu de mon premier paragraphe</p>
  <p class="ma-classe">Ceci est le contenu de mon deuxième paragraphe</p>
  <h2>Voilà mon sous-titre h2</h2>

  <img src="images/logo_crocro23.png" alt="Logo du site" id="logo">
</body>
</html>
```
## Exemple de fichier CSS 🎨
```
h1 {
  color: green;
}

p {
  /* J'en profite pour ajouter un commentaire */
  color: blue;
}

.ma-classe {
  color: #663399; /* Rebeccapurple */
}

#logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
```
## Ajouter une police Google Fonts 🔤
```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope&family=Montserrat&display=swap" rel="stylesheet">
```
### Mise en forme du texte
```
font-weight: bold;
text-decoration: line-through;
text-align: center;
```
## Couleurs et arrière-plans 🎨
Propriétés utiles : 
- background-color
- background-image
- background-position (top, bottom, left, center, right)
- linear-gradient
### Bordures et ombres 🖌️
Propriétés :
- border-width
- border-color
- border-style
- border-radius
- box-shadow
- text-shadow
# Apparences dynamiques ✨
```
a:hover {
  color: red;
}
```
# Partitionner une page web 🧩
Balises :
```
<header> : en‑tête
<footer> : pied de page
<nav> : navigation
<section> : section
<aside> : informations complémentaires
```
---
# Flexbox 📐
```
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```
# CSS Grid 🗂️

Permet de diviser la page en colonnes et lignes.

# Créer un tableau 📊
```
<table>
  <tr>
    <th>Titre</th>
    <td>Cellule</td>
  </tr>
  <tfoot>
    <tr><td>Pied de tableau</td></tr>
  </tfoot>
</table>
```
# Formulaire HTML 📝
```
<form method="post" action="traitement.php">
  <input type="email" required>
  <input type="submit" value="Envoyer">
</form>
```
---
# Responsive design 📱
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
## Media queries
```
/* Par défaut */
p {
  color: blue;
}

/* Si largeur max = 1024px */
@media screen and (max-width: 1024px) {
  p {
    color: red;
    background-color: black;
    font-size: 1.2em;
  }
}

p {
  width: 250px;
  height: 110px;
  text-align: justify;
  overflow: auto;
}
```
# Fonctionnalités supplémentaires avec JavaScript 🖥️
## Smooth scroll pour les ancres (#contact) ⬇️
```
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
```
## Validation du formulaire + envoi AJAX (fetch) 📧
```
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = form.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!email || !email.includes('@')) {
    alert('Veuillez entrer un email valide.');
    emailInput.focus();
    return;
  }

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  })
  .then(response => response.json())
  .then(data => {
    alert('Merci pour votre inscription !');
    form.reset();
  })
  .catch(error => {
    alert('Une erreur est survenue. Veuillez réessayer.');
  });
});
```
## Toggle menu mobile / focus management 📱
```
const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {

  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');

  if (!expanded) {
    navMenu.querySelector('a').focus();
  } else {
    menuButton.focus();
  }
});
```
---
# Pour aller plus loin 🚀
- [Utiliser les images adaptatives en HTML - HTML | MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Guides/Responsive_images)
- [Monitoring and optimizing website performance](https://developer.mozilla.org/en-US/blog/optimize-web-performance/)
- [Browse Fonts - Google Fonts](https://fonts.google.com/?lang=fr_Latn)
- [Fancy Border Radius Generator](https://9elements.github.io/fancy-border-radius/#30.30.46.30--.)
- [95 Beautiful CSS box-shadow examples - CSS Scan](https://getcssscan.com/css-box-shadow-examples)
- [CSS3 module: W3C Selectors](https://www.w3.org/Style/css3-selectors-updates/WD-css3-selectors-20010126.fr.html#selectors)
- [Flexbox Froggy - Un jeu pour apprendre les flexbox CSS](https://flexboxfroggy.com/#fr)
- [Top 7 des meilleurs effets CSS et JavaScript - YouTube](https://www.youtube.com/watch?v=alEqDBSFv7E)

Note: MAJ au 30 juillet 2026