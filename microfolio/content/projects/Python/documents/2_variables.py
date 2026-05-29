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
