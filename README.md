# @kszongic/title2kebab-cli

[![npm version](https://img.shields.io/npm/v/@kszongic/title2kebab-cli)](https://www.npmjs.com/package/@kszongic/title2kebab-cli)
[![npm downloads](https://img.shields.io/npm/dm/@kszongic/title2kebab-cli)](https://www.npmjs.com/package/@kszongic/title2kebab-cli)
[![node](https://img.shields.io/node/v/@kszongic/title2kebab-cli)](https://nodejs.org)
[![zero deps](https://img.shields.io/badge/dependencies-0-brightgreen)]()
[![cross-platform](https://img.shields.io/badge/platform-win%20%7C%20mac%20%7C%20linux-blue)]()
[![license](https://img.shields.io/npm/l/@kszongic/title2kebab-cli)](./LICENSE)

> Convert **Title Case** strings to **kebab-case** from the command line. Zero dependencies.

```
$ title2kebab "My Cool Component"
my-cool-component
```

## Why?

- URL slugs - Turn page titles into clean URL-friendly slugs instantly
- File naming - Convert component names to kebab-case filenames (React convention)
- CSS class names - Generate BEM-style class names from human-readable labels
- Package names - npm requires lowercase-with-hyphens; go from idea to valid name
- Zero dependencies - Installs in under a second, no supply-chain bloat
- Cross-platform - Works on Windows, macOS, and Linux identically

## Install

```bash
npm i -g @kszongic/title2kebab-cli
```

Or run instantly with npx:

```bash
npx @kszongic/title2kebab-cli "Hello World"
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

## Handles Edge Cases

```bash
title2kebab "  Already kebab  "
# already-kebab

title2kebab "camelCaseInput"
# camel-case-input

title2kebab "ALLCAPS Words"
# allcaps-words
```

## Recipes

### 1. Generate URL slugs from blog titles

```bash
echo "How to Build a REST API" | title2kebab
# how-to-build-a-rest-api
```

### 2. Batch rename React components to kebab-case files

```bash
for name in "UserProfile" "NavBar" "SideMenu"; do
  echo "$name -> $(echo "$name" | title2kebab).tsx"
done
```

### 3. Generate CSS class names from design tokens

```bash
echo "Primary Button Large" | title2kebab
# primary-button-large
```

### 4. Validate npm package names

```bash
SLUG=$(echo "My Awesome Package" | title2kebab)
npx npm-name-check "$SLUG" && echo "Available!"
```

### 5. Chain with other case converters

```bash
echo "My Component Name" | title2kebab | kebab2snake
# my_component_name
```

### 6. Use in npm scripts

```json
{
  "scripts": {
    "slug": "echo $npm_config_title | title2kebab"
  }
}
```

## How It Works

1. Splits the input on whitespace, hyphens, underscores, and camelCase boundaries
2. Lowercases every segment
3. Joins with hyphens
4. Strips leading/trailing hyphens and collapses duplicates

## Use Cases

| Scenario | Example |
|---|---|
| URL slugs | "My Blog Post" -> my-blog-post |
| React file naming | "UserProfile" -> user-profile.tsx |
| CSS classes | "Primary Button" -> .primary-button |
| npm package names | "Cool Tool" -> cool-tool |
| Git branch names | "Feature Login Page" -> feature-login-page |
| Config keys | "Max Retry Count" -> max-retry-count |

## Comparison

| Tool | Zero deps | Stdin | Cross-platform | Handles camelCase |
|---|---|---|---|---|
| **title2kebab-cli** | Yes | Yes | Yes | Yes |
| change-case CLI | No (30+ deps) | No | Yes | Yes |
| sed one-liner | Yes | Yes | No (Unix) | No |
| Online converters | - | - | - | Yes |
| Python re.sub | Yes | Yes | Yes | Manual |

## Related Tools

- [kebab2camel-cli](https://github.com/kszongic/kebab2camel-cli) - kebab-case to camelCase
- [camel2snake-cli](https://github.com/kszongic/camel2snake-cli) - camelCase to snake_case
- [snake2camel-cli](https://github.com/kszongic/snake2camel-cli) - snake_case to camelCase
- [title2camel-cli](https://github.com/kszongic/title2camel-cli) - Title Case to camelCase
- [title2snake-cli](https://github.com/kszongic/title2snake-cli) - Title Case to snake_case

## License

MIT 2026 kszongic
