---
date: '2022-10-19'
title: Configure ESLint and Prettier in VScode
tags: [ESLint, Prettier, VSCode]
---

## What are ESLint and Prettier ?

- [**ESLint**](https://eslint.org) is a **javascript linter**.
  It finds bugs, syntax errors and other problems. Specific rules can be configured to customize the code conventions.

- [**Prettier**](https://prettier.io) is a **code formatter** that supports multiple languages.

## Prerequisites

First of all, you need to have
[VSCode](https://code.visualstudio.com),
[Node.js](https://nodejs.org) and
[NPM](https://www.npmjs.com/) installed.

You also need a Node.js project set up.

```bash
mkdir node-project
cd node-project
npm init
```

## Setup

### 1. Install the VSCode Extensions

Open `VSCode` and install the extensions for
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### 2. Update VSCode Settings

Press `Ctrl+Shift+P` (on Windows) and type `Preferences: Open Workspace Settings (JSON)`.
In the opened JSON file, configure `Prettier` as the default formatter, and enable the code formatting on save.

For all languages:

```json
"editor.defaultFormatter":"esbenp.prettier-vscode",
"editor.formatOnSave":true,
```

Or for each language:

```json
"[vue]":{
  "editor.defaultFormatter":"esbenp.prettier-vscode",
  "editor.formatOnSave":true
},
"[javascript]":{
  "editor.defaultFormatter":"esbenp.prettier-vscode",
  "editor.formatOnSave":true
},
"[typescript]":{
  "editor.defaultFormatter":"esbenp.prettier-vscode",
  "editor.formatOnSave":true
},
```

### 3. Install the npm packages

You need to install the followings npm packages:

- **eslint** - checks the code conventions,
- **prettier** - performs the code formatting,
- **eslint-config-prettier** - disables ESLint's formatting rules and defers that concern to Prettier.

```bash
npm i -D eslint prettier eslint-config-prettier
```

### 4. Configure ESLint

Create a **.eslintrc.cjs** file with the following content:

```js
module.exports = {
  root: true,
  'extends': [
    'eslint:recommended',
    'prettier' // put this config last to override the other ones
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
```

### 5. Configure Prettier

Create a **.prettierrc** file with and configure the desired [format rules](https://prettier.io/docs/en/options.html). For example:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

---

::alert
---
title: Note
---
It is not recommended to use the prettier plugin **eslint-plugin-prettier**.
::
