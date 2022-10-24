---
sidebar_position: 2
---

# Développement

Les étapes suivante vous demanderont certaines connaissances mais vous aurez toute les options récentes et expérimentales.

**Vous aurez tout de même besoin de la dépendance [ox_lib](https://github.com/overextended/ox_lib/releases/latest) !**

### Prérequis
- **[Git](https://git-scm.com/)**,
- **[Node](https://nodejs.org/en/)** (LTS),
- **[pnpm](https://pnpm.io/installation)**

### Installation des dépendences & Mise en place
Clonez le dépot dans votre dossier resources sous le nom `DoluMappingTool`.
```
git clone https://github.com/dolutattoo/DoluMappingTool.git
```

Naviguez vers le dossier `DoluMappingTool/web` et installez les dépendances pour le NUI.

```
cd ./web
```
```
pnpm i
```

### Compiler le NUI

Pour compiler le NUI, executer cette commande depuis le dossier `DoluMappingTool/web`:
```
pnpm build
```

### Ecouter les fichiers
Si vous ne souhaitez pas recompiler à chaque changements, vous pouvez également écouter les fichiers dès qu'ils sont sauvegardés après modification.
```
pnpm start:game
```