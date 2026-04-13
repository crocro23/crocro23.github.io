---
title: "Utilisation de Git et GitHub"
date: "2026-03-27"
location: "Mordelles, France"
description: "Comprendre Git, GitHub et les commandes essentielles du contrôle de version"
type: "Dev"
tags: ["git", "github", "versioning", "développement", "workflow"]
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: true
---

# 🧠 Git vs GitHub

- **Git** : logiciel installé sur le PC, utilisé pour suivre l’historique des fichiers.  
- **GitHub** : site web permettant d’héberger des dépôts Git en ligne.  

🎯 **Objectif du contrôle de version** : savoir *qui* a fait *quoi* et *quand*.

---

# 📘 Exemple concret : Alice & Bob

Alice et Bob travaillent sur le même projet depuis un mois.  
Le client demande une livraison urgente. Alice modifie le code et l’envoie.

Le lendemain : tout est cassé.

➡️ Alice a **écrasé** le travail de Bob.  
➡️ Bob n’avait **aucune copie** de son travail.  
➡️ Résultat : **1 mois de travail perdu**.

👉 Git évite exactement ce genre de catastrophe.

---

# 🧑‍💻 Création du compte GitHub

- Plan gratuit  
- Les carrés verts apparaissent lors des commits  
- Création d’un dépôt : `crocro23 / OpenclassroomsProject`  
  - Privé  
  - Description : *openclassrooms.com courses gerez-du-code-avec-git-et-github*  
  - Pas de README  
  - Pas de .gitignore  
  - Pas de licence  

GitHub affiche ensuite les instructions de configuration :

```
echo "# OpenclassroomsProject" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/crocro23/OpenclassroomsProject.git
git push -u origin main
```

# 🛠️ Installation de Git

Téléchargement : https://git-scm.com/downloads

Option recommandée : Launch Git Bash

Dans Git Bash :

```
cd C:/GIT/
mkdir OpenclassroomsProject
cd OpenclassroomsProject
git config --global user.name "Mickael Crozon"
git config --global user.email "mickaelcrozon@hotmail.com"
git config --global color.diff auto
git config --global color.status auto
git config --global color.branch auto
git init
```
Le dépôt GitHub et le dossier local portent le même nom : OpenclassroomsProject

# 📄 Ajout des premiers fichiers

index.html
```

<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Un super titre</h1>
</body>
</html>
```

styles.css

```
h1 {
    color: red;
}
```

Commandes Git
```
git add index.html styles.css
git commit -m "Ajout des fichiers html et css de base"
git push
```
-> Les fichiers sont envoyés sur GitHub.

# 🔗 Connexion au dépôt distant
```
git remote add origin https://github.com/crocro23/OpenclassroomsProject.git
git branch -M main
git push -u origin main
```

# ✏️ Modification d’un fichier

Modification de index.html :

```
<h1>Un mega titre</h1>
```

Commandes :

```
git add index.html
git commit -m "Modification du titre H1"
git push origin main
```

# 🌿 Création et fusion d’une branche
```
git branch
git branch cagnotte
git checkout cagnotte
echo "texte de la cagnotte" > C:/GIT/OpenclassroomsProject/cagnotte.txt
git add cagnotte.txt
git commit -m "Réalisation de la partie cagnotte côté front end"
git push -u origin cagnotte
```

Fusion :

```
git checkout main
git merge cagnotte
```

# 📥 Cloner un dépôt existant

```
git clone git@github.com:OpenClassrooms-Student-Center/7162856-G-rez-Git-et-GitHub.git
cd 7162856-G-rez-Git-et-GitHub
git pull origin main
git branch update-color
git checkout update-color
```
Modification :

```
color: blue;
```
Commit :

```
git add styles.css
git commit -m "Modification de la couleur du css en bleu"
git push -u origin update-color
```

GitHub propose alors une Pull Request.

Commentaire ajouté : *Change h1 color from red to blue* puis : 
```
Merge Pull Request
```

# 🧰 Commandes Git utiles

- git branch -d	Supprime une branche
- git status	Affiche l’état des fichiers
- git stash	Sauvegarde temporaire des modifications
- git log	Historique des commits
- git reset --hard HEAD^	Retour au commit précédent
- git commit --amend	Modifier le dernier commit
- git reset	Revenir à l’état précédent sans commit
- git revert	Revenir à l’état précédent avec un nouveau commit
- git reflog	Historique complet des actions locales
- git checkout	Revenir à un commit précis
- git blame	Voir qui a modifié chaque ligne

# ⚔️ Gestion des conflits
- Modifier les fichiers en conflit. Puis :
```
git add fichier_conflit.txt
git commit -m "Résolution du conflit"
git push
```
# 📚 Pour aller plus loin

- [Gestion des erreurs Git](https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github/8295476-allez-plus-loin-dans-votre-utilisation-de-git-et-github)
- [Formation LinkedIn Learning](https://www.linkedin.com/learning/l-essentiel-de-git)
- [Tutoriel vidéo Git Ingest](https://www.youtube.com/watch?v=UOK6Wyu_qEQ)
- [Cours complet Git](https://www.it-connect.fr/cours/git-apprendre-a-faire-de-la-gestion-de-versions/)

Note: MAJ au 27 mars 2026