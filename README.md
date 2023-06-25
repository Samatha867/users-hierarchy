# Coding Challenge - Users Hierarchy

## Development

```
npm install
npm start

```

## Testing

```
npm run test

```

## Troubleshooting with local development

We've set up some code governance, from `prettier` for JS, `stylelint` for CSS and orchestrated by `lint-staged`, with `husky` for pre-commit hooks. This can introduce some one-time dependencies in the project.

For example, `nvm` users will need to set up `~/.huskyrc` in their root folder, with the following:

```
# ~/.huskyrc
# This loads nvm.sh and sets the correct PATH before running hook
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

## Troubleshooting with testing

Issue with node version please run below command

```
npm i -D --exact jest-watch-typeahead@0.6.5

```
