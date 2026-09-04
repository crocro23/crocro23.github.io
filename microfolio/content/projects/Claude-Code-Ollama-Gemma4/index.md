---
title: "Claude Code GRATUIT avec Ollama + Gemma4"
date: "2026-09-04"
location: "Mordelles, France"
description: "Retour d’expérience complet : installation de Claude Code en local via Ollama, configuration avancée, génération automatique de fichiers, tests, documentation et mise en ligne GitHub."
type: "documentation"
tags:
  - ollama
  - claude-code
  - gemma4
  - local-ai
  - webdev
  - html
  - css
  - javascript
  - git
  - github
  - automation
  - rtx4070ti
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: true
---

# Claude Code GRATUIT avec Ollama + Gemma4 🔥 Tuto Local

Un résumé de mon installation et des actions réalisées pour utiliser Claude Code en local avec Ollama (RTX4070 Ti).  
Basé sur la vidéo de Korben : https://www.youtube.com/watch?v=1FD3fThB0JE

---

## 🚀 Contexte et objectif

Configurer Claude Code pour fonctionner localement via Ollama, créer un petit site web d'exemple, ajouter tests et documentation, puis initialiser le dépôt GitHub.

Matériel : DELL-G15-5520

- 31,7 RAM_Go
- 12th Gen Intel(R) Core(TM) i9-12900H
- NVIDIA GeForce RTX 3070 Ti Laptop 8 Go

Logiciels :

- [Ollama](https://ollama.com/download)
- [Claude Code](https://claude.ai/code)

---

## 🔧 Configuration importante

Fichier `settings.json` de Claude Code (modifié) :

```json
{
  "theme": "auto",
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "env": {
    "ANTHROPIC_BASE_URL": "http://localhost:11434",
    "ANTHROPIC_AUTH_TOKEN": "ollama",
    "ANTHROPIC_API_KEY": "",
    "ANTHROPIC_MODEL": "gemma4",
    "CLAUDE_CODE_MAX_CONTEXT_TOKENS": "131072",
    "CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT": "1"
  }
}
```

Paramètre Ollama modifié :

- context length : `256k`

---

## 🧭 Commandes terminal / lancement

1. Lancer Ollama avec le modèle Gemma 4 :

```
cd C:\claudecodeollama
ollama launch claude --model gemma4
```
Je passe outre le message d'incompatibilité de claude code et je commence  : 
```
"gemma4" is not a model this version of Claude Code recognizes,
so auto-compact will keep this session within 200k tokens (the context window it assumes). 
If the model accepts more, append [1m] to the model name for 1M, 
or set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window; to make it recognized, 
map it in the modelOverrides setting or update Claude Code; 
CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 
restores the previous wait-for-the-API behavior.

Settings Error

  C:\Users\micka\.claude\settings.json
   Invalid or malformed JSON

  Files with errors are skipped entirely, not just the invalid settings.

    1. Fix with Claude
    2. Exit and fix manually
  > 3. Continue without these settings


  ▐▛███▛█   Claude Code v2.1.251
▝▜██████▀  gemma4 · API Usage Billing
  ▝▝ ▝▝    C:\claudecodeollama
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
> 
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ⏸ manual mode on · ? for shortcuts · ← for agents
```

2. Git / initialisation du dépôt :

```
git init
git remote add origin https://github.com/crocro23/claude-project-web
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

3. Mises à jour

```
git checkout main
git add .
git commit -m "maj Readme.md"
git push origin main
```

Dépôt créé :

- https://github.com/crocro23/claude-project-web

---

4. 🗂️ Fichiers créés :

- `index.html`
- `script.js`
- `style.css`
- `CLAUDE.md`
- `DEPLOY.md`
- `README.md`

---

## ⏱️ Timeline des actions réalisées (durées fournies)

- Crée un fichier `index.html`, `script.js`, `style.css` — 30s ✅
- Modifie `index.html` pour ajouter le fichier `.jpg` de la vidéo — 40s ✅
- Lit `Description de la vidéo.txt` et l'ajoute dans `index.html` — 50s ✅
- Lit `style.css` et adapte automatiquement à la page HTML — 35s ✅
- Ajout de code dans `script.js` pour dynamiser la page — 2 min ✅
- Variables CSS et gestion des dépendances — 1 min 30s ✅
- Amélioration UX, liens vers korben.info et la vidéo — 1 min 15s ✅
- Remplacement du titre et du texte d'accueil :
  - Titre modifié : "Claude Code GRATUIT avec Ollama + Gemma 4 🔥 Tuto Local"
  - Ajout d'un mode sombre/jour et bouton pour basculer — 2 min 15s ✅
- Création de `CLAUDE.md` — 35s ✅
- Création d'un jeu de tests automatisés + supervision de la page — 1 min 45s ✅
- Guide de déploiement (`DEPLOY.md`), polissage UX/UI, finalisation docs — 3 min 20s ✅
- Initialisation dépôt GitHub — 10s ✅
- Ajout/maj README — 1 min 35s ✅

---

## ✅ Résumé final (résumé automatique de Claude Code)

Le projet est FINALISÉ, TESTÉ ET DOCUMENTÉ.

Récapitulatif de la livrabilité finale :

- Fonctionnalités (UX/UI) : Thème sombre/clair, animations fluides, CTA clairs.
- Logique : State Management stable, tests unitaires et supervision OK.
- Documentation : `README.md`, `CLAUDE.md`, `DEPLOY.md` fournis.
- Contrôle de version : dépôt initialisé, commit et push effectués.

---

# 🔗 Pour aller plus loin :

- [Claude Code GRATUIT avec Ollama + GLM 🔥 Tuto Local - YouTube](https://www.youtube.com/watch?v=1FD3fThB0JE)
- [Claude Code](https://claude.ai/code)
- [What is Claude Code?](https://anthropic.skilljar.com/claude-code-101/469788)
- [Claude Code Skills Not Working? The Invisible Limits Nobody Talks About | Medium](https://medium.com/@cheparsky/ai-in-testing-9-the-invisible-limitations-of-claude-code-skills-you-didnt-know-f3adbdcf3680)
- [Most developers install Claude Code and immediately use it wrong](https://www.linkedin.com/posts/kachave_ai-claudecode-developers-share-7446071623088087042-rjf8/)
- [12 Claude Code Commands Most Developers Never Use by habtesoft Medium](https://habtesoft.medium.com/12-claude-code-commands-most-developers-never-use-8e5b75825387?sk=788119f5a2f8c94fe0010d296d5dfd9d)

---

Note : MAJ du 4 septembre 2026
