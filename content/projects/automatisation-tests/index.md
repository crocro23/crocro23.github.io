---
title: "Automatisation des tests"
date: "2026-04-06"
location: "Mordelles, France"
description: "Réduire le temps des tests de régression et la dette technique, permettre de tester en continu"
type: "Dev"
tags: ["automatisation-tests", "qa", "ci-cd", "strategie-de-test", "analyse-de-risque", "framework-tests", "mocha", "instabul nyc", "couverture-de-code", "devops"]
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: True
---

# Automatisation des tests

## 🎯 3 objectifs dans l'automatisation des tests
- Réduire le temps des tests de régression  
- Réduire les dettes techniques  
- Permettre de tester en continu  

---

## 🤖 3 activités automatisables
- Sélection des scénarios  
- Écriture des scripts  
- Contrôle des résultats  

---

## 🧪 Tests unitaires & intégration
- Réalisés par les développeurs  
- Attention : développement + tests en parallèle = risque de surcharge  
- L’automatisation fait partie du projet de développement  
- Externaliser les tests ne prend pas toujours en compte les mises à jour du backlog  
- Une seule personne peut automatiser, mais un **ingénieur d’automatisation** est recommandé  

---

## 🧭 Quadrant du test agile
Référence : https://latavernedutesteur.fr/2021/07/05/istqb-quadrant-de-test-agile/

Points à aborder :
- Tests complets à chaque mise à jour  
- Priorisation des tests  
- Résumer et documenter les tests  
- Utilisation des scénarios Gherkin  
- Utiliser un outil de communication  
- Techniques de conception de tests  

---

## ❓ Questions essentielles
- Les tests sont‑ils accessibles par toute l’équipe ?  
- Sont‑ils faciles à exécuter et fournissent‑ils un rapport ?  
- Sont‑ils exécutés dans le CI/CD ?  
- Sont‑ils exécutés à chaque commit ?  

---

## 🔁 Déroulement des tests
1. Exécution locale pour valider le build  
2. Modifier la tâche CI/CD visible par l’équipe  
3. Ajouter le test dans le pipeline CI/CD  

---

## 🤝 Collaboration autour de l’automatisation
L’automatisation est plus efficace lorsque plusieurs rôles collaborent :

- Product Owner  
- Business Analyst  
- Développeurs  
- Testeurs  
- DevOps  
- Spécialistes en automatisation  

### Pair testing
- Développeurs + testeurs = idées d’automatisation + diversité des tests (intégration, système, métier)

### Rôle des autres acteurs
- PO / BA : priorisation  
- Développeurs : détectent rapidement les régressions  
- DevOps : intègrent les outils dans le CI/CD  
- Testeurs : identifient les problèmes les plus coûteux  

> L’automatisation **ne remplace pas** les tests manuels.

---

## 🧠 Identification des scénarios
Doit être **la plus complète possible**, même hors contexte.

Chaque scénario est noté de **1 à 5** selon :
- Importance  
- Distinction par rapport à l’existant  
- Introduction à l’action  

### Exemple – Site e‑commerce

#### Valeur
| Scénario | Valeur |
|---------|--------|
| Voir les produits à vendre | 5 |
| Ajouter un produit au panier | 5 |
| Supprimer un produit du panier | 4 |
| Vider mon panier | 4 |
| Voir mes commandes | 5 |
| Modifier la couleur du fond | 1 |
| Passer commande | 5 |

#### Risque
| Scénario | Risque |
|---------|--------|
| Voir les produits | 5 |
| Ajouter au panier | 5 |
| Supprimer du panier | 5 |
| Vider le panier | 4 |
| Voir mes commandes | 5 |
| Modifier la couleur du fond | 1 |
| Passer commande | 5 |

#### Coût d’automatisation
| Scénario | Coût |
|---------|------|
| Voir les produits | 5 |
| Ajouter au panier | 5 |
| Supprimer du panier | 3 |
| Vider le panier | 3 |
| Voir mes commandes | 4 |
| Modifier la couleur du fond | 3 |
| Passer commande | 4 |

> Le total Valeur + Risque + Coût permet de prioriser les scénarios à automatiser.

