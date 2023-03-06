# seek-service

This library interacts with the Seek API and provides an abstraction layer for the Seek API.

# Main classes

- `SeekServiceApi` abstracts the logic of extracting data using an API endpoint.
- `SeekServiceAutomation` abstracts the logic of extracting data using a headless browser.

Please refer to test files to see how to use their APIs.

## Running unit tests

Run `pnpm nx test seek-service` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `pnpm nx lint seek-service` to execute the lint via [ESLint](https://eslint.org/).
