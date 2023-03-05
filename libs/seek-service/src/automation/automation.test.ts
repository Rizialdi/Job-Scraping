import { searchResult } from '../__tests__/stubs/automation.stub';
import { SeekServiceAutomation } from './automation';

describe('#SeekServiceAutomation', () => {
  let keyword: string;
  let sut: SeekServiceAutomation;

  beforeEach(() => {
    keyword = 'fullstack';
    sut = new SeekServiceAutomation();
  });

  describe('#constructor', () => {
    it('should be defined', () => {
      expect(sut).toBeDefined();
    });
  });

  describe('#search', () => {
    it('should call the correct method', async () => {
      const mockedSearch = jest.spyOn(sut, 'search').mockResolvedValue([]);

      await sut.search(keyword);

      expect(mockedSearch).toHaveBeenCalledTimes(1);
      expect(mockedSearch).toHaveBeenCalledWith(keyword);
    });

    it('should have the response matching the snapshot', async () => {
      jest.spyOn(sut, 'search').mockResolvedValue(searchResult());

      const response = await sut.search(keyword);

      expect(response).toMatchSnapshot();
    });
  });
});
