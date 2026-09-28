---
title: "Utilisation d’un poste de travail Linux"
date: "2025-11-14"
location: "Mordelles, France"
coordinates: [48.066669, -1.85]
description: "Découverte des bases de Linux/Unix, commandes essentielles et automatisation avec Bash"
type: "système"
tags: ["Linux", "Unix", "Shell", "commandes", "Bash", "automatisation"]
authors:
  - name: 'Mickael Crozon'
    role: 'Auteur'
featured: true
---

# Utilisation d’un poste de travail Linux

## 🧭 Les fondamentaux => A cours à faire chez ENI...

- Caractéristiques générales des systèmes GNU/Linux  
- Syntaxe des commandes et connexion à un terminal  
- Le Shell Bash : utiliser l’aide, comprendre l’arborescence  
- Gestion des fichiers et expressions régulières  
- Commandes de recherche et éditeur de texte **vim**  
- Processus, redirections et pipelines  
- Archivage et compression  

---

## 💻 Les distributions Linux les plus utilisées

- **Ubuntu**  
- **Linux Mint Cinnamon**  
- **Zorin OS Core**

👉 Tester Linux sans l’installer : [DistroSea](https://distrosea.com/fr/)

---

## ⌨️ Raccourcis utiles

- `CTRL + ALT + T` → ouvrir le terminal  
- `CTRL + ALT + L` → verrouiller l’écran  
- `TAB` → compléter automatiquement la commande  
- `CTRL + C` → interrompre une commande  
- `CTRL + Z` → suspendre une commande  
- `CTRL + D` → déconnecter le terminal en cours  
- `CTRL + L` → effacer l’écran du terminal  
- `CTRL + A` → curseur au début de la ligne  
- `CTRL + E` → curseur en fin de ligne  
- `CTRL + U` → effacer du début jusqu’au curseur  
- `CTRL + K` → effacer du curseur à la fin  
- `CTRL + W` → supprimer un mot avant le curseur  
- `CTRL + Y` → coller le texte effacé  
- `CTRL + P` → commande précédente  
- `CTRL + N` → commande suivante  
- `CTRL + R` → recherche dans l’historique  

---

## 📜 Commandes Unix essentielles

- `ls` → liste le contenu d’un dossier  
- `pwd` → affiche le chemin du répertoire actuel  
- `cd` → naviguer entre les répertoires  
- `mkdir` → créer un répertoire  
- `rmdir` → supprimer un répertoire  
- `rm` → supprimer des fichiers  
- `cp` → copier des fichiers  
- `mv` → déplacer un fichier ou dossier  
- `zip` → compresser des fichiers  
- `tar` → regrouper des fichiers dans une archive  
- `nano`, `vi`, `jed` → éditeurs de texte  
- `cat` → afficher le contenu d’un fichier  
- `grep` → rechercher des lignes spécifiques  
- `sed` → rechercher et remplacer des mots  
- `head` → afficher les 10 premières lignes  
- `tail` → afficher les 5 dernières lignes  
- `sort` → trier le contenu d’un fichier  
- `cut` → extraire des sections d’un fichier  
- `sudo` → exécuter des commandes administratives  
- `chmod` → modifier les permissions  
- `jobs` → afficher les tâches en cours  
- `kill` → mettre fin à un processus  
- `history` → afficher l’historique des commandes  
- `man` → afficher le manuel d’une commande  
- `echo` → imprimer du texte ou écrire dans un fichier  

---

## ⚙️ Automatisation avec Bash

Les scripts Bash permettent d’automatiser les tâches répétitives : sauvegardes, mises à jour système, flux de travail personnalisés.  
Des outils comme **xbindkeys** peuvent associer des scripts ou commandes à des raccourcis clavier.

---

## 🎓 Ressources de formation

- **FUN-Mooc – Maîtriser le shell Bash**  
  - Décrire des tâches courantes par commandes  
  - Utiliser une console pour administrer son ordinateur  
  - Configurer son environnement  
  - Enchaîner des commandes pour des traitements spécifiques  
  - Écrire et lire des scripts Bash  
  - Corriger des erreurs dans des scripts existants  

---

## 🧩 Exemple de script shell

Source : [Exemples de scripts shell – ENIB](https://web.enib.fr/~kerhoas/linux/exemples-scipts-shell/)

```bash
#!/bin/bash

# encodage de départ
encodeFrom='iso-8859-1'
 
# encodage voulu
encodeTo='utf-8'

mkdir -p SAVE
 
# application du script sur tous les fichiers
for filename in $(find . -type f)
do 
    # sauvegarde du fichier source
    mv $filename $filename.save
     
    # écriture du fichier encodé
    iconv --verbose -f $encodeFrom -t $encodeTo $filename.save -o $filename
done

mv *.save SAVE
```

_Note: MAJ au 14 novembre 2025_