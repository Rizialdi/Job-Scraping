import { ISeekServiceBaseConfig } from './types';

/**
 * Default configuration for the SeekService
 */
const defaultConfiguration: ISeekServiceBaseConfig = {
  baseUrl: 'https://www.seek.com.au',
  api: {
    v4: {
      baseUrl: '/api/chalice-search/v4',
      endpoints: {
        search: '/search?page={pageNumber}&keywords={keyword}',
        relatedSearch:
          '/related-search?zone=anz-1&siteKey=au&keywords={keyword}',
      },
    },
  },
};

export { defaultConfiguration };
