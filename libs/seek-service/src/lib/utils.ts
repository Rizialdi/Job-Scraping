import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ISeekServiceApiSearchResponseJobListing } from '../api/types';
import { IJobListing } from '../automation/types';

dayjs.extend(utc);

/**
 * Serialize the API job listing
 * @param jobListing - The job listing to serialize
 * @returns The serialized job listing
 */
const serializeApiJobListing = (
  jobListing: ISeekServiceApiSearchResponseJobListing
) => ({
  company_name: jobListing.companyName,
  Extracted_at: dayjs.utc().format('ddd, DD MMM YYYY HH:mm:ss [GMT]'),
  seek_job_profile_url: `https://www.seek.com.au/job/${jobListing.solMetadata.jobId}`,
  Job_id: jobListing.solMetadata.jobId,
  Location: jobListing.jobLocation.label,
  job_title: jobListing.title,
  Job_listing_date: dayjs(jobListing.listingDate).format('ddd, DD MMM YYYY'),
  job_classification: jobListing.classification.description,
  seek_specifics: jobListing.bulletPoints.join(' '),
  salary_range: jobListing.salary,
  contract_type: jobListing.workType,
  salary_type: '',
  seek_job_ad_type: jobListing.solMetadata.jobAdType,
  seek_role_id: jobListing.roleId,
  logo: jobListing.branding
    ? jobListing?.branding?.assets?.logo.strategies.jdpLogo
    : '',
  seek_job_teaser: jobListing.teaser,
});

/**
 * Serialize the automation job listing
 * @param jobListing - The job listing to serialize
 * @returns The serialized job listing
 */
const serializeAutomationJobListing = (jobListing: IJobListing) => ({
  company_name: jobListing.companyName,
  Extracted_at: dayjs.utc().format('ddd, DD MMM YYYY HH:mm:ss [GMT]'),
  seek_job_profile_url: jobListing.jobUrl,
  Job_id: jobListing.jobId,
  Location: jobListing.location,
  job_title: jobListing.jobTitle,
  Job_listing_date: dayjs(jobListing.jobListingDate).format('ddd, DD MMM YYYY'),
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
});

export { dayjs, serializeApiJobListing, serializeAutomationJobListing };
