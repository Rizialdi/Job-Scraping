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

  /**
   * Get the related keyword of a given keyword
   * @param keyword - The keyword to get the related keyword for
   * @returns The list of related keywords
   */
  public async relatedKeywords(keyword: string): Promise<string[]> {
    const { relatedSearches } = await this.api.relatedSearch(keyword);

    const filteredSearch = relatedSearches.filter(
      (relatedSearch) => relatedSearch.type === 'keyword'
    );

    return filteredSearch.map((relatedSearch) => relatedSearch.keywords);
  }
}

export { SeekService };
