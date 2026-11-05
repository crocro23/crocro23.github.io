---
title: "Mon second cerveau avec Obsidian et Hermes"
date: "2026-11-05"
location: "Mordelles, France"
description: "Retour d’expérience sur l’association d’Obsidian, de la méthode PARA et de Hermes Agent"
type: "dev"
tags:
  - "Obsidian"
  - "Hermes Agent"
  - "Ollama"
  - "Gemma 4"
  - "IA locale"
  - "second cerveau"
  - "PKM"
  - "méthode PARA"
  - "gestion des connaissances"
  - "automatisation"
authors:
  - name: "Mickaël Crozon"
    role: "Auteur"
featured: true
---

# 🎯 Passer du stockage passif à l'intelligence augmentée.
**Si PARA organise l'information, Hermes l'active.**
## ⚙️ Guide d'installation rapide

Pour mettre en place cet écosystème et transformer mon ordinateur en centre de commande IA, voici les étapes.

### 1. Installer le moteur : Ollama
Avant tout, il y a besoin d'**Ollama**, le moteur qui permet de faire tourner des modèles d'IA localement.
- Je le télécharge sur [ollama.com](https://ollama.com).
- Je l'installe et je le lance.

### 2. Configurer le "Cerveau" (Le Modèle)
Dans l'interface de Hermes, je choisi un modèle. 
- **Recommandation :** Utiliser **Gemma 4 (9B)** pour ma carte graphique NVIDIA GeForce RTX 3070 Ti Laptop 8 Go
- Télécharger les modèles d'IA (si besoin)
- ollama pull gemma4:e4b
- ollama list

[Capture : Sélection du modèle dans l'interface Hermes](https://crocro23.github.io/microfolio/content/projects/second-cerveau/images/ollama-list.jpg)

### 3. Lancer Hermes Agent
Une fois Ollama actif : 
Télécharger l'application sur : https://hermes-agent.nousresearch.com/

 j'ouvre le terminal et je tape la commande  :
`ollama launch hermes-desktop`

[Capture : Lancement de Hermes via le terminal](https://crocro23.github.io/microfolio/content/projects/second-cerveau/images/connecting.jpg)

### 4. Connecter  Obsidian
Pour que Hermes puisse lire et écrire dans votre coffre, je lui donne-lui simplement le chemin d'accès lors de la première conversation (ex: *"Mon coffre Obsidian est dans C:\obsidian\MonCoffre"*).

---
## 📝 1. Introduction

L'idée d'un "Second Cerveau" n'est plus nouvelle. Pour beaucoup, c'est la promesse d'une extension numérique de notre mémoire, un endroit où chaque idée, chaque snippet de code et chaque réflexion est sauvegardé pour ne jamais être perdu. 

Mon installation était solide : un coffre synchronisé entre mon PC et mon smartphone, une structure rigoureuse pour trier mes ressources et mes archives, et la sécurité du format Markdown. C'était une bonne bibliothèque. 

Mais comme beaucoup d'adeptes du PKM (*Personal Knowledge Management*)...
-> Plus mon coffre grandissait, plus il devenait difficile d'en extraire une valeur immédiate sans passer des heures à fouiller dans mes propres dossiers.

C'est ici que tout a changé avec l'arrivée de Hermes. En lançant simplement la commande
`ollama launch hermes-desktop`

J'ai intégré un agent IA capable non seulement de lire mes notes, mais d'interagir avec elles. J'ai ainsi transformé ma bibliothèque statique en un système d'intelligence active. Voici comment je suis passé d'un simple stockage d'informations à un véritable partenaire de réflexion.

## 2. Le chaînon manquant : l'agent IA (Hermes)

Obsidian est pour moi un outil de stockage. Mais soyons honnêtes : même avec la méthode PARA, un coffre de notes reste, par nature, une structure statique. Pour retrouver une information, il faut se souvenir du nom du fichier, utiliser la recherche globale et, surtout, faire l'effort mental de synthétiser soi-même les informations éparpillées dans plusieurs notes.

C'est là que Hermes intervient comme le chaînon manquant. En ajoutant une couche d'intelligence agentique sur mes fichiers, je suis passé d'une **gestion de fichiers** à une **conversation avec mon savoir**.
#### L'interface naturelle : Dialoguer avec son savoir
Le changement le plus immédiat est l'abandon du `Ctrl + F` systématique. Au lieu de chercher "Architecture Projet X", je demande simplement à Hermes : *"Quelles étaient les contraintes techniques définies pour le projet "Qualité Logicielle et Tests" et comment s'articulent-elles avec mes notes sur "le métier de testeur logiciel" ?"*

Hermes ne se contente pas de me pointer vers un fichier ; il parcourt mon coffre, extrait les segments pertinents et me livre une réponse synthétisée. Le coffre n'est plus un endroit où l'on range des choses, c'est un interlocuteur.

#### De la donnée à la connaissance
Une IA classique (comme ChatGPT ou Claude) est limitée par sa fenêtre de contexte et son ignorance de vos données privées. Hermes, lui, a un accès direct et sécurisé à mon système de fichiers. 

Il transforme la **donnée brute** (une note de réunion rapide, un lien sauvegardé) en **connaissance exploitable**. Il peut analyser des tendances à travers mes notes, identifier des contradictions dans mes recherches ou me suggérer des pistes de réflexion que j'avais moi-même oubliées.

#### L'intégration native : L'agent qui agit
C'est ici que réside la vraie puissance : Hermes n'est pas qu'un moteur de recherche sophistiqué, c'est un **agent**. 

Là où un LLM classique s'arrêterait à *"Voici comment vous pourriez organiser vos notes"*, Hermes me répond : *"J'ai analysé vos notes de recherche sur Python, j'ai créé une nouvelle note de synthèse dans `031 QA et tests` et j'ai ajouté des liens vers vos projets en cours."*

L'agent peut lire, écrire, modifier et lier. Il devient le bibliothécaire personnel qui range, indexe et enrichit le coffre en temps réel, me libérant ainsi de la charge mentale de la maintenance pour me laisser me concentrer sur la création.

### 3. Le Workflow "Intelligence Active" (Le cœur du système)

Pour passer de la théorie à la pratique, on utilise un protocole strict appellé le "Workflow d'Intelligence Active". L'objectif est simple : ne plus jamais laisser une information entrer dans le  coffre Obsidian sans qu'elle soit vérifiée, structurée et connectée.
#### La Collecte Augmentée : De la recherche à la note durable
L'erreur classique en PKM est le "copier-coller" massif : on sauvegarde un article entier sans le traiter, et on ne le relit jamais. Avec Hermes, l'automatisation ce processus est faite via un workflow de recherche technique.

Désormais, quand je découvre un nouvel outil ou un concept, je ne crée pas la note moi-même. Je demande à Hermes de suivre ce cycle :

1. **Recherche & Collecte :** Hermes explore le web et extrait les données des sources officielles.
2. **Vérification :** Il croise les sources pour distinguer les faits des suppositions.
3. **Structuration :** L'information est injectée dans un template précis (Aperçu, Architecture, Dépendances, Setup, Limites, Sources).

Le résultat ? Une note qui n'est pas un simple brouillon, mais une ressource technique exploitable immédiatement, même six mois plus tard.

#### La Liaison Sémantique : Tisser la toile de connaissances
La force d'Obsidian réside dans ses liens `[[ ]]`. Mais créer ces liens manuellement demande une vigilance constante. Hermes agit ici comme un curateur sémantique.

Lorsqu'il crée ou modifie une note, je lui demande d'analyser mon coffre pour identifier des connexions invisibles. 
*Exemple :* En rédigeant une note sur la "Qualité logicielle", Hermes peut détecter que j’ai déjà des notes sur "Playwright", "Git et GitHub" et "Comprendre Internet - le Web et les technologies associées" et suggérer : *"J’ai ajouté des liens vers vos notes sur Playwright, Git et GitHub et le Web pour enrichir ce sujet."*

C'est ainsi que mon coffre cesse d'être une suite de dossiers pour devenir un véritable graphe de connaissances où chaque nouvelle information renforce les précédentes.

#### Synthèse et Transformation : Boucler la boucle
Le stade ultime du workflow est la transformation. Le savoir accumulé dans `030 Resource` ne doit pas rester dormant ; il doit servir à produire.

C'est exactement ce que nous faisons en ce moment même. Pour rédiger cet article, je n'ai pas reparti de zéro. J'ai demandé à Hermes d'analyser mes notes sur PARA, mon guide de base de connaissances et mes réflexions sur l'IA. 

L'agent a synthétisé ces éléments pour proposer un plan, puis a rédigé les sections en s'appuyant sur des faits réels présents dans mon coffre. On passe alors d'un cycle de **consommation** (lire $\rightarrow$ stocker) à un cycle de **création** (stocker $\rightarrow$ synthétiser $\rightarrow$ publier).

### 4. Exemples concrets (Use Cases)

Pour rendre tout cela tangible, voici comment ce système se traduit concrètement dans mon quotidien de développeur et de passionné de qualité logicielle.

#### Scénario 1 : La Veille Technologique sans friction
Imaginons que je tombe sur un article complexe concernant les nouvelles normes de l'ISTQB ou un outil d'automatisation des tests. 
- **Avant :** Je sauvegardais le lien dans mes favoris Chrome, ou je faisais un copier-coller rapide dans une note "À lire". L'information y restait souvent dormante.
- **Avec Hermes :** Je lui demande : *"Analyse cet article, vérifie les points clés et crée-moi une note structurée dans `031 QA et tests`."* 
Hermes extrait l'essentiel, vérifie la source et me livre une fiche technique propre. Je ne stocke plus un lien, je stocke une connaissance déjà traitée.

#### Scénario 2 : La mémoire projet instantanée
C'est le cas typique où l'on se dit : *"Je suis sûr d'avoir déjà résolu ce problème de code python il y a six mois, mais je ne sais plus où..."*
- **Avant :** Je passais 15 minutes à fouiller dans mes anciens dossiers de projets, en espérant tomber sur le bon fichier `.md` ou le bon snippet de code.
- **Avec Hermes :** Je demande : *"Retrouve la solution que j'avais implémentée pour cette erreur dans le code dans mes projets de 2024 et adapte-la à mon contexte actuel."* 
L'agent scanne mes archives, retrouve la solution exacte et me la propose avec une explication contextuelle. Mon expérience passée devient un actif immédiatement disponible.

#### Scénario 3 : La production de contenu assistée
La création de ce portfolio est l'exemple parfait. 
- **Le processus :** Au lieu de fixer une page blanche, j'ai utilisé mon coffre comme source de vérité. J'ai demandé à Hermes de lier mes notes sur la méthode PARA, mes réflexions sur l'IA et mes guides de base de connaissances pour en extraire une structure logique.
- **Le résultat :** Je ne rédige plus "à partir de rien", mais je "pilote" la synthèse de mes propres pensées. L'effort se déplace de la *recherche d'information* vers la *curation et le polissage* du message.

### 5. Conclusion

Le voyage vers un "Second Cerveau" efficace ne s'arrête jamais vraiment, car notre connaissance évolue chaque jour. Cependant, l'intégration d'un agent comme Hermes marque un tournant décisif dans la manière dont nous interagissons avec nos propres idées.

Pendant des années, le défi du PKM (*Personal Knowledge Management*) a été l'organisation : comment trier, comment nommer, comment classer ? 

Nous avons passé un temps considérable à construire des systèmes de rangement, pour finalement nous retrouver face à une bibliothèque si vaste qu'elle en devenait intimidante.

En passant d'une bibliothèque statique à un partenaire de réflexion, la question ne change plus. Il ne s'agit plus de savoir *comment organiser l'information*, mais *ce que nous pouvons créer avec elle*. 

L'intelligence artificielle, lorsqu'elle est couplée à un coffre de notes personnel et sécurisé, ne remplace pas la réflexion humaine. Au contraire, elle la libère. En nous déchargeant des tâches ingrates de gestion, de recherche et de synthèse brute, elle nous permet de nous concentrer sur ce qui a réellement de la valeur : la créativité, l'analyse critique et l'innovation.

Mon second cerveau n'est plus un simple disque dur externe ; c'est un moteur de pensée augmentée.

---
## 🔗 Liens et Références
- Source portfolio : https://crocro23.github.io/projects/Obsidian/
- [Méthode PARA]([Méthode PARA : Comment organiser sa vie entière ?](https://everlaab.com/methode-para-comment-organiser-sa-vie-entiere/))
- 🎥 [Tuto Hermes APP - Utilisation 100% Gratuite](https://www.youtube.com/watch?v=1ccrMaPQYhs)
- [Hermes Agent : Le Guide le plus Complet pour Débutants (No Code) ! - YouTube](https://www.youtube.com/watch?v=c-ggN7Z5-vw)
- [Hermes Desktop et Gemma 4 12b, système IA local et gratuit ! - YouTube](https://www.youtube.com/watch?v=-RY04WLarMI&t=3367s)
- [Comment créer le second cerveau IA ULTIME pour votre agent Hermes - YouTube]( https://www.youtube.com/watch?v=wvYAuHfJRo0)
- [The Content You Shouldn't Publish | by Benneth Ogbuagu | Profitable Minds | Sep, 2026 | Medium](https://medium.com/profitable-minds/the-content-you-shouldnt-publish-bb63e050e0b0?sk=8d0a7601b1fcc7652f32d221dccce890)

---

_Note : MAJ du 5 novembre 2026_