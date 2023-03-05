import { IJobListing } from './types';
import { search } from './utils';

/**
 * SeekService Automation
 * This class is responsible for scraping the Seek website
 */
class SeekServiceAutomation {
  /**
   * Get job listings given a keyword
   * @param keyword - The keyword to search for
   * @returns The response from the API
   */
  static async search(keyword: string): Promise<IJobListing[]> {
    return search(keyword);
  }
}

export { SeekServiceAutomation };
