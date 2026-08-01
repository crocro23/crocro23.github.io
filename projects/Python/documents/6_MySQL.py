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