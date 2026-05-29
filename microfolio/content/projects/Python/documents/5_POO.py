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
