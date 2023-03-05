import { SeekServiceApi } from '../api/api';
import { ISeekServiceApiSearchResponseJobListing } from '../api/types';
import { SeekServiceAutomation } from '../automation/automation';
import { ISeekServiceSearchResponseJobListing } from './types';
import { dayjs } from './utils';

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
  ): Promise<ISeekServiceApiSearchResponseJobListing[]> {
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

  /**
   * Get the result of a search given a keyword using the browser
   * @param keyword - The keyword to search for
   * @returns The list of found jobs
   */
  public async searchUsingBrowser(
    keyword: string
  ): Promise<ISeekServiceSearchResponseJobListing[]> {
    const response = await this.automation.search(keyword);

    return response.map((jobListing) => ({
      company_name: jobListing.companyName,
      Extracted_at: dayjs.utc().format('ddd, DD MMM YYYY HH:mm:ss [GMT]'),
      seek_job_profile_url: jobListing.jobUrl,
      Job_id: jobListing.jobId,
      Location: jobListing.location,
      job_title: jobListing.jobTitle,
      Job_listing_date: dayjs(jobListing.jobListingDate).format(
        'ddd, DD MMM YYYY'
      ),
      job_classification: jobListing.jobClassification,
      seek_specifics: jobListing.jobSpecifics,
      salary_range: jobListing.jobSalaryRange,
      contract_type: jobListing.jobContractType
        .split('This is a')[1]
        .split('job')[0]
        .trim(),
      salary_type: jobListing.jobSalaryType,
      seek_job_ad_type: jobListing.jobAdType,
      seek_role_id: jobListing.roleId,
      logo: jobListing.logo,
      seek_job_teaser: jobListing.jobTeaser,
    }));
  }
}

export { SeekService };
