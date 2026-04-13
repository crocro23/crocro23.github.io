---
title: "Algorithmes et logique de programmation"
date: "2026-03-26"
location: "Mordelles, France"
description: "Comprendre ce qu’est un algorithme, comment il fonctionne et comment il se traduit en pseudo‑code"
type: "Dev"
tags: ["algorithmes", "pseudo-code", "programmation", "variables", "boucles", "complexité"]
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: True
---
# 🧠 Qu’est‑ce qu’un algorithme ?

Un "algorithme" est une suite d’instructions exécutées étape par étape, comme une recette de cuisine.  
Il permet d’automatiser des tâches simples ou complexes :

- Déplacer 2000 photos une par une  
- Chercher une expression dans un PDF de 200 pages  
- Reconnaître une image  
- Vérifier un paiement bancaire en ligne  

---

# 🧱 Décomposer un problème

Un programme informatique suit la même logique que la construction d’un bâtiment ou d’un château en Lego :

> On découpe un grand problème en sous‑problèmes plus simples.

Exemple :  
- Commencer par les fondations, puis les murs, puis le toit.  
- En programmation, cette décomposition se fait grâce au "pseudo‑code" (ou LDA : Langage de Description d’Algorithmes).

---

# 🧩 Exemple simple d’algorithme

```
Algorithme Déplacement
Début
    Déplacement à droite
    Déplacement en haut
    Déplacement à droite
    Déplacement en haut
Fin
```

# 🔢 Les variables

Une variable contient une valeur que l’on peut lire ou modifier.
```
Variable
    déplacement ← 0
    score ← 0
```

# 🛠️ Les fonctions

Une fonction regroupe plusieurs actions réutilisables.
```
Fonction maj_déplacement_score(déplacement, score, point_de_déplacement)
Début
    déplacement ← déplacement + 1
    score ← score + (point_de_déplacement / déplacement)
Fin
```
# 🧭 Exemple complet avec variables + fonctions

```
Algorithme Déplacement

Variable
    déplacement ← 0
    score ← 0
Début
    Déplacement en haut
    maj_déplacement_score(déplacement, score, 25)

    Déplacement en haut
    maj_déplacement_score(déplacement, score, 25)

    Déplacement à droite
    maj_déplacement_score(déplacement, score, 70)

    Déplacement à gauche
    maj_déplacement_score(déplacement, score, 50 - 25)  // retour en arrière

    Déplacement en bas
    maj_déplacement_score(déplacement, score, 90 - 25)

    Déplacement en bas
    maj_déplacement_score(déplacement, score, 90 - 25)

    réinitialiser_score(score)
Fin
```

# 🧮 Types de variables

Les types les plus courants :

* Integer / Float : nombres
* String : texte
* Boolean : vrai / faux

Exemple :
```
nomDuJoueur ← "" : CHAINE
est_terminé ← Faux : BOOL

Début
    nomDuJoueur ← "Mickael"
    déplacementDépartArrivée(nomDuJoueur)
    est_terminé ← Vrai
Fin
```

# 📦 Les tableaux

Un tableau contient plusieurs valeurs.
Exemple : 
- suite de Fibonacci (base 0) → 0, 1, 1, 2, 3, 5, 8, 13

* Tableau statique : taille fixe
* Tableau dynamique : taille variable

# 🔍 Conditions et comparaisons

* Opérateurs : ==, >, <, >=, <=, !=

```
Variable
    positionArrivée = (x4, y3)
    positionJoueur = (x4, y3)
    nombreDeplacements = 5

Début
    Déplacement vers le haut
    Déplacement vers la droite
    Déplacement vers le haut
    Déplacement vers la droite

Si positionJoueur == positionArrivée
et nombreDeplacements <= 5
    afficher "niveau terminé"
Sinon
    afficher "Game Over"
Fin Si
```

# 🔁 Boucles

* while : quand on ne connaît pas le nombre d’itérations
* for : quand le nombre d’itérations est connu

# 🌳 Structures de données

* Arbre binaire
Relation : parent → enfant → feuille

Utilisé dans :
* Jeux vidéo 3D
* Routeurs Internet
* Bases de données
* Calculatrices

* Graphe
Données reliées entre elles (réseau routier, transport aérien…).
Permet de trouver le chemin le plus court.

# 🔃 Tri des données : tri à bulles
```
Algorithme Tri_a_bulles(tableau)

    taille ← Taille du tableau
    Pour i allant de taille - 1 jusqu’à 1
        Pour j allant de 0 jusqu’à i - 1
            Si tableau[j+1] < tableau[j]
                échanger(tableau[j+1], tableau[j])
            Fin Si
        Fin Pour
    Fin Pour
Fin
```

# ⏱️ Complexité algorithmique

La complexité mesure le temps ou la mémoire nécessaires à un algorithme.

* Complexité temporelle : temps d’exécution
* Complexité spatiale : mémoire utilisée
Notation Big O : notation standard (ex : O(n), O(n²), O(log n)…)

# 🔁 Récursivité : exemple Fibonacci
```
Algorithme fibonacci(n)

Début
    Si n <= 1
        Retourner 1
    Sinon
        Retourner fibonacci(n - 1) + fibonacci(n - 2)
    Fin Si
Fin
```
# ⚠️ Erreurs courantes en algorithmique

Voici les erreurs les plus fréquentes chez les débutants (et parfois même chez les développeurs expérimentés) :

* Confondre l’algorithme et le code
* Oublier d’initialiser les variables
* Créer des boucles infinies
* Mal gérer les indices de tableau (commencer à 1 au lieu de 0)
* Écrire des conditions trop complexes
* Ne pas décomposer suffisamment le problème
* Oublier les cas limites (tableau vide, division par zéro…)
* Confondre affectation (=) et comparaison (==)
* Ignorer la complexité algorithmique

Note: MAJ au 27 mars 2026