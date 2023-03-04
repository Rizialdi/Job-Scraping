import * as nock from 'nock';
import { searchResult } from '../__tests__/stubs/api.stub';
import { SeekServiceApi } from './api';

describe('#SeekServiceApi', () => {
  let sut: SeekServiceApi;
  let keyword: string;
  let pageNumber: number;

  beforeEach(() => {
    sut = new SeekServiceApi();

    pageNumber = 1;
    keyword = 'fullstack';
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('#constructor', () => {
    it('should be defined', () => {
      expect(sut).toBeDefined();
    });

    it('should get the default configuration', () => {
      expect(sut.config).toMatchSnapshot();
    });
  });

  describe('#search', () => {
    it('should call the correct endpoint', async () => {
      const scope = nock('https://www.seek.com.au')
        .get(
          `/api/chalice-search/v4/search?page=${pageNumber}&keywords=${keyword}`
        )
        .reply(200);

      await sut.search(keyword, pageNumber);

      scope.done();
    });

    it('should have the response matching the snapshot', async () => {
      const scope = nock('https://www.seek.com.au')
        .get(
          `/api/chalice-search/v4/search?page=${pageNumber}&keywords=${keyword}`
        )
        .reply(200, searchResult());

      const response = await sut.search(keyword, pageNumber);

      scope.done();
      expect(response).toMatchSnapshot();
    });
  });
});
