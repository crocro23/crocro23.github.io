---
title: "Playwright"
date: "2026-04-02"
location: "Mordelles, France"
description: "Playwright – Guide complet pour débuter et maîtriser les tests automatisés"
type: "QA"
tags: ["playwright", "tests", "automatisation", "e2e", "qa", "typescript", "accessibilite"]
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: True
---


# 🎭 Introduction à Playwright

Playwright est un framework moderne permettant d’automatiser des tests end‑to‑end sur plusieurs navigateurs : Chromium, Firefox et WebKit. 
Il permet aussi de tester les API, l’accessibilité, les interactions clavier/souris, les uploads de fichiers, et bien plus encore.
Ce guide retrace toutes les étapes, depuis l’installation jusqu’aux tests avancés.

---

# 🛠️ 1. Cloner un dépôt Playwright

Dans VS Code, je clone ce dépôt :
https://github.com/LinkedInLearning/playwright_5404027.git 

### ❗ Erreur rencontrée

```
fatal: unable to access 'https://github.com/...': Could not resolve host: github.com
```

➡️ Solution : configurer le proxy

```
setx HTTP_PROXY "http://localhost:9000/"
setx HTTPS_PROXY "http://localhost:9000/"
setx NO_PROXY "127.0.0.1,localhost"
```


Après redémarrage de VS Code → le clone fonctionne.

---

# 📦 2. Installation des dépendances

```
npm install
```

### ❗ Erreur : self‑signed certificate

```
request to https://registry.npmjs.org/... failed, reason: self-signed certificate
```

➡️ Solution :

```
npm set strict-ssl false
npm install
```

---

# 🧩 3. Installation de Playwright

Dans VS Code :

- Installer l’extension **Playwright Test** (Microsoft)
- Palette de commande :

```
Test: Install Playwright
Résultat : **Happy hacking! 🎭**
```

La fiole de chimiste apparaît : accès aux outils Playwright.

---

# 🧪 4. Premier test Playwright

Un fichier `example.spec.ts` est fourni.
Dans la barre Playwright :
- Navigateur **Chromium** coché
- Option **Show browser** activée

Je clique sur **Run tests** → Chrome s’ouvre :

```
Running 2 tests using 1 worker
2 passed (4.5s)
```

---

# 📘 5. Construire un plan de test

Un plan de test doit contenir :

- Les spécifications fonctionnelles
- Les User Stories (en Agile)
- Les cas de tests : usuels, extrêmes, erreurs
- 1 test = 1 cas de test

### Le modèle AAA

- **Arrange** : préparer le test
- **Act** : déclencher l’action
- **Assert** : vérifier le résultat

Bonnes pratiques :

- Tests indépendants
- Déterministes et reproductibles
- Données factices mais représentatives
- Pas de valeurs « magiques »
- Dépendances isolées

---

# 🎥 6. Enregistrer un test (Record)

Je lance l’enregistreur : **Record new**.

Dans Chrome :

- Je vais sur <https://labasse.github.io/tutti-frutti/>
- Je tape "ana" dans la barre de recherche
- Deux résultats apparaissent

Playwright génère un test.

Je renomme le fichier :
barre-de-recherche-avec-texte.spec.ts

Puis je crée :

- test‑1a.spec.ts → recherche sans résultat, retour accueil, reset
- test‑1b.spec.ts → tests complets

---

# 🧭 7. Exécution avancée avec UI

Dans le terminal :

```
npx playwright test --ui
```

Je visualise les tests.
Résultats :

```
- test‑1.spec.ts → OK
- test‑1a.spec.ts → OK
- test‑1b.spec.ts → ❌ KO

Erreur :

expect(locator).toBeVisible() failed
Locator: locator('head')
Expected: visible
Received: hidden
```

➡️ Correction :
```
await expect(headTag).toHaveCount(1);
```

---

# ♿ 8. Accessibilité & rôles ARIA

