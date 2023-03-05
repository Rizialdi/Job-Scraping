import { SeekServiceApi } from '../api/api';
import { SeekServiceAutomation } from '../automation/automation';
import { ISeekServiceSearchResponseJobListing } from './types';
import { serializeApiJobListing, serializeAutomationJobListing } from './utils';

/**
 * This class is responsible for abstracting the SeekService API and providing the ability to manipulate the data
 */
class SeekService {
  private api: SeekServiceApi;
  private automation: SeekServiceAutomation;

  constructor() {
    this.api = new SeekServiceApi();
    this.automation = new SeekServiceAutomation();
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

    return data.map(serializeApiJobListing);
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

  /**
   * Get the result of a search given a keyword using the browser
   * @param keyword - The keyword to search for
   * @returns The list of found jobs
   */
  public async searchUsingBrowser(
    keyword: string
  ): Promise<ISeekServiceSearchResponseJobListing[]> {
    const data = await this.automation.search(keyword);

    return data.map(serializeAutomationJobListing);
  }
}

export { SeekService };
