---
title: "Selenium – Guide complet pour débuter et automatiser vos tests"
date: "2026-04-19"
location: "Mordelles, France"
description: "Installation, enregistrement, WebDriver, Python, actions avancées, CI/CD et bonnes pratiques avec Selenium."
type: "QA"
tags: ["selenium", "webdriver", "python", "automation", "qa", "tests-e2e", "selenium-grid", "pytest", "ci-cd"]
authors:
  name: "Mickaël Crozon"
  role: "Auteur"
featured: true
---

# 🧪 Selenium : composants principaux

- **[Selenium WebDriver]** — pilote un navigateur.
- **[Selenium IDE]** — enregistre les actions utilisateur.
- **[Selenium WebDriver API** — exécute les scripts.
- **[Selenium Grid]** — exécute les tests sur plusieurs machines (nodes).

---

# 📝 Plan de tests

Créer un plan de tests à partir :

- User Stories  
- Spécifications fonctionnelles

**Types de cas :**

- Cas usuels  
- Cas extrêmes  
- Cas d’erreur  

## Méthode AAA

- **Arrange** — création du contexte  
- **Act** — déclenchement de l’action  
- **Assert** — vérification du résultat  

> Un test doit être **indépendant** des autres.

---

# 🎥 Selenium IDE

Téléchargement :  
https://github.com/SeleniumHQ/selenium-ide/releases/download/v4.0.1-beta.14/Selenium-IDE-Setup-4.0.1-beta.14.exe

## Exemple : projet *Fruits*

1. Créer un projet  
2. Tests → **Record**  
3. Naviguer sur : https://labasse.github.io/fruits/  
4. Cliquer sur *Calendrier → Janvier*  
5. Arrêter l’enregistrement  

### Problème rencontré

Chrome affiche un message **“Tout accepter”** → il faut :

- Descendre en bas  
- Cliquer sur **Tout accepter**  

### Assertions

- Assertion sur **Amande sèche** → OK  
- Assertion sur **tout le tableau** → KO  

### Recherche

- Recherche “raisin”  
- Effacer ne suffit pas → il faut cliquer sur **Accueil**

---

# 🧰 Selenium WebDriver + Python

## Installation du ChromeDriver

Téléchargement :  
https://storage.googleapis.com/chrome-for-testing-public/149.0.7795.2/win64/chromedriver-win64.zip

Ajouter le dossier dans les **variables d’environnement Windows**.

## Installation Python

```
pip install pytest
pip install selenium
```

Créer un environnement virtuel :
```
python -m venv .venv
.venv\Scripts\activate
python -m ensurepip --upgrade
```
## 🔍 Localisation des éléments

## Méthodes find_element :

- class_name → liste
- css_selector → input
- id → identifiant unique
- link_text / partial_link_text → liens
- name → formulaire
- tag_name → body, header, section…

Exemple :
```
return driver.find_element(By.CSS_SELECTOR, "input[type=search]")
```
## ♻️ Code mutualisé
```
def ecrire_recherche(texte):
    recherche = find_recherche()
    recherche.click()
    recherche.send_keys(texte)
    return recherche

def test_recherche_fructueuse():
    ecrire_recherche("ana")
    assert_nombre_cartes(2)

def test_recherche_infructueuse():
    ecrire_recherche("radis")
    assert_nombre_cartes(0)

def test_recherche_raz():
    recherche = ecrire_recherche("radis")
    for i in range(5):
        recherche.send_keys(Keys.BACKSPACE)
    assert_nombre_cartes(11)
```
## ⏳ Attendre le chargement
```
WebDriverWait(driver, 6).until(lambda d: recherche.get_attribute("value") != "abri")
assert find_recherche().get_attribute("value") == "Abricot"
```
## 📤 Upload de fichier
```
def test_televersement_fond():
    fond = driver.find_element(By.ID, "fond")
    fond.send_keys(path.abspath("banner.jpg"))
    assert "data:image/jpeg;base64" in driver.find_element(By.ID, "canevas").get_attribute("style")
```
## 🖱️ Glisser-déposer
```
def test_glisser_deplacer_fruit_sur_canevas():
    fruit = driver.find_element(By.ID, "0-0")
    canevas = driver.find_element(By.ID, "canevas")

    actions = ActionChains(driver)
    actions.drag_and_drop_by_offset(
        fruit,
        canevas.rect['x'] + canevas.rect['width']/2 - fruit.location['x'],
        canevas.rect['y'] + canevas.rect['height']/2 - fruit.location['y']
    ).perform()

    portrait = driver.find_elements(By.CSS_SELECTOR, "div.fruit")
    assert len(portrait) == 1
    assert "cur" in portrait[0].get_attribute("class")
```
## 📋 Presse-papier (pyperclip)
```
def test_coller_titre():
    pyperclip.copy("Hommage à Arcimboldo")
    titre = driver.find_element(By.NAME, "titre")
    titre.send_keys(Keys.CONTROL, "v")
    assert titre.get_attribute('value') == "Hommage à Arcimboldo"
```
## 📸 Capture d’écran
```
jour = datetime.datetime.now().strftime("%A")
driver.save_screenshot(f"screenshot_{jour}.png")
```
## 🔄 Navigation
```
def test_aller_retour_dessin_vide():
    page.glisser_deplacer("0-0")
    driver.get("https://labasse.github.io/fruits")
    page.recharger()
    assert len(page.fruits_du_portrait()) == 0
```
## 🍪 Cookies
```
def test_cookie_taille():
    driver.add_cookie({"name": "taille", "value": "3"})
    page.recharger()
    assert page.get_texte_taille() == "3"
```
## 🌐 Selenium Grid & alternatives

### Alternatives :

Selenoid

SauceLabs

BrowserStack

TestMu AI

## ⚠️ Exceptions navigateurs
```
from selenium.common.exceptions import NoSuchElementException

def test_menu_cuisiner():
    try:
        driver.find_element(By.LINK_TEXT, "Cuisiner").click()
    except NoSuchElementException:
        driver.find_element(By.CLASS_NAME, "navbar-toggler").click()
        WebDriverWait(driver, 10).until(
            cond.element_to_be_clickable((By.LINK_TEXT, "Cuisiner"))
        ).click()
    assert "#cuisiner" in driver.current_url
```
## 📱 Tests smartphone
```
from selenium.webdriver import Chrome, ChromeOptions
options = ChromeOptions()
options.add_experimental_option("mobileEmulation", {
    "deviceName": "Iphone12 Pro"
})
```
## 🔧 CI/CD avec pytest

### Fichier smartphone.ini :
```
[pytest]
selenium_driver=chrome
selenium_mobile=Iphone12 Pro
```

### Fichier conftest.py :
```
def pytest_addoption(parser):
    parser.addini("selenium_driver", default="chrome")
    parser.addini("selenium_mobile", default="Iphone12 Pro")
```
## 📚 Pour aller plus loin

- [L'essentiel de Selenium](https://www.linkedin.com/learning/l-essentiel-de-selenium)
- [The 2026 SDET Survival Guide](https://medium.com/codetodeploy/the-2026-sdet-survival-guide-why-im-moving-my-cohorts-away-from-selenium-and-toward-these-8-f2e0a72bb86f)
- [Lightweight Screen Recorder for Selenium Tests](https://anivaz.medium.com/building-a-lightweight-screen-recorder-for-selenium-tests-no-dependencies-no-headaches-116cf1884ccf)
- [Tutoriels Selenium](https://www.youtube.com/watch?v=joSTRn_fAEc&list=PLTRV3JymYE9eIEIDS1v6OZNUPNUYmehsy&index=1)

_Note : MAJ du 29 mai 2026_