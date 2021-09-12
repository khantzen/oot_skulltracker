# skulltracker


## Spec

- Should sort area by type (Overworld / Dungeon)
- Should sort token by location
- Should find all token unlocked by a given item list
- Should find all token for a given location
- Should find checked token if required
- Should validate a location when all token it contains are found
- Rollback an action

```json
{
  "id": "token_01",
  "description": "On the button at Pierre Chest",
  "location": "Fire Temple",
  "type": "Dungeon | Overworld",
  "alwaysRequire": [
    ["hover_boots"], 
    ["bolero"], 
    ["hookshot"]
  ],
  "unlockWith": [
    ["strengh", "hookshot", "scarecrow"]
  ]
}
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
