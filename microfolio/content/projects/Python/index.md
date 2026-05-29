---
title: "Introduction à Python et écosystème complet"
date: "2026-04-17"
location: "Mordelles, France"
description: "Bases du langage Python, structures, POO, packages, bases de données, tests et ressources avancées."
type: "dev"
tags: ["python", "programmation", "poo", "packages", "mysql", "pytest", "unittest", "doctest", "csv", "json", "big-o", "structures-de-donnees", "automation"]
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: true
---

# 🐍 Introduction à Python

Python possède de nombreuses bibliothèques et fait partie des **langages majeurs**.

- Il **ne nécessite pas de compilation**, contrairement à C, C++, etc.
- Il est utilisé avec :
  - **Django**
  - La maintenance système / tâches planifiées
  - Les **algorithmes d’intelligence artificielle**

### Limites
- Python est **lent**
- Il est **case sensitive**
- Les **boucles infinies** sont faciles à créer

---

## ➗ Commandes mathématiques en Python

Quelques exemples :
```
# Ceci est ma 1ère ligne de code
print("hello world")
print(2+2)
print(8-2)
print(6*7)
print(2**3) # deux puissance trois
print(5**2) # cinq puissance deux
print(7/2)
print(7//3) # quotient de la division
print(7%3) # reste de la division
print(help(print))
```

## 📦 Types de données en Python

- Numériques : entier, flottant (avec des points), complexe
- Dictionnaire
- Booléen
- Set
- Séquences : chaîne, liste, tuple

## 🔤 Variables en Python

```
nom_variable = 3
print(nom_variable)
print(type(nom_variable)) # variable de type integrer

a = "Hello World" # variable de type texte
print(type(a))
b = 1.23 # variable de type flottant
print(type(b))
c = 4,56 # Type de séquence de type tuple !
print(type(c))

d = 2+3j # variable de type complexe, en Python on utilise j et non i par convention.
print(d)
print(type(d))

e =a[0] # Le premier caractère de "Hello World"
print (e)
f = a[1:len(a)] # Les autres caractères de "Hello World"
print (f)
g= a.capitalize() # La variable est modifiée en appliquant la mise en forme avec une majuscule au début
print (g)

h= True
i = not (h)
print (h,i) # Un boolén à Vrai et un booléen à Faux

j = 10
print(j <15 and j <20)
print(j <5 or  j <20) # l'utilisation de "or" retourne l'opération à Vrai

liste = [7,4,1, "hello", [2,3]] # Une liste contient un peu tout
print(liste)
#liste.sort() # Mais on ne peut pas la trier du coup
liste = [7,4,1, 2,3]; liste.sort(); print(liste)                # on peut trier les chiffres
liste = ["a","z","e","r","t","y"]; liste.sort(); print(liste)   # on peut trier les lettres
liste.extend (["hi","hello"]); print(liste) # On peut rajouter des éléments à la liste

print()
Tuple = (7,4,1, "hello", [2,3,4]) # Un tuple contient un peu tout
print(Tuple)
# Tuple.extend (["hi","hello"]); print(Tuple) # Un tuple est figé, on peut pas y rajouter des éléments

print()
#Set = {7,4,1, "hello", [2,3]} # Un Set ne contient pas un peu tout!
Set = {7,4,1,"le texte de mon Set",2,3,4,5}  # Et il réordonne le texte sans les doublons !
print(Set)
print("le texte de mon Set" in Set)
print("texte" in Set) # La recherche dans un ensemble fonctionne uniquement avec l'élément complet !

print()
NbJourparMois = {"Jan" : 31, "Fev" : 28, "Mar" : 30} # Le dictionnaire est initialisé
print(NbJourparMois)
NbJourparMois['Fev'] = 29 # Il y a 29 jours en février les années bixestilles
NbJourparMois['Avr'] = 30 # Le dictionnaire contient une nouvelle valeur
print(NbJourparMois)
print(NbJourparMois.keys())
print(NbJourparMois.values())
```

## 🗂️ Dictionnaires

- Un dictionnaire associe une clé à une valeur.
```
Nbjourparmois = {"Jan" : 31, "Fev" : 28, "Mar" : 30} # Le dictionnaire est initialisé
print(Nbjourparmois )
Nbjourparmois['Fev'] = 29 # Il y a 29 jours en février lors d'une année bissextile
Nbjourparmois['Avr'] = 30 # Le dictionnaire contient une nouvelle clé ainsi qu'une valeur
print(Nbjourparmois)
print(Nbjourparmois.keys())
print(Nbjourparmois.values())
```

## 🔀 Conditions

