# Abécédaire Aléatoire

Cette application est développée pour animer, en théâtre d'impro, une reprise
de style "Abécédaire" aléatoire, où la contrainte est de commencer chaque 
réplique par une lettre de l'alphabet dans un ordre aléatoire.

Cette application est destinée au MC (Maitre de Cérémonie) pour faire défiler 
aléatoirement les lettres que les comédiennes et comédiens doivent utiliser.

## Utilisation

1. **Démarrer** : Cliquez sur le bouton "Démarrer" sur l'écran d'accueil
2. **Naviguer** : Cliquez n'importe où sur l'écran pour afficher la lettre suivante, 
ou utiliser les flèches gauche et droite du clavier
3. **Recommencer** :
   - Utilisez le bouton "Recommencer" fixe en bas à droite pendant la session
   - Ou cliquez sur "Recommencer" à la fin de la séquence
1. **Aide** : Cliquez sur le bouton "Aide" pour afficher l'aide

## Complément sur les fonctionnalités

- Un bouton "Test" pour tester l'affichage des lettres
- Les lettres sont mélangées selon l'algorithme de Fisher-Yates
- Lettres affichées en très grand format pour une visibilité maximale
- Un compteur de progression affiche le nombre de lettres déjà vues (ex: 5/26)

## Structure du projet

```
impro-abecedaire-random/
├── index.html       # Structure HTML de l'application
├── styles.css       # Styles et mise en page
├── script.js        # Logique de l'application
└── README.md        # Ce fichier
├── CLAUDE.md        # Instructions pour Claude Code
├── SPECS.md         # Spécifications initiales du projet
```

## Détails techniques

### Technologies utilisées

- **HTML5** : Structure de l'application
- **CSS3** : Styles et animations
- **JavaScript vanilla** : Logique pure, sans dépendances

### Caractéristiques techniques

- **Aucune dépendance** : Pas de frameworks ou bibliothèques externes
- **Pas de build** : Peut être ouvert directement dans un navigateur
- **Algorithme Fisher-Yates** : Garantit un mélange uniforme et aléatoire
- **Police personnalisée** : Utilise "Patua One" de Google Fonts pour un affichage lisible
- **Responsive** : S'adapte à différentes tailles d'écran
- **États gérés** : Quatre écrans distincts (accueil, lettres, fin, test)

## Comment démarrer

1. Clonez ou téléchargez ce dépôt
2. Ouvrez le fichier `index.html` dans votre navigateur web
3. C'est tout ! Aucune installation ou compilation nécessaire

### Ou en ligne de commande

Ouvrir directement dans le navigateur par défaut (macOS) :

```bash
open index.html
```

Ou avec Python pour un serveur local :

```bash
python3 -m http.server 8000
# Puis ouvrez http://localhost:8000 dans votre navigateur
```

## Licence

Ce projet est un projet personnel open source. Libre d'utilisation et de modification.