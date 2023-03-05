/**
 * Interface for the 'SeekService' job listing
 */
interface ISeekServiceSearchResponseJobListing {
  company_name: string;
  Extracted_at: string;
  seek_job_profile_url: string;
  Job_id: string;
  Location: string;
  job_title: string;
  Job_listing_date: string;
  job_classification: string;
  seek_specifics: string;
  salary_range: string;
  contract_type: string;
  salary_type: string;
  seek_job_ad_type: string;
  seek_role_id: string;
  logo: string;
  seek_job_teaser: string;
}

export { ISeekServiceSearchResponseJobListing };
