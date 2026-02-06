# ✈️ F3F Manager (v5.7)

**L'outil de poche ultime pour les pilotes de planeur de compétition F3F et VDP.**
Application générée par IA

F3F Manager est une **Progressive Web App (PWA)** conçue pour calculer instantanément la répartition idéale du ballast (Laiton, Plomb, Tungstène) en fonction des conditions de vent, tout en garantissant un Centre de Gravité (CG) parfait.

🔗 **[Accéder à l'application ici](https://f3f-manager.netlify.app/)**

---

## ✨ Fonctionnalités Principales

* **📱 100% Hors-Ligne :** Conçue pour fonctionner au sommet des montagnes sans aucune connexion internet (via Service Worker).
* **⚖️ Calculateur de Charge :** Déterminez le poids cible selon le vent (m/s) et le facteur de charge souhaité (%).
* **🪄 Optimisation Automatique ("Baguette Magique") :** Un algorithme remplit intelligemment vos soutes pour atteindre le poids cible sans jamais dépasser vos tolérances de centrage.
* **📏 Gestion Précise du CG :** Visualisation en temps réel de l'impact du ballast sur le centrage.
* **👃 Soute Nez Manuelle :** Gestion indépendante du plomb de nez (bras de levier) pour affiner le CG.
* **📓 Journal de Vol :** Enregistrez vos chronos, réglages et sensations après chaque vol. Export CSV disponible.
* **🔧 Garage Virtuel :** Gérez une flotte illimitée de planeurs avec leurs caractéristiques propres (dimensions, soutes, stocks de gueuses).

## 🚀 Installation (PWA)

L'application s'installe comme une application native sur votre téléphone :

### Sur iPhone (iOS)
1. Ouvrez le lien dans **Safari**.
2. Appuyez sur le bouton **Partager** (carré avec une flèche vers le haut).
3. Sélectionnez **"Sur l'écran d'accueil"**.

### Sur Android
1. Ouvrez le lien dans **Chrome**.
2. Appuyez sur les 3 petits points (menu).
3. Sélectionnez **"Installer l'application"** ou **"Ajouter à l'écran d'accueil"**.

---

## 🛠️ Technique

Ce projet est réalisé en **Vanilla HTML/CSS/JS**. Aucune compilation, aucun framework lourd (pas de React/Vue/Angular), ce qui garantit :
* Une légèreté extrême.
* Une modification facile par n'importe qui.
* Une compatibilité maximale.

### Structure des fichiers
* `index.html` : Contient toute la structure, le style (CSS) et la logique (JS) de l'application.
* `sw.js` : Le Service Worker qui gère la mise en cache pour le mode hors-ligne.
* `manifest.json` : Fichier de configuration pour l'installation sur mobile.

---

**Auteur :** Passionné de F3F & Tech.
**Licence :** MIT