Documentation ARIA : <https://www.w3.org/TR/wai-aria-1.0/roles>

Playwright permet :

- `getByRole()`
- `getByText()` (regex possibles)
- `getByAltText()`

Exemples :

```
await expect(page.getByText(/^Ananas.*Banane/i)).toBeVisible();
await expect(page.getByAltText(/(fruit)$/)).toHaveCount(11);
```

Principales assertions :

- toBeEnabled
- toBeEditable
- toBeFocused
- toBeVisible
- toHaveCount
- toBeEmpty
- toHaveText

---

# 🖱️ 9. Souris & interactions

- `hover()`
- `dragTo()`
- `mouse.click()`
- `mouse.move()`
- `mouse.wheel()`

Voir : `portrait-drawing.spec.ts`

---

# ⌨️ 10. Clavier

- `page.keyboard.press('Delete')`
- `page.keyboard.type('...')`

Utile pour les touches spéciales.

---

# 📁 11. Upload de fichiers

Exemple :

```
await page.getByLabel('Fond').setInputFiles(['tests/data/bg.jpg']);
```

---

# 🪟 12. Pop‑ups

```
page.on('dialog', dlg => dlg.accept());
```

---

# 🌐 13. Tests API

Exemple :

```
const response = await request.get('https://labasse.github.io/tutti-frutti/calendrier.json');
expect(response.ok()).toBeTruthy();
```

Mock API :

```
await page.route('/*/calendrier.json', async route => {
await route.fulfill({ status: 200, json: [...] });
});
```

---

# 🧱 14. Fixtures & organisation

### Base URL

Dans `playwright.config.ts` :

```
baseURL: 'https://labasse.github.io/'
```

### Hooks

```
test.beforeEach(async ({ page }) => {...})
test.afterEach(async () => {...})
```

### Fixtures personnalisées

- nav.ts
- index.ts

### Authentification

- user.ts
- index.ts
- cookies (ex : saucedemo)

---

# ♿ 15. Accessibilité WCAG avec Axe

```
npm install -D @axe-core/playwright
```
Résultat : score parfait sur mon portfolio.
Voir : `accessibility.spec.ts`

---

# 🧩 16. Page Object Model (POM)

Créer une classe par page :

- Méthodes = actions
- Tests plus courts et lisibles

Exemple :
- index-page.ts
- index.spec-pages.ts

---

# 📸 17. Captures d’écran

```
await page.screenshot({ path: 'test-results/screenshots/index.png', fullPage: true });
```
Pour les anomalies :
```
await canvas.screenshot({ path: 'test-results/screenshots/canvas.png' });
```

---

# 📊 18. Reporting avec Monocart

Installation :

```
npm i -D monocart-reporter
```

Configuration :

```
reporter: [
['list'],
['monocart-reporter', { outputFile: 'test-results/reporter/index.html' }]
]
```

Afficher le rapport :

```
npx monocart show-report test-results/reporter/index.html
```

---

# 📚 Pour aller plus loin

## 🤖 AI / Playwright MCP / Agents

