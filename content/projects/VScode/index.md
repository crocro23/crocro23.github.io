---
title: "Visual Studio Code"
date: "2026-03-30"
location: "Mordelles, France"
coordinates: [48.066669, -1.85]
description: "mettre en place un environnement de développement front-end"
type: "Dev"
tags: ["VS Code, Chrome, devtools"]
authors:
  - name: 'Mickael Crozon'
    role: 'Propriétaire'
featured: True
---
# Installation et utilisation de Visual Studio Code avec GitHub et Copilot

## 🛠️ Installation des outils

### Visual Studio Code

Téléchargement : <https://code.visualstudio.com/>

Installation puis lancement.

### Navigateurs

* **Chrome** : <https://www.google.com/chrome/>
* **Edge** : installé par défaut sur Windows

---

## 🤖 Premiers pas avec VS Code et Copilot

Au lancement de VS Code :

* Choisir **Use AI features with Copilot for free**
* Ouvrir la fenêtre de discussion et parler avec **@workplace**
* Exemple demandé : *« Fais-moi du code Hello World, sois créatif dans le choix du langage »*
* L’IA répond avec du code en **LOLCODE**

### Fonctionnalités IA

* **Make changes using natural language** : modifier du code en langage naturel
* **Inline suggestions** : suggestions automatiques dans l’éditeur
* **CTRL + I** : utiliser le langage naturel dans les fichiers
* **Copilot rédige des messages de commit et des descriptions de Pull Request**

---

## ⌨️ Raccourcis clavier essentiels

(Source : <https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features>)

* **Ctrl+Alt+I** : Ouvrir la fenêtre de discussion
* **Ctrl+I** : Saisir une invite vocale
* **Ctrl+N** : Nouvelle session de discussion
* **Ctrl+Maj+I** : Utiliser les agents
* **Tab** : Accepter une suggestion
* **Échap** : Fermer une suggestion

---

## 🎨 Personnalisation de VS Code

* Thème : **Dark+** pour réduire la fatigue visuelle
* Taille du texte : **16**
* Indentation : **3**
* Format on Save : **activé**
* Word Wrap : **ON**

---

## 🧩 Extensions recommandées

| Extension | Utilité | 
| --- | --- | 
| Prettier | Formate automatiquement le code | 
| ESLint | Détecte les erreurs JS/React | 
| Python | Support Python + linting | 
| Pylance | Autocomplétion Python | 
| SQLTools | Gestion SQL | 
| Thunder Client / REST Client | Tester les APIs | 
| GitLens | Historique Git détaillé | 
| Git Graph | Visualisation graphique Git | 
| ES7+ React Snippets | Raccourcis React | 
| Live Server | Serveur local web |

## 🔗 Connexion à GitHub

1. Se connecter à GitHub depuis VS Code
2. Cloner ce dépôt : <https://github.com/OpenClassrooms-Student-Center/5543061-ecrivez-du-javascript-pour-le-web-activity>

### Erreur rencontrée
```
git fatal: HEAD is not a commit and a branch cannot be created from it
```

### Solution

```
git log
echo "Initial commit" > README.md
git add README.md
git commit -m "Initial commit"
```
Ensuite, création de branche possible.

## 🧪 Clonage d’un second dépôt
Dépôt : https://github.com/OpenClassrooms-Student-Center/6943241-mettez-en-place-votre-environnement-front-end-quizz 

Lancement du projet puis ouvrir index.html

Cliquer sur Go Live → http://127.0.0.1:5500/6943241-mettez-en-place-votre-environnement-front-end-quizz/index.html

Modifications : 
Copier le contenu de extras/extra.js dans les balises script du fichier index.html

Ligne 52 : supprimer disabled

Actualiser Chrome → le menu Dropdown devient actif

Manipulations CSS : 
Récupérer le code couleur du menu :
```
#7351eb
```

Modifier le style du carré du milieu → devient mauve

Rendre le 3e carré transparent → le fichier 12 apparaît

La ligne suivante affiche la date en bleu dans la console :
```
console.log(`%c${new Date().toDateString()}`, 'color:#0000ff;font-weight:bold');
```

## 🚀 Pour aller plus loin
Agents IA et extensions avancées
- [Installer un agent IA local avec Continue](https://www.journaldunet.com/intelligence-artificielle/1548665-continue-et-si-vous-pouviez-vibecoder-hors-ligne-et-gratuitement-tuto/)
- [Kilo Code : extension VS Code qui surpasse Cursor](https://korben.info/kilo-code-extension-vs-code-assistant-ia-open-source.html)
- [Mode Agent IA dans VS Code](https://korben.info/vs-code-1-99-mode-agent-assistant-ia.html)
- [Playwright MCP dans VS Code](https://medium.com/@rajesh.yemul_42550/integrating-ai-into-automation-testing-part-2-setting-up-playwright-mcp-in-vs-code-148632da0e10)
- [Raccourcis VS Code méconnus](https://dev.to/devmount/23-lesser-known-vs-code-shortcuts-as-gif-80)

## Raccourcis utiles :

CTRL+, = Paramètres utilisateur

CTRL+K CTRL+S = Raccourcis clavier

CTRL+R = Changer d’espace de travail

ALT+Z = Retour à la ligne automatique

CTRL+G = Aller à la ligne

CTRL+P = Aller au fichier

F8 = Erreur suivante

CTRL+TAB = Changer d’onglet

MAJ+ALT+I = Curseur en fin de ligne

CTRL+L = Sélectionner la ligne

CTRL+MAJ+L = Sélectionner toutes les occurrences

CTRL+F2 = Sélectionner toutes les occurrences du mot

CTRL+MAJ+ESPACE = Infobulles

MAJ+ALT+F = Formater document

CTRL+K CTRL+F = Formater sélection

F12 = Aller à la définition

ALT+F12 = Prévisualiser la définition

F2 = Renommer symbole

CTRL+K CTRL+X = Supprimer espaces de fin

CTRL+K R = Afficher fichier actif

CTRL+MAJ+H = Remplacer dans les fichiers

CTRL+K V = Aperçu Markdown

CTRL+K Z = Mode Zen

---

_Note: MAJ au 30 mars 2026_