# @kszongic/title2kebab-cli

[![npm version](https://img.shields.io/npm/v/@kszongic/title2kebab-cli)](https://www.npmjs.com/package/@kszongic/title2kebab-cli)
[![license](https://img.shields.io/npm/l/@kszongic/title2kebab-cli)](./LICENSE)

> Convert Title Case strings to kebab-case from the command line. Zero dependencies.

## Install

```bash
npm i -g @kszongic/title2kebab-cli
```

## Usage

```bash
# From arguments
title2kebab "Hello World"
# hello-world

title2kebab "My Cool Component"
# my-cool-component

# From stdin
echo "The Quick Brown Fox" | title2kebab
# the-quick-brown-fox
```

## Handles edge cases

```bash
title2kebab "  Already kebab  "
# already-kebab

title2kebab "camelCaseInput"
# camel-case-input

title2kebab "ALLCAPS Words"
# allcaps-words
```

## License

MIT © 2026 kszongic
