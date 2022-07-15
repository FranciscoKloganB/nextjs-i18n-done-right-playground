# Next.js: i18n done right

## A journey to support internationalization and right-to-left languages

This is a hands-on project which you can use as a baseline to implement this feature yourself
or, alternatively, you can follow our implementation process commit-by-commit, or just run the
final version to play around in your browser.

### Tech Stack

- Next.js (SSR, SSG)
  - External Components Libs
    - headless-ui
    - heroicons
  - Internationalization
    - Pairing of i18next and react-i18next
- Code Quality:
  - Conventional Commits
  - Eslint
  - Husky
  - Lint-Staged
  - Prettier
- External Services
  - Netlify
- Styling:
  - TailwindCSS
    - Tailwind Styled Components

### Getting started

Finally, assuming you already installed [Node 16](https://nodejs.org/en/) and
[NPM](https://www.npmjs.com/) you can run the commands below to get started:

```bash
# Setup `.env.local` with any potentially missing API KEY or Configuration
npm i
npm run dev
```

Access [http://localhost:3000](http://localhost:3000) with your browser to see
the result.

_1st Note: easily manage your node and npm versions with [Node Version Manager](https://github.com/nvm-sh/nvm)_

_2nd Note: install the vscode plugins recommended in `.vscode/extensions.json` or similar ones_

### Launching development mode with Server breakpoints

```bash
# Vscode? See https://nextjs.org/docs/advanced-features/debugging#debugging-with-vs-code
# DevTools? See https://nextjs.org/docs/advanced-features/debugging#debugging-with-chrome-devtools
npm run dev:inspect
```

### Environment Variables

To know more about the reason why there is not problem in having `.env` files in the root
of the project read about [environment variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables).

Remember Next.js looks for variables in the following places (and order) and stopslooking for
them on the first match!

- `process.env` (system-wide environment variables)
- `.env.$(NODE_ENV).local` (please **do not use this**)
- `.env.local` (not loaded when `NODE_ENV=test`)
- `.env.$(NODE_ENV)` (one of `development | test | production`)
- `.env`

Variables prefixed with `NEXT_PUBLIC_` are available client-side (to user browsers) and server-side,
whereas non-prefixed variables are only available to the server and not visible to users. Next.js
also does not leak server-side code to the clients.

You can add any variables to these files as long as you follow these rules:

- Non-sensitive variables required by **browsers** or **browsers and server** should be written
  in plaintext and prefixed with `NEXT_PUBLIC` directive:

  ```.env
  NEXT_PUBLIC_XVAR="a_plaintext_value_for_xvar"
  ```

- Non-sensitive variables required **only by the server** should be written in plaintext without
  the `NEXT_PUBLIC` directive:

  ```.env
  YVAR="a_plaintext_value_for_yvar"
  ```

- Sensitive or secret variables required **only by the server** should not be written in any file
  other than `.env.local` or exported in your `.zshrc` profile. In production they should be
  injected by `Netlify`. You can you use the project build dashboard to add new sensitive variables.

### Formatting and Linting Code

```bash
npm run format
npm run lint
```

### Learn More

- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Jest](https://jestjs.io/docs/getting-started)
- [Netlify](https://docs.netlify.com/)
- [Next.js](https://nextjs.org/docs)
- [Next-Auth](https://next-auth.js.org/getting-started/introduction)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Testing Library](https://testing-library.com/)
  - [Testing Playground](https://testing-playground.com/)
