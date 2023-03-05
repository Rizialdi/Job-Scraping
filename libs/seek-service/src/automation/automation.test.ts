import { searchResult } from '../__tests__/stubs/automation.stub';
import { SeekServiceAutomation } from './automation';

describe('#SeekServiceAutomation', () => {
  let keyword: string;

  beforeEach(() => {
    keyword = 'fullstack';
  });

  describe('#constructor', () => {
    it('should be defined', () => {
      expect(SeekServiceAutomation).toBeDefined();
    });
  });

  describe('#search', () => {
    it('should call the correct method', async () => {
      const mockedSearch = jest
        .spyOn(SeekServiceAutomation, 'search')
        .mockResolvedValue([]);

      await SeekServiceAutomation.search(keyword);

      expect(mockedSearch).toHaveBeenCalledTimes(1);
      expect(mockedSearch).toHaveBeenCalledWith(keyword);
    });

    it('should have the response matching the snapshot', async () => {
      jest
        .spyOn(SeekServiceAutomation, 'search')
        .mockResolvedValue(searchResult());

      const response = await SeekServiceAutomation.search(keyword);

      console.log(response);

      expect(response).toMatchSnapshot();
    });
  });
});
