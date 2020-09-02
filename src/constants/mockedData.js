export const mockedInitiatives = [
  {
    id: "1",
    type: "resources",
    attributes: {
      name: 'Help for elder people',
      description: 'We are helping elder people',
      location: 'Warsaw',
      category: 'neighbourly_help',
      thumbnail_url: null,
      target_url: 'http://wehelp.elder/',
      ios_url: 'http://iosWeHelpElder.com/',
      android_url: 'http://androidWeHelpElder.com/',
      facebook_url: 'https://fbWeHelpElder.com/',
      contact: 'Anna',
      organizer: 'Michal',
      upvotes_count: 23,
      already_upvoted: false,
      how_to_help: 'Contact us',
      tag_list: ['elder people']
    }
  },
  {
    id: "2",
    type: "resources",
    attributes: {
      name: 'Help for hospitals',
      description: 'We are helping hospitals',
      location: 'Poznan',
      category: 'for_hospitals',
      thumbnail_url: null,
      target_url: 'http://wehelp.hospitals/',
      ios_url: 'http://iosWeHelphospitals.com/',
      android_url: 'http://androidWeHelphospitals.com/',
      facebook_url: 'https://fbWeHelphospitals.com/',
      contact: 'Jan',
      organizer: 'Tom',
      upvotes_count: 13,
      already_upvoted: false,
      how_to_help: 'Visit us and ask',
      tag_list: ['hospitals']
    }
  }
];

export const mockedTags = {
  data: [
    {
      id: '1',
      type: 'tags',
      attributes: {
        name: 'hospitals'
      }
    },
    {
      id: '2',
      type: 'tags',
      attributes: {
        name: 'elder people'
      }
    }
  ]
};

export const mockedLocations = {
  data: [
    {
      id: '0',
      type: 'locations',
      attributes: {
        name: "Warsaw",
        resources_count: 1
      }
    },
    {
      id: '1',
      type: 'locations',
      attributes: {
        name: "Poznan",
        resources_count: 1
      }
    }
  ]
};