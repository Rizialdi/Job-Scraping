import puppeteer from 'puppeteer';
import { IDataSearchSolMeta, IJobListing } from './types';

/**
 * Search for a keyword on Seek website
 * @param keyword - The keyword to search for
 * @returns The list of job listings
 */
const search = async (keyword: string): Promise<IJobListing[]> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = 'https://www.seek.com.au';

  // Navigate to the website
  await page.goto(url);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // Find the search box
  const keywordAnchor = await page.$("input[placeholder='Enter Keywords']");
  // Find the search button
  const searchAnchor = await page.$("button[id='searchButton']");

  if (!keywordAnchor) throw new Error('No anchor found');
  if (!searchAnchor) throw new Error('No anchor found');

  // Type into search box
  await keywordAnchor.type(keyword);
  // Click on search button
  await searchAnchor.click();

  // Wait for the results to load
  await page.waitForSelector('div._1wkzzau0.a1msqi6j > div._1wkzzau0');

  // Iterate over the results and extract the data
  const jobListings = await page.evaluate((url) => {
    return Array.from(
      document.querySelectorAll('div._1wkzzau0.a1msqi6j > div._1wkzzau0')
    ).map((jobListing) => {
      const meta = jobListing
        .querySelector('div > div')
        ?.getAttribute('data-search-sol-meta');

      const { jobId, jobAdType }: IDataSearchSolMeta = JSON.parse(meta);

      return {
        companyName:
          jobListing.querySelector(
            'div > div > article > div > div > div > div > div > div > div > div > div > span > a'
          )?.textContent ?? 'Private Advertiser',
        jobUrl:
          url + jobListing.querySelector('div > a')?.getAttribute('href') ?? '',
        jobId: jobId,
        location:
          jobListing.querySelector(
            'div > div > article > div > div > div > div > div > div > div > span > a'
          )?.textContent ?? '',
        jobTitle:
          jobListing.querySelector(
            'div > div > article > div > div > div > div > div > div > div > div > div > div > h3 > a'
          )?.textContent ?? '',
        jobListingDate:
          jobListing.querySelector(
            'div > div > article > div > div > div > div > div > div > div > div > span > span'
          )?.textContent ?? '',
        jobClassification:
          jobListing.querySelector(
            'div > div > article > div > div > div > div > div > div > div > span > div > div > div > a'
          )?.textContent ?? '',
        jobSpecifics:
          jobListing.querySelector(
            'div > div > article > div > div > div > div > div > span'
          )?.textContent ?? '',
        jobSalaryRange:
          jobListing.querySelector(
            'div > div > article > div > div > div > div > div > div > div > div > span > div'
          )?.textContent ?? '',
        jobContractType:
          jobListing.querySelector('div > div> div > div > div > div > p')
            ?.textContent ?? '',
        jobSalaryType: '',
        jobAdType: jobAdType,
        roleId: '',
        logo:
          jobListing
            .querySelector('div > div > div > div > div > img')
            ?.getAttribute('src') ?? '',
        jobTeaser:
          jobListing.querySelector(
            'div > div > article > div > div > div > div > div > span'
          )?.textContent ?? '',
      };
    });
  }, url);

  await browser.close();

  return jobListings;
};

export { search };
