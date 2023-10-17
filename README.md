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

Run all e2e tests

```bash
npm run test
```

Open cypress, then run the container (set the port [here](https://github.com/UniversityOfHelsinkiCS/kliksutin/blob/ffe33eee1f187f260cd27c587825fbe4771430ba/cypress/support/e2e.ts#LL19))

```bash
npm run test:cypress
```

Run eslint

```bash
npm run lint
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
