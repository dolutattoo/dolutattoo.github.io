---
sidebar_position: 1
---

# Installation

If you want to build the project yourself, you can refer to **[Development](https://dolutattoo.github.io/docs/dolu_tool/development)**

## Downloads

- **[ox_lib](https://github.com/overextended/ox_lib/releases/latest)** (required dependency!)
- **[ox_target](https://github.com/overextended/ox_target/releases/latest)** (optional)
- **[dolu_tool](https://github.com/dolutattoo/dolu_tool/releases/latest)**

## Install

- Unzip `ox_lib.zip` and `dolu_tool.zip` files (and `ox_target` if you want it)
- Put `ox_lib` and `dolu_tool` folders into your `resources` folder,
- Add this to your `server.cfg` file:
```lua
  ensure ox_lib
  ensure ox_target -- optional

  ensure dolu_tool
```

## Permissions

By default, everyone can use all the features of the tool.
You can change this in the `config.lua` file.

Set `Config.usePermission` to `true` to use the permission system.<br/>
You can then set the permissions groups in the `Config.permissions` table.

More information about ACE permissions can be found [here](https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917).
