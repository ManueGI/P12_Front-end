# Projet HRnet — Plan de conversion jQuery → React

Ce document récapitule les tâches à réaliser pour la conversion de l'application HRnet (jQuery) en React, les critères d'évaluation, le scénario, les livrables attendus, et une première mise en place des pages et composants (placeholders qui affichent uniquement leur nom pour l'instant).

## Contexte

WealthHealth utilise une application interne, HRnet, écrite en jQuery. Le but est de convertir l'application en React, réduire la dette technique et remplacer les plugins jQuery (sélecteur de date, fenêtre modale, menus déroulants, tables) par des composants React.

## Critères d'évaluation (résumé)

- Rapports de performance Lighthouse pour l'application jQuery (avant) et l'application React (après), exportés en JSON.
- Rapports contenant : temps de chargement des pages, appels réseau pendant l'exécution, et indications visuelles via LightHouse.
- Repos GitHub séparés : une repo pour HRnet en React, une repo pour le composant React converti (publié sur npm ou GitHub Packages).
- Code écrit en React (paradigme fonctionnel, composants fonctionnels), pas de classes.
- L'app React doit permettre : créer un employé (Create Employee) et lister les employés (Employee List).
- Remplacer au moins un plugin jQuery par un composant React écrit par vous (les 3 autres peuvent être développés ou importés si manque de temps).
- Utiliser un système de gestion d'état (pas localStorage pour la logique principale).
- Documentation : Readme du composant publié, commentaires sur les props, package.json complet.

## Scénario et objectifs

- Convertir l'ensemble du projet HRnet en React (pages principales : Create Employee, Employee List).
- Choisir UN plugin jQuery parmi : DatePicker, Modal, Dropdown, DataTable et le convertir en composant React.
- Remplacer les autres plugins par composants React (faits maison ou importés).
- Mesurer les performances (Lighthouse) avant et après conversion — produire des fichiers JSON et analyser si la performance s'améliore.

## Contraintes et recommandations

- Écrire des composants fonctionnels (hooks si nécessaire). Éviter les classes.
- Modulariser le code : composants petits et réutilisables.
- Tests manuels suffisants ; si possible, ajouter des tests unitaires pour les composants critiques.
- Faire un build de l'application avant exécution d'un audit Lighthouse (mode production).

## Livrables attendus

1. Représentation complète de HRnet en React (repo GitHub).
2. Repo séparé pour le composant React converti (publié sur npm ou GitHub Packages).
3. Rapports Lighthouse (JSON) : avant (jQuery) / après (React) — fichiers JSON importables dans LightHouse.
4. Documentation : `README.md` du projet et README du composant (prérequis, installation, usage, props documentées).

## Plan d'action (tâches principales)

- Convertir les pages : Create Employee, Employee List (React pages).
- Mettre en place un store/gestion d'état global (ex. Context + reducer ou Redux).
- Créer les composants React suivants (placeholders initiaux) : DatePicker, Modal, Dropdown, DataTable.
- Choisir 1 plugin jQuery à convertir intégralement et implémenter son composant React.
- Générer builds et exécuter audits Lighthouse (exporter JSON).
- Publier le composant React sur npm / GitHub Packages (package.json, versioning, README, commentaires sur props).

## Pages et composants (placeholder — uniquement noms pour l'instant)

Pages (fichiers créés) :

- `my-react-app/src/pages/CreateEmployee.jsx` — page Create Employee (affiche « Create Employee Page »)
- `my-react-app/src/pages/EmployeeList.jsx` — page Employee List (affiche « Employee List Page »)

Composants (fichiers créés) :

- `my-react-app/src/components/DatePicker.jsx` — composant DatePicker (placeholder)
- `my-react-app/src/components/Modal.jsx` — composant Modal (placeholder)
- `my-react-app/src/components/Dropdown.jsx` — composant Dropdown (placeholder)
- `my-react-app/src/components/DataTable.jsx` — composant DataTable (placeholder)

Store (placeholder) :

- `my-react-app/src/store/store.js` — point d'entrée pour la gestion d'état (placeholder, à remplacer par Context/Redux selon choix).

## Étapes pour les audits de performance Lighthouse

1. Construire l'app en mode production (ex : `npm run build` dans `my-react-app`).
2. Servir le répertoire `dist` / `build` (ex : `serve -s build` ou tout serveur statique) sur un port accessible.
3. Exécuter Google LightHouse depuis Chrome DevTools ou via `lighthouse --output=json --output-path=report.json http://localhost:PORT`.
4. Sauvegarder les deux rapports JSON (avant / après) et les joindre au dépôt ou en fournir le lien.

## Publication du composant React

- Préparer `package.json` complet (name, version, description, author, keywords).
- S'assurer que le bundle contient le composant et les types si pertinent.
- Publier sur npm (ou GitHub Packages) et fournir le lien public.

## Prochaines étapes immédiates

1. Implémenter les placeholders (pages + composants) — fait ici.
2. Commencer la conversion d'une page (Create Employee) et lier le store.
3. Choisir le plugin jQuery à convertir (recommandation : DatePicker ou DataTable selon complexité désirée).

---

Si tu veux, je peux ensuite :

- Implémenter un des composants (ex : DatePicker) en détaillant les props et le comportement.
- Mettre en place le store (Context + reducer) et migrer la logique existante qui utilisait localStorage.
- Lancer les builds et fournir la procédure exacte pour exécuter les audits Lighthouse.

Indique la priorité (quel plugin convertir en premier) et j'attaque l'implémentation détaillée.
