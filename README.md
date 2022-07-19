# Next.js: i18n done right

## A journey to support internationalization and right-to-left languages

This is a hands-on project which you can use as a baseline to implement this feature yourself
or, alternatively, you can follow our implementation process commit-by-commit, or just run the
final version to play around in your browser.

### Tech Stack

- Next.js (SSR, SSG)
  - Internationalization
    - [`i18next`](https://www.i18next.com/)
    - [`react-i18next`](https://react.i18next.com/)
- Code Quality:
  - Conventional Commits
  - Eslint
  - Husky
  - Lint-Staged
  - Prettier
- External Services
  - [Netlify](https://www.netlify.com/)
    - See the project's final version [here](https://wtx-next-i18n-done-right.netlify.app))
- Styling:
  - [TailwindCSS](https://tailwindcss.com/docs/installation)
  - [Tailwind Styled Components](https://github.com/MathiasGilson/tailwind-styled-component)

### Getting Started

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

### Launching Development Mode with Server Breakpoints

```bash
# Vscode? See https://nextjs.org/docs/advanced-features/debugging#debugging-with-vs-code
# DevTools? See https://nextjs.org/docs/advanced-features/debugging#debugging-with-chrome-devtools
npm run dev:inspect
```

### Take Home Exercise

Our demo implementation was split into several branches (`git fetch --all && git branch --all`).

Starting from branch `00` through branch `03`. You should be able to see features comming to life.

We challenge you to do the following exercise:

- Go to the [final version of this demo](https://wtx-next-i18n-done-right.netlify.app))
  - Play around with the functionality
    - Change the language on the client-side
    - Change the language using the URL
    - Access the site in anonymous mode with browser language set to `ar`
      - _Can you see the languages changing? What about the i18nex cookie on the developer tools_
        - Assuming you are on Chrome cookies are available in `Developer Tools > Application > Storage > Cookies`.
- Implement the following features in order:
  - Install the required packages to perform translations `react-i18next` and `i18next`
    - Configure them according to the docs
    - Add the `useTranslation` hook in components that got "translable" strings
      - Ensure that english translation still works
    - Add a new language of your choice (e.g.: `german`, locale := `de`)
      - Access the home page with `/de` at the end. Does the language change?
    - Configure `i18next-browser-languagedetector` and see if you can figure out how to synch everything
  - Create a dropdown selector for the user to be able to select languages
    - When the user clicks a new language, change the `next.js router locale`.
      - _How do you synchronize the i18next and next.js data? Perhaps a hook at `pages/_app.tsx`?_
  - Add arabic translations
    - Ensure that when the user selects `ar`, the page direction changes `<html dir="rtl">`
      - _This should be done on `pages/_document.tsx`! You can not use hooks here. Good luck!_
  - Now that the pages flips directions you can probably see your `UI` broken.
    - Use `tailwindcss-rtl` library to replace `left and right` styles with `start and end`.
      - _Read the first page of their docs to know what this means exactly._
      - _Note: currently you can not use negative directives, nor arbitrary values with this lib! \How can you work around this issue?_

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

- [Netlify](https://docs.netlify.com/)
- [Next.js](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [TailwindCSS-RTL](https://github.com/20lives/tailwindcss-rtl)