---

## 🧰 Frameworks de tests
- **Mocha** : tests Node.js  
- **Cucumber** : tests BDD (tous langages)  
- **Selenium / Cypress** : tests IHM  

### Installation Mocha
```
npm init -y
npm install --save-dev mocha
npm install --save-dev chai
npm test
```

---

## ✔️ Assertions
- Les assertions échouent si le résultat diffère du prévu  
- `assert` et `chai` utilisables en Node.js  
- Les assertions doivent être **lisibles par tous**  

---

## 📏 Maintien des standards
- Les tests sont utiles → rétrospectives régulières  
- Les tests sont faibles → indépendants, environnement dédié  
- Les tests sont rapides → parallélisation, sans interface graphique  
- Les tests évoluent avec les nouvelles fonctionnalités  
- Les tests doivent fonctionner :  
  - Relancer en cas d’échec aléatoire  
  - Chercher la cause racine  
  - CI/CD = meilleure exécution  

Solutions CI/CD :
- Jenkins  
- TeamCity  
- GitLab CI  
- Azure DevOps  
- Travis CI  

---

## 📊 Couverture de code
- SonarQube : C#, Java, JS, PHP, Python, TS  
- DotCover : .NET  
- Cobertura : Java  
- Istanbul (nyc) : JavaScript  

### Installation Istanbul
```
npm install --save-dev nyc
npm run test:coverage operations-mathematiques.js
```

---

## 🎉 Partager les succès
- Nombre d’anomalies détectées  
- Heures gagnées  
- Collaboration améliorée  

---

## 🌍 Tester sur plusieurs environnements
- Configurations dans des artéfacts  
- Navigateurs : Chrome, Edge, Safari  
- Plateformes : BrowserStack, SauceLabs, LambdaTest  
- Apps mobiles : Appium  

---

## 💰 Calcul du ROI
- Mesurer le temps des tests manuels  
- Comparer avec les tests automatiques  
- Inclure : mise en place, formation, couverture  
- Feedback global de l’équipe  
- Tests faits en parallèle du développement  
- Développement plus rapide grâce à moins de régressions  

---

## 🚀 Développer ses compétences
- Écrire plus de tests  
- Essayer plusieurs frameworks  
- Construire sa propre suite de tests  
- Maîtriser les modèles de conception  

---

## 📚 Pour aller plus loin

- [L'automatisation des tests](https://www.linkedin.com/learning/l-automatisation-des-tests/bienvenue-dans-l-automatisation-des-tests)
- [Which Tests Should We Automate - Angie Jones – Sr. Automation Engineer](https://www.youtube.com/watch?v=VL-_pnICmGY)
- [Which Tests Should We Automate. This interesting talk was presented by Chong S. Lee](https://medium.com/@chonglee30/which-tests-should-we-automate-f6e3b2286763)
- [Unit Testing with Mocha and Chai [Part 1/2]](https://www.youtube.com/watch?v=k4GFqgBR2qc)
---

## 🧮 Tableau comparatif CI/CD

| Critère | Jenkins | TeamCity | GitLab CI | Azure DevOps | Travis CI |
|--------|---------|----------|-----------|---------------|-----------|
| 💰 Coût | Gratuit (open-source) | Gratuit jusqu'à 100 builds | Gratuit (400 min/mois) | Gratuit 5 utilisateurs | Gratuit public / payant privé |
| 🎯 Facilité | Courbe raide | Interface intuitive | YAML simple | Interface Microsoft | Très simple |
| 🔧 Maintenance | Lourde | Faible | Faible | Nulle (SaaS) | Nulle |
| 🛟 Support | Communauté massive | Support JetBrains | Support GitLab | Support Microsoft | Limité |

### 🏆 Verdict
- **Startup** → GitLab CI / Azure DevOps  
- **Entreprise DevOps** → Jenkins / TeamCity  
- **Cloud Microsoft** → Azure DevOps  
- **Open‑source** → Travis CI / GitHub Actions  
- **Jeux vidéo** → TeamCity  
- **Secteur régulé** → GitLab Ultimate / Azure DevOps  


Note: MAJ au 11 avril 2026