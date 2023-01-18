---
sidebar_position: 3
---

# Development

The next steps will require some knowledges but provides you all latest and experimental features.

**You still need to install [ox_lib](https://github.com/overextended/ox_lib/releases/latest) dependency!**

### Prerequisites
- **[Git](https://git-scm.com/)**,
- **[Node](https://nodejs.org/en/)** (LTS),
- **[pnpm](https://pnpm.io/installation)**

### Installing Dependencies & Setup
Clone the repository into your resources folder with the name `dolu_tool`.
```
git clone https://github.com/dolutattoo/dolu_tool.git
```

Navigate to `dolu_tool/web` folder and install dependencies for NUI.

```
cd ./web
```
```
pnpm i
```

### Building NUI

To build the NUI, run this from `dolu_tool/web` folder:
```
pnpm build
```

### Watching files
If you don't want to rebuild all the time, you can also watch files which will write to disk.
```
pnpm start:game
```