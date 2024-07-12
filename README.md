# <img src=./public/pirated_curre.gif width=100px /> Curre ![Release](https://github.com/UniversityOfHelsinkiCS/kliksutin/actions/workflows/production.yml/badge.svg) ![Release](https://github.com/UniversityOfHelsinkiCS/kliksutin/actions/workflows/test.yml/badge.svg)

## Requirements

- Docker
- Docker Compose
- Node.js

## Scripts

Run project locally on your machine.

```bash
npm start # or
docker compose up
```

Run all e2e tests. In order for this to work locally, you need to change the [Node version](/Dockerfile#1) from the RedHat to `node:latest` for example. Then run the following command:

```bash
npm run test
```

Run e2e tests in interactive Cypress environment. In order for this to work correctly change the baseURL in the [cypress.config](cypress.config.js#8) to `localhost:3000`. Then you can run the following command:

```bash
npm run test:cypress
```

Run static code analysis tools. Each commit triggers these runs through the pre-commit hooks.

```bash
npm run lint # Run eslint
npm run format # Run prettier
```

## Development

To use production data for development run

```bash
./scripts/get_prod_db.sh
```

Typescript? `as unknown as ...` and `: any` are allowed.

> "Dynamic types are customer value"
>
> – mluukkai, maybe

## Environment configuration

Create a `.env` file inside the project's root directory. In that file, copy the contents of the `.env.template` file and add correct values for the variables based on the documentation.

Get the JAMI api key from Openshift JAMI pod. Use version.helsinki.fi documentation for that.

Get the OPENAI api key from someone developing currently.

## Credits

Curre emojis & gif by https://github.com/googlefonts/noto-emoji/ licenced under SIL