Les conditions ci-dessous sont disponibles : 
if             => Il ne se passe rien si la condition n'est pas respectée
if / else        => Il va se passer deux choses différentes
if / elif / else    => Il y a plusieurs possibilités dans ce cas 


## 🔁 Boucles

Les boucles for balayent un ensemble de valeurs
Attention à l’indentation
Penser à inclure un if pour sortir
```
Dictionnaire = {"un" : 1, "deux" : 2, "trois" : 3}
for key, value in Dictionnaire.items():
    print("clée", key, "=> valeur =" , value)

print()

Liste = ["Zéro", "Un" , "Deux", "Trois"]
for choses in Liste :
    if choses == "Deux":
        break
        #print ("On s'arrête si choses = Deux")
    print(choses)

print()

Liste = ["Zéro", "Un" , "Deux", "Trois"]
for choses in Liste :
    if choses == "Deux":
        continue
        #print ("On ignore le if si choses = Deux")
    print(choses)

x = 1
while x<4 : # On va s'arrêter à 4!
    print("x à la valeur:" , x)
    x = x+1
    print("la valeur de x est maintenant:", x)


print()

def donne_age(prenom: str) -> int | str:
    ages_connus = {
        "Mickael": 47,
        "Sophie": 32,
        "Pierre": 28
    }
    return ages_connus.get(prenom, "un age inconnu!")
for prenom in ["Mickael", "Sophie", "Bob"]:
    age = donne_age(prenom)
    print(f"{prenom} a {age}")

print()

import _mon_utilitaire
_mon_utilitaire.DireBonjour()  # Affiche: Bonjour
nombre = 10
resultat = _mon_utilitaire.DivisionPar2(nombre)
print(f"{nombre} divisé par 2 = {resultat}")  # Affiche: 10 divisé par 2 = 5.0

print()

def sommes(*args):
    x=0
    for i in args:
        x =+i
        print("Ma somme totale =", x)

sommes(1,2,3) # Il est préférable de ne pas se limiter en arguments

print()

Liste = [0,1,2,3]
print(list(filter(lambda x:x>1, Liste))) # La lambda retourne les valeurs plus viste qu'une boucle
```

## 🧱 Programmation Orientée Objet (POO)

- Étapes :

  1. Identifier les objets
  2. Créer la classe
  - Définir les attributs (caractéristiques)
  - Définir les méthodes (actions)
  5. L’objet communique avec l’interface

## Notion de classe
  1. Gère données + méthodes
  2. Héritage
  3. Remplacement d’opérateur
  4. Réutilisation du code
  5. Regroupe des fonctions
  
```
from operator import truediv
from symtable import Class

class Somme:
    "Définir une somme"
    Somme = 1
    print("La classe Somme =", Somme)

print()

class MaClasse:
    "un exemple de classe"
    MaVariable=1
    def somme (self, a, b):
        return a+b

print("MaClasse.MaVariable =", MaClasse.MaVariable)
print("MaClasse.somme =" , MaClasse.somme(9, 4,6)) # Le self n'a pas d'intérêt dans ce cas
MonObjet = MaClasse()
print("MonObjet.MaVariable=", MonObjet.MaVariable)
print("MonObjet.somme=", MonObjet.somme(4,6))

print()

# _init_ est à appeler une fois par classe
class Salarié(object): # La classe Object est la classe de base en Python
    def __init__(self, nom, numsalarié):
        self.nom  = nom
        self.numsalarié = numsalarié

    def afficher(self):
        print("Nom :", self.nom)
        print("Numéro salarié :", self.numsalarié)

Données = Salarié("Crozon", "gs5970")
Données.afficher()

print()

class Véhicule:
    def __init__(self):
        self.est_allumé = True
        self.vitesse = 10
    def obtenir_vitesse(self):
        return self.vitesse
    def deplacement(self):
        if self.est_allumé and self.vitesse >0:
            print("Le véhicule se déplace")

v = Véhicule()
print(v.deplacement())

class VéhiculeMaritime(Véhicule): # Içi la classe enfant de "class Véhicule"
    def naviguer(self):
        print("le véhicule navigue")
    def deplacement(self):
        if self.est_allumé and self.vitesse >0:
            self.naviguer()

vm = VéhiculeMaritime()
print(vm.deplacement())
```

## 📦 Packages Python

Un package contient :

- __init__.py
- Plusieurs modules
- Packages connus : Pandas, BeautifulSoup, Numpy, Requests…
- Installation :
```
pip install pandas
import pandas as pd
```

## 🗄️ Connexion à MySQL

Télécharger : https://dev.mysql.com/downloads/installer/
Installer la configuration développeur
Importer la base Chinook : https://github.com/lerocha/chinook-database

