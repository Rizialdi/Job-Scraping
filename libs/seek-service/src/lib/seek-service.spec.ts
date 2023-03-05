import { relatedSearch, searchResult } from '../__tests__/stubs/api.stub';
import { searchResult as searchResultAutomation } from '../__tests__/stubs/automation.stub';
import { SeekServiceApi } from '../api/api';
import { SeekServiceAutomation } from '../automation/automation';
import { SeekService } from './seek-service';

describe('#SeekService', () => {
  let sut: SeekService;
  let keyword: string;
  let pageNumber: number;
  let searchMock: jest.SpyInstance;
  let searchUsingBrowserMock: jest.SpyInstance;
  let relatedSearchMock: jest.SpyInstance;

  beforeEach(() => {
    sut = new SeekService();

    pageNumber = 1;
    keyword = 'fullstack';

    searchMock = jest.spyOn(SeekServiceApi.prototype, 'search');
    searchUsingBrowserMock = jest.spyOn(
      SeekServiceAutomation.prototype,
      'search'
    );
    relatedSearchMock = jest.spyOn(SeekServiceApi.prototype, 'relatedSearch');
  });

  afterEach(() => {
    searchMock.mockRestore();
    searchUsingBrowserMock.mockRestore();
    relatedSearchMock.mockRestore();
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

  describe('#relatedKeywords', () => {
    it('should call the correct method', async () => {
      await sut.relatedKeywords(keyword);

      expect(relatedSearchMock).toHaveBeenCalledWith(keyword);
    });

    it('should have the response matching the snapshot', async () => {
      relatedSearchMock.mockResolvedValue(relatedSearch());

      const response = await sut.relatedKeywords(keyword);

      expect(response).toMatchSnapshot();
    });
  });

  describe('#searchUsingBrowser', () => {
    it('should call the correct method', async () => {
      await sut.searchUsingBrowser(keyword);

      expect(searchUsingBrowserMock).toHaveBeenCalledWith(keyword);
    });

    it('should have the response matching the snapshot', async () => {
      searchUsingBrowserMock.mockResolvedValue(searchResultAutomation());

      const response = await sut.searchUsingBrowser(keyword);

      expect(response).toMatchSnapshot();
    });
  });
});
