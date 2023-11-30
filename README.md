# Template js

A Template with editor configs, prettier and vscode settings for js projects

## How to use

-   Click "Use this template"
-   Download repo
-   Open example files and save to test settings
-   When you are happy with how it looks, run `sh cleanup.sh` to remove example files and create a commit
-   git push

## FAQ

### How to change tab width?

Change the `indent_size` property on `.editorconfig` and the `tabWidth` on `.prettierrc`

## Configurations

### Git ignore - `.gitignore`

```sh
# npm
node_modules/

# Mac folder
.DS_Store

# env file
.env
```

### Editor config - `.editorconfig`

```sh
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false

```

### Vscode - `.vscode/settings.json`

```js
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.requireConfig": true,
}

```

### Prettier - `.prettierrc`

```js
{
    //default
    "useTabs": false,
    "semi": true,
    "quoteProps": "as-needed",
    "bracketSpacing": true,
    "trailingComma": "all",
    "bracketSameLine": false,

    // changed                  default:
    "arrowParens": "avoid",       // always
    "singleQuote": true,          // false
    "jsxSingleQuote": true,       // false
    "tabWidth": 4                 // 2
}
```

## License

[MIT License](http://www.opensource.org/licenses/MIT)
