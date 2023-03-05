# JobScraping

## Development server

Run `nx serve api` for a dev server. Navigate to http://localhost:3333/api. The app will automatically reload if you change any of the source files.

## Search for jobs

To be able to search for job offers, use the following cURL command:

```bash
curl --request GET \
  --url 'http://localhost:3333/api/search?mode=endpoint&keyword=cto'
```

- The valid values for `mode` are `endpoint` and `browser`. The first one uses a Seek API endpoint and whereas the second launches a headless browser for extracting data using [Puppeteer](https://pptr.dev/).

- The `keyword` parameter to look for job offers.

## Documentation

To have access to the documentation, run `nx serve api` and navigate to http://localhost:3333/api/docs.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Running unit tests

Run `nx test api` to execute the unit tests via [Jest](https://jestjs.io).
