/**
 * Base configuration for the SeekService
 */
interface ISeekServiceBaseConfig {
  baseUrl: string;
  api: {
    v4: {
      baseUrl: string;
      endpoints: {
        search: string;
        relatedSearch: string;
      };
    };
  };
}

/**
 * Job listing from the search endpoint
 */
interface ISeekServiceSearchResponseJobListing {
  advertiser: {
    id: string;
    description: string;
  };
  area?: string;
  areaId?: number;
  areaWhereValue?: string;
  automaticInclusion: boolean;
  branding?: {
    id: string;
    assets: {
      logo: {
        strategies: {
          jdpLogo: string;
          serpLogo: string;
        };
      };
    };
  };
  bulletPoints: Array<string>;
  classification: {
    id: string;
    description: string;
  };
  companyName?: string;
  companyProfileStructuredDataId: number;
  displayType: string;
  listingDateDisplay: string;
  location: string;
  locationId: number;
  locationWhereValue: string;
  id: number;
  isPremium: boolean;
  isStandOut: boolean;
  jobLocation: {
    label: string;
    countryCode: string;
    seoHierarchy: {
      contextualName: string;
    }[];
  };
  listingDate: string;
  logo: {
    id: string;
    description: unknown;
  };
  roleId: string;
  salary: string;
  solMetadata: {
    searchRequestToken: string;
    token: string;
    jobId: string;
    section: string;
    sectionRank: number;
    jobAdType: string;
    tags: {
      mordor__flights: string;
      mordor__s: string;
    };
  };
  subClassification: {
    id: string;
    description: string;
  };
  suburb?: string;
  suburbId?: number;
  suburbWhereValue?: string;
  teaser: string;
  title: string;
  tracking: string;
  workType: string;
  isPrivateAdvertiser: boolean;
  displayStyle?: {
    search?: string;
  };
}

/**
 * Response from the search endpoint
 */
interface ISeekServiceSearchResponse {
  data: ISeekServiceSearchResponseJobListing[];
  title: string;
  totalCount: number;
  paginationParameters: {
    seekSelectAllPages: boolean;
    hadPremiumListings: boolean;
  };
  info: {
    timeTaken: number;
    source: string;
    experiment: string;
  };
  userQueryId: string;
  sortMode: {
    isActive: boolean;
    name: string;
    value: string;
  }[];
  solMetadata: {
    requestToken: string;
    token: string;
    keywords: string;
    sortMode: string;
    pageSize: number;
    pageNumber: number;
    totalJobCount: number;
    tags: {
      mordor__flights: string;
      'chalice-search-api:solId': string;
    };
  };
  joraCrossLink: {
    canCrossLink: boolean;
  };
  searchParams: {
    page: string;
    keywords: string;
    solid: string;
  };
}

export {
  ISeekServiceBaseConfig,
  ISeekServiceSearchResponse,
  ISeekServiceSearchResponseJobListing,
};
