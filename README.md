# Nuxt 3 Application

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Docker

## Development
Build development-optimized image
```
docker build -t nuxt-app -f Dockerfile.dev .
```

>Tip: to quickly check absolute path to your directory use `pwd` command in your terminal.

Development server
```bash
docker run --rm -it \
-v /path/to/your/app/locally:/usr/src/app \
-p 3000:3000 \
-p 24678:24678 \
nuxt-app
```

## Production
Build production-optimized image
```
docker build -t nuxt-app-prod -f Dockerfile.prod .
```

Production server
```bash
docker run --rm -it --init -p 3000:3000 nuxt-app-prod
```

# Testing
## Unit tests
```
npm run test
```

## E2E testing
Requires localhost server already running. 
- `npm run dev` before starting e2e tests
to the local development server (if not already started)
- `npm run cypress:open`
- after Cypress dialog opens click `Start E2E Testing in Chrome`
- select `Todo.cy.js` to start tests

To close:
- on the initial Cypress dialog click `Close`

## Code coverage
```
npm run coverage
```