- Vérification SQL
```
SHOW DATABASES;
USE Chinook;
SHOW TABLES;
SELECT * FROM Album LIMIT 20;
```
```
# pip install mysql-connector-python
# => Successfully installed mysql-connector-python-9.6.0
#from urllib.request import localhost

import  mysql.connector

db = mysql.connector.connect(
    host="localhost" ,
    user="mickael",
    password="mickael",
    database="Chinook"
)

curser = db.cursor()
curser.execute('select * from album')
resultat = curser.fetchall()
print(resultat)
print()
```

- Paquetages utiles :
sqlalchemy → MySQL
sqlite3 → SQLite
psycopg2 → PostgreSQL
pymongo → MongoDB
redis → Redis
cx_Oracle → Oracle
pyodbc → SQL Server
MariaDB → MariaDB
elasticsearch → Elasticsearch

## 📥 Import CSV & JSON

Exemples de fichiers :
https://github.com/prasertcbs/basic-dataset/blob/master/Employee%20data.csv
https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4

```
# pip install pandas
import pandas as pd
dataset = pd.read_csv(r"C:\Users\gs5970\Downloads\Employee_data.csv")
print(dataset)
print()

import json
with open(r"C:\Users\gs5970\Downloads\Film.JSON") as films:
   dataset = json.load(films)
for nb_films in dataset:
    print(nb_films)
print()

#pip install openpyxl
import pandas as pd
dataset = pd.read_excel(r"C:\Users\gs5970\Downloads\salon-documation-exposants.xlsx")
print(dataset)
```

🧪 Tests en Python

- Framework de tests pytest : 

```
def addition(x):
    return x + 2

#pip install pytest
import pytest

#test_addition
resultat = addition(2)
assert resultat == 4, "résultat != 4"
resultat = addition(3)
#assert resultat == 4, "résultat != 4"
"------------------------------------"
```
- Framework unitest

7_tests_person.py
```
import unittest

#test_Person
class Testing(unittest.TestCase):
    def test_string(self):
        a = 'some'
        b = 'some'
        self.assertEqual(a, b)

    def test_boolean(self):
        a = True
        b = True
        self.assertEqual(a, b)

if __name__ == '__main__':
    unittest.main()

"""============================= test session starts =============================
collecting ... collected 2 items

7_tests_person.py::Testing::test_boolean PASSED                          [ 50%]
7_tests_person.py::Testing::test_string PASSED                           [100%]

============================== 2 passed in 0.02s =============================="""
```
```
class Person:
    name = []

    def set_name(self, user_name):
        self.name.append(user_name)
        return len(self.name) - 1

    def get_name(self, user_id):
        if user_id >= len(self.name):
            return 'There is no such user'
        else:
            return self.name[user_id]

if __name__ == '__main__':
    person = Person()
    print('User Abbas has been added with id ', person.set_name('Abbas'))
    print('User associated with id 0 is ', person.get_name(0))

print()
```
- Framework doctest

7_tests_addition.py
```
def addition(a, b):
    """
    Additionne deux nombres.
    
    >>> addition(2, 3)
    5
    >>> addition(-1, 1)
    0
    >>> addition(10, 20)
    30
    """
    return a + b
```
```
import doctest
doctest.testfile("7_tests_addition.py")
print()
```

# 📚 Pour aller plus loin

## 🎓 Bases / Apprentissage Python

