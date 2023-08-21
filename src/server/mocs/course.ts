const mockCourse = {
  id: 'otm-861c248f-e4e4-43df-a69a-50fd206afabf',
  code: 'CSM141081',
  name: {
    en: 'Open Uni: Full Stack Web Development',
    fi: 'Avoin yo: Full Stack -websovelluskehitys',
    sv: 'Nätundervisning',
  },
  nameSpecifier: {
    en: 'Full Stack Web Development',
    fi: 'Full Stack -websovelluskehitys',
    sv: 'Full Stack -websovelluskehitys',
  },
  assessmentItemIds: ['hy-AI-142971782-open-university-teaching-participation'],
  activityPeriod: {
    endDate: '2024-03-02',
    startDate: '2023-03-15',
  },
  courseUnitRealisationTypeUrn:
    'urn:code:course-unit-realisation-type:teaching-participation-online',
  responsibilityInfos: [
    {
      text: null,
      roleUrn:
        'urn:code:course-unit-realisation-responsibility-info-type:responsible-teacher',
      personId: '',
      validityPeriod: {},
    },
    {
      text: null,
      roleUrn:
        'urn:code:course-unit-realisation-responsibility-info-type:administrative-person',
      personId: '',
      validityPeriod: {},
    },
  ],
  courseUnits: [
    {
      id: 'hy-CU-142971782-2020-08-01',
      code: 'CSM141081',
      responsibilityInfos: [
        {
          text: null,
          roleUrn:
            'urn:code:module-responsibility-info-type:responsible-teacher',
          personId: '',
          validityPeriod: {},
        },
      ],
      name: {
        en: 'Full Stack Web Development',
        fi: 'Full Stack -websovelluskehitys',
        sv: 'Full Stack -websovelluskehitys',
      },
      validityPeriod: {
        startDate: '2020-08-01',
      },
    },
  ],
}

export default mockCourse
