---
sidebar_position: 3
---

# Configuration

Configuration file is `config.json`.

Since `json` does not allow comments, here is the config description:

```json
{
  "debug": false, // Set 1 for basic print debugs, or 2 for all print debugs
  "speedo": true, // Enable or disable Hud while in car
  "hideRadarOnFoot": true, // Enable or disable minimap while not in a vehicle
  "speedoMetrics": "kmh", // kmh or mph ?
  "seatbeltKey": "K", // Toggle the seatbelt while in vehicle. Prevent player to fly trough windscreen.
  "setMaxHealth": true, // Force max player health to 200. Female and most of peds have less than 200 by default
  "colors": { // Colors can be found here: https://mantine.dev/theming/colors/#default-colors
    "health": "teal",
    "armour": "blue",
    "voice": "gray.2",
    "oxygen": "cyan",
    "speedo": "teal",
    "hunger": "yellow",
    "thirst": "cyan.4",
    "stress": "orange",
    "drunk": "grape"
  }
}
{
  "debug": false, // Set 1 for basic print debugs, or 2 for all print debugs
  "speedo": true, // Enable or disable Hud while in car
  "topScreenInfo": true, // Enable/disable top right informations
  "hideRadarOnFoot": true, // Enable or disable minimap while not in a vehicle
  "speedoMetrics": "kmh", // kmh or mph ?
  "seatbeltKey": "B", // Toggle the seatbelt while in vehicle. Prevent player to fly trough windscreen
  "setMaxHealth": true, // Force max player health to 200. Female and most of peds have less than 200 by default
  "damagePedIfLowStatuses": { // Apply damages to ped if low statuses (< 5%)
    "enabled": true,
    "rate": 1500, // How often player should be damaged in miliseconds
    "amount": 1 // How much damage should applied each time
  },
  "setStatusesAfterDeath": { // Set the status after player death
    "enabled": true,
    "hunger": 50,
    "thirst": 50,
    "stress": 0,
    "drunk": 0
  }
}
```