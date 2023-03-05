# JobScraping

## Development server

### Using `nx`

Run `nx serve api` for a dev server. Navigate to http://localhost:3000/api. The app will automatically reload if you change any of the source files.

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

- The valid values for `mode` are `endpoint` and `browser`. The first one uses a Seek API endpoint and whereas the second launches a headless browser for extracting data using [Puppeteer](https://pptr.dev/).

- The `keyword` parameter to look for job offers.

## Documentation

To have access to the documentation, run `nx serve api` and navigate to http://localhost:3000/api/docs or simply access using the [online version](https://oafish-turn-production.up.railway.app/api/docs).

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Running unit tests

Run `nx test api` to execute the unit tests via [Jest](https://jestjs.io).
