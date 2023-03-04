import { searchResult } from '../__tests__/stubs/api.stub';
import { SeekServiceApi } from '../api/api';
import { SeekService } from './seek-service';

describe('#SeekService', () => {
  let sut: SeekService;
  let keyword: string;
  let pageNumber: number;
  let searchMock: jest.SpyInstance;

  beforeEach(() => {
    sut = new SeekService();

    pageNumber = 1;
    keyword = 'fullstack';

    searchMock = jest.spyOn(SeekServiceApi.prototype, 'search');
  });

  afterEach(() => {
    searchMock.mockRestore();
  });

  describe('#constructor', () => {
    it('should be defined', () => {
      expect(sut).toBeDefined();
    });
  });

  describe('#search', () => {
    it('should call the correct method', async () => {
      await sut.search(keyword, pageNumber);

      expect(searchMock).toHaveBeenCalledWith(keyword, pageNumber);
    });

    it('should have the response matching the snapshot', async () => {
      searchMock.mockResolvedValue(searchResult());

      const response = await sut.search(keyword, pageNumber);

      expect(response).toMatchSnapshot();
    });
  });
});
