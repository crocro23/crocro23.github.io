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

