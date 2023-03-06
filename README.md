# JobScraping

## Project structure

The project is structured using mainly [Nx](https://nx.dev) and [NestJS](https://nestjs.com/).

- Nx is a set of extensible dev tools for monorepos. It helps developing full-stack applications using a single repository. The applications logic is scattered across `libs` from reusability purposes. The `apps` folder contains the applications that use the `libs` folder.

- NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). It helps solving the Architecture problem of applications by helping structure code using [SOLID principles](https://en.wikipedia.org/wiki/SOLID).

The main folder is `apps/api` and contains the NestJS application. The `libs` folder contains the shared code, mainly `libs/seek-service` for abstracting away Seek specific logic.

## Development server

### Using `pnpm`

Make sure you have [`pnpm`](pnpm.io) installed globally and run `pnpm install` at the root. Then run `pnpm nx serve api` for a dev server. Navigate to http://localhost:3000/api. The app will automatically reload if you change any of the source files.

### Using `docker`

Run `docker build -t api .` to build the image. Then, run `docker run -p 3000:3000 api` to run the container. Navigate to http://localhost:3000/api.

## Deployed server

The API is deployed on [Railway](https://railway.app) and can be accessed [here](https://oafish-turn-production.up.railway.app/api/).

## Search for jobs

To be able to search for job offers, use the following cURL command:

```bash
curl --request GET \
  --url 'http://localhost:3000/api/search?mode=endpoint&keyword=cto'
```

or

```bash
curl --request GET \
  --url 'https://oafish-turn-production.up.railway.app/api/search?mode=endpoint&keyword=cto'
```

- The valid values for `mode` are `endpoint` and `browser`. The first one uses a Seek API endpoint whereas the second launches a headless browser for extracting data using [Puppeteer](https://pptr.dev/).

- The `keyword` parameter to look for job offers.

## Documentation

To have access to the documentation, run `pnpm nx serve api` and navigate to http://localhost:3000/api/docs or simply access using the [online version](https://oafish-turn-production.up.railway.app/api/docs).

## Understand this workspace

Run `pnpm nx graph` to see a diagram of the dependencies of the projects.

## Running unit tests

Run `pnpm nx test api` to execute the unit tests via [Jest](https://jestjs.io).

## Improvements

Below is a non-exhaustive list of potential improvements.

- Run the API and test with different keywords and using the browser mode. Since that relies on using a headless browser, some incorrect data extraction might occurs.
- For production use, make sure to decrease the bot signature of headless browser. It might also be useful to use proxy provider for IP rotation.
- Add authentication as well as rate limit for a given token.
- Add a parameter in the API route for controlling how many Seek pages are used for data extraction. Currently, only the job offers on the first page are shown.
