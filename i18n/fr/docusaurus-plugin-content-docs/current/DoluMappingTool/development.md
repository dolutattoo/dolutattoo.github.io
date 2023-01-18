---
sidebar_position: 4
---

# Développement

Les étapes suivantes vous demanderont certaines connaissances mais vous aurez accès aux fonctionnalités récentes et expérimentales.

**Vous aurez tout de même besoin de la dépendance [ox_lib](https://github.com/overextended/ox_lib/releases/latest) !**

### Prérequis
- **[Git](https://git-scm.com/)**,
- **[Node](https://nodejs.org/en/)** (LTS),
- **[pnpm](https://pnpm.io/installation)**

### Installation des dépendences & Mise en place
Clonez le dépot git dans votre dossier resources sous le nom `dolu_tool`.
```
git clone https://github.com/dolutattoo/dolu_tool.git
```

Naviguez vers le dossier `dolu_tool/web` et installez les dépendances pour le NUI.

```
cd ./web
```
```
pnpm i
```

### Compiler le NUI

Pour compiler le NUI, executez cette commande depuis le dossier `dolu_tool/web`:
```
pnpm build
```

### Ecouter les fichiers
Si vous ne souhaitez pas recompiler après chaque modifications, vous pouvez également écouter les fichiers dès qu'ils sont sauvegardés.
```
pnpm start:game
```