- [Playwright MCP in 2026: Testers Are Crying… AI Is Coding](https://medium.com/@testleaf/playwright-mcp-in-2026-testers-are-crying-ai-is-coding-ed1fd161096c)
- [Making Sense of Playwright MCP, CLI, and Skills — A Beginner’s Guide](https://medium.com/@gurudatt.sa26/making-sense-of-playwright-mcp-cli-and-skills-a-beginners-guide-65e3c94be067)
- [End-to-End Guide to Playwright Automation with MCP & AI Agents](https://medium.com/@banothvijaykumar2020/end-to-end-guide-to-playwright-automation-with-mcp-ai-agents-6029420e275e)
- [Stop Diagnosing Playwright Traces Manually](https://ai.plainenglish.io/stop-diagnosing-playwright-traces-manually-automate-it-with-claude-playwright-mcp-f0f2672f3a86)
- [Building an AI-Powered Test Automation Framework with Playwright](https://blog.dot.co.id/building-an-ai-powered-test-automation-framework-with-playwright-024e9c160d5e)
- [Writing Playwright Tests with Claude Code](https://medium.com/@poorva.ramani/writing-playwright-tests-with-claude-code-a-senior-qas-reflective-experiment-77125601f3f0)
- [AI Agents for QA and Testing](https://medium.com/@eshnehapaudyal/how-ai-agents-like-playwright-agents-can-enhance-qa-and-testing-d324eba65a7a)

---

## 🧱 Architecture / Framework / Scalabilité

- [How to Build a Playwright Framework That Survives 10,000+ Tests](https://medium.com/codetodeploy/how-to-build-a-playwright-framework-that-survives-10-000-tests-86132ab4c101)
- [Building a Scalable Automation Framework with Playwright + TypeScript](https://medium.com/@rajesh.yemul_42550/building-a-scalable-automation-framework-with-playwright-typescript-39a23a996f96)
- [Playwright vs Selenium in 2026](https://medium.com/codetodeploy/playwright-vs-selenium-in-2026-an-engineering-and-career-perspective-777ed53d84b8)
- [Playwright 101](https://blog.stackademic.com/playwright-101-the-testing-revolution-youve-been-waiting-for-3842b14d5df8)

---

## 🧪 Flakiness / Fiabilité / Debug

- [Why Your Playwright Tests Are Still Flaky](https://medium.com/codetodeploy/why-your-playwright-tests-are-still-flaky-and-its-not-because-of-timing-9c005d0e83a3)
- [I Wasted Two Weeks Fighting Flaky Tests](https://medium.com/@testleaf/i-wasted-two-weeks-fighting-flaky-tests-until-i-found-this-playwright-trick-37ad7b0a7809)
- [Async JavaScript for Playwright Engineers](https://medium.com/h7w/async-javascript-for-playwright-engineers-why-most-test-instability-is-a-misunderstood-event-loop-f153637504fd)
- [Graceful Test Cancellation with AbortSignal](https://medium.com/@vitalicset/graceful-test-cancellation-why-your-playwright-tests-need-abortsignal-479ef30a1e78)
- [Healwright: Self-healing selectors](https://medium.com/@Amr.sa/healwright-let-your-playwright-tests-heal-their-own-selectors-on-the-fly-d0178568f9bc)

---

## 🔌 API / Backend Testing

- [Testing GraphQL APIs Using Playwright](https://medium.com/@gunashekarr11/testing-graphql-apis-using-playwright-advanced-use-cases-for-modern-sdets-bf09d46d7bf5)
- [API Validation Against Database Using Playwright](https://medium.com/@gunashekarr11/api-validation-against-database-using-playwright-the-missing-e2e-pattern-every-sdet-should-use-7bb1242edd41)

---

## 🛠️ Outils / Reporting / CI

- [Visual Testing with Playwright + GitHub Actions](https://medium.com/insiderengineering/visual-testing-that-doesnt-suck-playwright-github-actions-chef-s-kiss-efc27e0e8d83)
- [Playwright Smart Reporter](https://medium.com/@qa.gary.parker/playwright-smart-reporter-building-an-intelligent-test-reporter-with-ai-df559d8b94d7)
- [Using agent skills to write Playwright tests](https://medium.com/detesters/using-agent-skills-to-write-playwright-tests-d0988aeccc93)

---

## 🎓 Interview / Learning

- [LinkedIn Learning – L'essentiel de Playwright](https://www.linkedin.com/learning/l-essentiel-de-playwright/bienvenue-dans-l-essentiel-de-playwright)
- [Most Asked Playwright Interview Questions (Mar 2026)](https://medium.com/@pragyas215/most-asked-playwright-interview-questions-7b78924fb343)
---

_Note: MAJ au 11 avril 2026_