- [L'essentiel de Python](https://www.linkedin.com/learning/l-essentiel-de-python/)
- [Apprendre Python – Guide pour débutants](https://www.it-connect.fr/apprendre-python-guide-pour-debutants/)
- [LearnPython.org – String Formatting](https://www.learnpython.org/en/String_Formatting)
- [Cours Python complet](https://python.developpez.com/cours/apprendre-python3/?page=page_4#)
- [Livre Python (HE-ARC)](https://he-arc.github.io/livre-python/index.html)
- [Python Tutor (visualisation)](https://pythontutor.com/visualize.html#mode=edit)
- [Documentation officielle Python](https://docs.python.org/fr/3/library/functions.html#open)

---

## 🤖 AI / Machine Learning / Data

- [Machine Learning with Python (MIT - edX)](https://www.edx.org/learn/machine-learning/massachusetts-institute-of-technology-machine-learning-with-python-from-linear-models-to-deep-learning)
- [Python for Data Science (IBM - edX)](https://www.edx.org/learn/python/ibm-python-basics-for-data-science)
- [CS50 AI with Python (Harvard)](https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python)
- [5 AI Projects You Can Build This Weekend](https://plainenglish.io/python/5-ai-projects-you-can-build-this-weekend-with-python-from-beginner-friendly-to-advance)
- [Kaggle Learn Python](https://www.kaggle.com/learn/python)
- [NVIDIA Python Courses](https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-AC-02+V1)

---

## ⚙️ Automatisation / Scripts / DevOps

- [Google IT Automation with Python](https://coursya.com/product/coursera/google-it-automation-with-python-professional-certificate/)
- [Python Automation Scripts](https://www.tecmint.com/python-automation-scripts/)
- [18 Useful Python Automation Scripts](https://www.clcoding.com/2025/02/18-insanely-useful-python-automation.html)
- [Admin Scripts (Python Guide)](https://docs.python-guide.org/scenarios/admin/)

---

## 🧱 Frameworks / Web / Scraping

- [Flask Tutorial](https://stahe.github.io/python-flask-sept-2020/)
- [Web Scraping Tutorial](https://www.geeksforgeeks.org/python/python-web-scraping-tutorial/)
- [Botasaurus Framework](https://korben.info/botasaurus-framework-python-rend-cloudflare-aussi.html)

---

## 🛠️ Outils / Librairies / Écosystème

- [10 Tools Python Programmers Should Learn](https://dev.to/javinpaul/10-tools-python-programmers-can-learn-in-2022-49ll)
- [Interesting Python Modules](https://www.geeksforgeeks.org/python/10-interesting-modules-in-python-to-play-with/)
- [CuteCharts (visualisation)](https://github.com/cutecharts/cutecharts.py)
- [Anaconda Learning](https://www.anaconda.com/learning)
- [Microsoft Python Dev Environment](https://learn.microsoft.com/fr-fr/windows/dev-environment/python?tabs=winget)

---

## 🖥️ GUI / Interfaces

- [Alternatives à Tkinter](https://python.plainenglish.io/stop-recommending-tkinter-use-these-python-gui-tools-instead-d3a836a2524a)
- [GUI avec Guizero](https://korben.info/gui-python-guizero.html)

---

## 📊 Data / CSV / Pandas

- [Manipuler des fichiers CSV en Python](https://www.it-connect.fr/lire-ecrire-et-manipuler-un-fichier-csv-en-python/)
- [Tutoriel Pandas](https://egallic.fr/Enseignement/Python/pandas.html?_sm_pdc=1&_sm_rid=j3f0rVnHH0RWjv7qS035W7WqPMW3J7rVzJDvJ32)

---

## 🧠 Concepts avancés / Bonnes pratiques

- [24 Key Concepts for Mastering Python Functions](https://medium.com/better-programming/24-key-concepts-to-know-for-mastering-python-functions-9cba097b29b3)
- [Astuces Python](https://korben.info/astuces-python.html)
- [Formatage de texte en Python](https://blent.ai/blog/a/le-formatage-de-texte-en-python)
- [Qualités d’un développeur Python](https://www.mediavenir.fr/qualites-cles-pour-un-developpeur-python-accompli/)

---

## 🎥 Vidéos YouTube

- [Understanding Python; Lesson 40 - Gooey (GUI)](https://www.youtube.com/watch?v=76OZ8Mzqr9I)
- [🤖Créez Votre Assistant Vocal en Python🐍](https://www.youtube.com/watch?v=owt38i7cxW8)
- [Des interfaces graphiques modernes avec Python](https://www.youtube.com/watch?v=jya748svA7A)
- [Apprendre Python avec 3 Projets FUN (Computer Vision)](https://www.youtube.com/watch?v=r0E2GJrGFxk)
- [APPRENDRE PYTHON DE A à Z](https://www.youtube.com/watch?v=LamjAFnybo0)
- [Build A Modern Python GUI Project | Step by Step Tutorial](https://www.youtube.com/watch?v=NI9LXzo0UY0)
- [Advanced Python](https://www.youtube.com/watch?v=KsSny74ugPM)
- [Full Course Python](https://www.youtube.com/watch?v=sOAZpHDEdkg&t=34104s)

---

## 🌐 Plateformes d’apprentissage

- [FreeCodeCamp Python](https://www.freecodecamp.org/learn/python-v9/)
- [FUN MOOC Python](https://www.fun-mooc.fr/fr/cours/apprendre-a-coder-avec-python/)
- [LabEx Python Course](https://labex.io/courses/quick-start-with-python)
- [Python Online Compiler](https://domsignal.com/python-online-compiler)

---

## 💬 Communauté

- [Reddit r/learnpython](https://www.reddit.com/r/learnpython/)

_Note : MAJ du 17 avril 2026_
