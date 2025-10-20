---
title: "microfolio"
date: "2025-10-20"
location: "Mordelles, France"
coordinates: [48.066669, -1.85]
description: "Installer mon portfolio"
type: "web"
tags: ["SvelteKit 2", "Tailwind CSS 4", "JavaScript", "responsive", "Node.js 20+"]
authors:
  - name: 'Mickael Crozon'
    role: 'Propriétaire'
featured: True
---

# Mon Portfolio Informatique

Tu souhaites collaborer avec moi : 📧 mickaelcrozon@hotmail.com 📱 06 63 66 99 45
Ou en savoir plus sur mon profil ? => Va voir mon CV

## L'idée

Avoir de la visibilité en tant que professionnel de l'informatique.

Je me suis basé sur l'article de Korben, n’étant pas développeur web :  
👉 [Microfolio : un portfolio statique qui mate WordPress](https://korben.info/microfolio-portfolio-statique-mate-wordpress-haut.html)

- Il utilise des technologies modernes (là à droite de l'écran en Tags!) et semble simple à installer.  
- Bonne surprise : ça fonctionne avec GitHub Pages, donc pas besoin de payer un hébergement.
---

## Le besoin

J'ai besoin d'un portfolio pour :

- Expliquer ce que je sais faire
- Documenter ce que j’apprends à faire
---

## La pratique

Je suis les étapes décrites sur le github de Aker-dev et je mets en place le projet sur mon PC :
(https://github.com/aker-dev/microfolio/blob/main/doc/fr/01-installation.md)

1. Installer **Node.js**
2. Installer **Git**
3. Installer **pnpm**
4. Cloner et installer le projet **Sacred Aligot**
5. Lancer le serveur avec `pnpm dev`  
   ➜ Accès via [http://localhost:5173](http://localhost:5173)  
   ➜ `CTRL+C` dans PowerShell pour arrêter le serveur

Ensuite :

- Je copie le projet de l’Aligot
- Je modifie le fichier `index.md` avec :
  - `## Titre secondaire` et `### Titre tertiaire`
  - Des paragraphes, des listes, du texte en **gras** et en *italique*
- Je modifie les métadonnées
- Je relance `pnpm dev` dans PowerShell → ça fonctionne !
- J’ajoute ma photo et mon CV
- Je supprime la vidéo et les fichiers inutiles
- Je modifie les fichiers `about.md` et `index.md` à la racine → ça fonctionne aussi !
---

### Pour GitHub Pages

- Paramétrer Git pour l'utilisation de Pages :  
  👉 [Guide GitHub Pages](https://docs.github.com/fr/pages/quickstart)
- Initialiser le dépôt avec les commandes en ligne depuis mon repo
- Mon site web est en ligne :  
  🌐 [https://crocro23.github.io/](https://crocro23.github.io/)
---

## En local

1. Créer un fichier `.env`
2. Lancer `pnpm build` → ça plante  
   ➜ Réinstaller `pnpm` avec PowerShell en mode administrateur
3. Modifier les fichiers `package.json` et `build.js`
4. Exécuter :
	`pnpm install`
	`pnpm build`
	`pnpm preview` → ça fonctionne !	
---

## Copier les fichiers du répertoire build dans mon répertoire Git

- Lancer Git Bash :
	`git checkout main`
	`git add .`
	`git commit -m "Préparation pour publication"`
	`git push origin main`
	
- Et voilà, mon site web est à jour et fonctionne ici :  
  🌐 [https://crocro23.github.io/](https://crocro23.github.io/)
  
  
_Note: MAJ au 20 octobre 2025_