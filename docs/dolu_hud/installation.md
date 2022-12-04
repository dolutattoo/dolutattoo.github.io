---
sidebar_position: 1
---

# Installation

If you want to build the project yourself, you can refer to **[Development](https://dolutattoo.github.io/docs/dolu_hud/development)**

## Dependencies

- **[pma-voice](https://github.com/AvarianKnight/pma-voice/releases/latest)**
- **[ox_lib](https://github.com/overextended/ox_lib/releases/latest)**
- **[ox_core](https://github.com/overextended/ox_lib/releases/latest)**
- **[ox_inventory](https://github.com/overextended/ox_inventory/releases/latest)**

## Download & Install

- Download the latest release **[from here](https://github.com/dolutattoo/dolu_hud/releases/latest)**,
- Unzip `dolu_hud.zip` file,
- Put `dolu_hud` folder into your `resources` folder,
- Add `dolu_hud` to your `server.cfg` file, under all dependencies:
```
  ensure pma-voice
  ensure ox_lib
  ensure ox_core
  ensure ox_inventory
  ...
  ensure dolu_hud
```