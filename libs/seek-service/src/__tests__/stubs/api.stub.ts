import { ISeekServiceApiSearchResponse } from '../../api/types';

/**
 * Stub for the search API response
 * @returns The response from the API
 */
const searchResult = (): ISeekServiceApiSearchResponse => {
  return {
    data: [
      {
        advertiser: {
          id: '28815495',
          description: 'Bridge Associates APAC Pty Ltd',
        },
        area: 'North Shore & Northern Beaches',
        areaId: 5028,
        areaWhereValue: 'North Shore & Northern Beaches Sydney NSW',
        automaticInclusion: false,
        bulletPoints: ['Exciting New Role -', 'Career Development'],
        classification: {
          id: '6281',
          description: 'Information & Communication Technology',
        },
        companyName: 'Bridge Associates APAC',
        companyProfileStructuredDataId: 221565,
        displayStyle: {
          search: 'A',
        },
        displayType: 'promoted',
        listingDateDisplay: '4d ago',
        location: 'Sydney',
        locationId: 1000,
        locationWhereValue: 'All Sydney NSW',
        id: 61986871,
        isPremium: true,
        isStandOut: true,
        jobLocation: {
          label: 'North Sydney, Sydney NSW',
          countryCode: 'AU',
          seoHierarchy: [
            {
              contextualName: 'North Sydney NSW 2060',
            },
            {
              contextualName: 'All Sydney NSW',
            },
          ],
        },
        listingDate: '2023-02-28T12:03:01Z',
        logo: {
          id: '',
          description: null,
        },
        roleId: 'digital-lead',
        salary: '$140,000 - $169,999',
        solMetadata: {
          searchRequestToken: '840c4c61-9bf7-4a82-b8f3-cddea9a8f793',
          token: '0~840c4c61-9bf7-4a82-b8f3-cddea9a8f793',
          jobId: '61986871',
          section: 'MAIN',
          sectionRank: 1,
          jobAdType: 'SPONSORED',
          tags: {
            mordor__flights: 'mordor_123',
            mordor__s: '0',
          },
        },
        subClassification: {
          id: '6287',
          description: 'Developers/Programmers',
        },
        suburb: 'North Sydney',
        suburbId: 24000,
        suburbWhereValue: 'North Sydney NSW 2060',
        teaser:
          'Exciting new digital lead developer role working with the latest Microsoft techs!!',
        title: 'Digital Lead - Hands on Fullstack Lead  - Agile - DevOps -',
        tracking:
          'ewogICJ0b2tlbiI6ICI1OTYyZjM4NS1kNDM0LTk2NGUtOTM1ZC00ZWMwZTMwZTBiNmZfMSIKfQ==',
        workType: 'Full Time',
        isPrivateAdvertiser: false,
      },
    ],
    title: 'Fullstack Jobs',
    totalCount: 670,
    paginationParameters: {
      seekSelectAllPages: true,
      hadPremiumListings: true,
    },
    info: {
      timeTaken: 20,
      source: 'JobSearch-sm',
      experiment: 'mordor_123',
    },
    userQueryId: 'API3473179588813666096',
    sortMode: [
      {
        isActive: true,
        name: 'Relevance',
        value: 'KeywordRelevance',
      },
      {
        isActive: false,
        name: 'Date',
        value: 'ListedDate',
      },
    ],
    solMetadata: {
      requestToken: '840c4c61-9bf7-4a82-b8f3-cddea9a8f793',
      token: '0~840c4c61-9bf7-4a82-b8f3-cddea9a8f793',
      keywords: 'fullstack',
      sortMode: 'RELEVANCE',
      pageSize: 22,
      pageNumber: 1,
      totalJobCount: 670,
      tags: {
        mordor__flights: 'mordor_123',
        'chalice-search-api:solId': '5fb082eb-8177-455f-b2a2-506c1136d09f',
      },
    },
    joraCrossLink: {
      canCrossLink: false,
    },
    searchParams: {
      page: '1',
      keywords: 'fullstack',
      solid: '5fb082eb-8177-455f-b2a2-506c1136d09f',
    },
  };
};

/**
 * Stub for the related search API response
 * @returns The response from the API
 */
const relatedSearch = () => {
  return {
    relatedSearches: [
      {
        keywords: 'Amazon Web Services',
        totalJobs: 3704,
        type: 'organisation',
      },
      {
        keywords: 'java',
        totalJobs: 5434,
        type: 'keyword',
      },
      {
        keywords: 'angular',
        totalJobs: 2094,
        type: 'keyword',
      },
      {
        keywords: 'react',
        totalJobs: 2261,
        type: 'keyword',
      },
      {
        keywords: 'full stack',
        totalJobs: 684,
        type: 'keyword',
      },
      {
        keywords: 'python',
        totalJobs: 4984,
        type: 'keyword',
      },
      {
        keywords: 'nodejs',
        totalJobs: 651,
        type: 'keyword',
      },
      {
        keywords: 'javascript',
        totalJobs: 2753,
        type: 'keyword',
      },
    ],
  };
};

export { relatedSearch, searchResult };
