import axios, { AxiosInstance } from 'axios';
import { defaultConfiguration } from './config';
import {
  ISeekServiceApiBaseConfig,
  ISeekServiceApiRelatedSearchResponse,
  ISeekServiceApiSearchResponse,
} from './types';

/**
 * SeekService API
 * This class is responsible for making requests to the Seek API
 */
class SeekServiceApi {
  public config: ISeekServiceApiBaseConfig;
  private axiosInstance: AxiosInstance;

  constructor() {
    this.config = defaultConfiguration;

    this.axiosInstance = axios.create({
      baseURL: this.config.baseUrl,
      timeout: 5000,
    });
  }

  /**
   * Get the current configuration for the SeekService
   * @returns The current configuration for the SeekService
   */
  public getConfiguration(): ISeekServiceApiBaseConfig {
    return this.config;
  }

  /**
   * Get job listings given a keyword and a given page number
   * @param keyword - The keyword to search for
   * @param pageNumber - The page number to search for
   * @returns The response from the API
   */
  public async search(
    keyword: string,
    pageNumber: number
  ): Promise<ISeekServiceApiSearchResponse> {
    const {
      api: {
        v4: { baseUrl, endpoints },
      },
    } = this.config;

    const url = `${baseUrl}${endpoints.search}`
      .replace('{pageNumber}', pageNumber.toString())
      .replace('{keyword}', keyword);

    const { data } = await this.axiosInstance.get(url);

    return data;
  }

  /**
   * Get related keywords given a keyword
   * @param keyword - The keyword to search for
   * @returns The response from the API
   */
  public async relatedSearch(
    keyword: string
  ): Promise<ISeekServiceApiRelatedSearchResponse> {
    const {
      api: {
        v4: { baseUrl, endpoints },
      },
    } = this.config;

    const url = `${baseUrl}${endpoints.relatedSearch}`.replace(
      '{keyword}',
      keyword
    );

    const { data } = await this.axiosInstance.get(url);

    return data;
  }
}

export { SeekServiceApi };
