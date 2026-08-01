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
