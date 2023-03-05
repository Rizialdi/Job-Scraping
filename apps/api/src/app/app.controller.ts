import {
  ISeekServiceSearchResponseJobListing,
  SeekService,
} from '@job-scraping/seek-service';
import {
  Controller,
  Get,
  Logger,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { QueryParamsSearchDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly seekService: SeekService
  ) {}

  /**
   * Get version of the API
   * @returns version of the API
   */
  @Get()
  @ApiOkResponse({ description: 'API version available' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  getVersion() {
    return this.appService.getVersion();
  }

  /**
   * Search route for handling job search.
   * @returns Support two modes and given a keyword search related job postings
   */
  @Get('/search')
  @UsePipes(new ValidationPipe())
  @ApiOkResponse({ description: 'Search results are available' })
  @ApiBadRequestResponse({ description: 'Invalid search parameters' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async search(
    @Query() { mode, keyword }: QueryParamsSearchDto
  ): Promise<ISeekServiceSearchResponseJobListing[]> {
    Logger.log('Job posting search', { mode, keyword });

    try {
      const response =
        mode === 'endpoint'
          ? await this.seekService.search(keyword, 1)
          : await this.seekService.searchUsingBrowser(keyword);

      Logger.log('Success during job posting search', {
        mode,
        keyword,
      });

      return response;
    } catch (error) {
      Logger.log('Error during job posting search', { mode, keyword, error });

      throw error;
    }
  }
}
