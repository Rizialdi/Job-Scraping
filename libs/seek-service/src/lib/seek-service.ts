import { SeekServiceApi } from '../api/api';
import { ISeekServiceSearchResponseJobListing } from '../api/types';

/**
 * This class is responsible for abstracting the SeekService API and providing the ability to manipulate the data
 */
class SeekService {
  private api: SeekServiceApi;

  constructor() {
    this.api = new SeekServiceApi();
  }

  /**
   * Get the result of a search given a keyword and a given page number
   * @param keyword - The keyword to search for
   * @param pageNumber - The page number to search for
   * @returns The list of found jobs
   */
  public async search(
    keyword: string,
    pageNumber: number
  ): Promise<ISeekServiceSearchResponseJobListing[]> {
    const { data } = await this.api.search(keyword, pageNumber);

    return data;
  }
}

export { SeekService };
