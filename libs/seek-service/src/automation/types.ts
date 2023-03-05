/**
 * Parse the data-search-sol-meta attribute from the job ad
 */
interface IDataSearchSolMeta {
  searchRequestToken: '333bc538-79f2-4e09-b6f2-60afa8ebee57';
  token: '0~333bc538-79f2-4e09-b6f2-60afa8ebee57';
  jobId: '59820105';
  section: 'MAIN';
  sectionRank: 22;
  jobAdType: 'ORGANIC';
  tags: {
    mordor__flights: 'mordor_123';
    mordor__s: '0';
    'seek:chalice:experiments:job_details_split_view': '2';
    'seek:chalice:experiments:aa_test': '2';
  };
}

/**
 * Job listing interface from scraping the Seek website
 */
interface IJobListing {
  companyName: string;
  jobUrl: string;
  jobId: string;
  location: string;
  jobTitle: string;
  jobListingDate: string;
  jobClassification: string;
  jobSpecifics: string;
  jobSalaryRange: string;
  jobContractType: string;
  jobSalaryType: string;
  jobAdType: string;
  roleId: string;
  logo: string;
  jobTeaser: string;
}

export { IDataSearchSolMeta, IJobListing };
