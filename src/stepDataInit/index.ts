enum RoomType {
  SelfContained = 'Self_Contained',
  Regular = 'Regular',
}
const step1Data: Step1Data = {
  email: '',
  firstName: '',
  surName: '',
  phoneNumber: '',
  isWorkingWithLocalAuthority: false,
}
const roomReqData1 = {
  uniqueId: '',
  basicDetails: step1Data
}
const initialLegelDetails: LegelDetails = {
  uniqueId: "",
  legal: {
    leaseDuration: 1
  }
};
const initialPropertyDetails: PropertyDetailData = {
  uniqueId: '',
  propertyInfo: {
    address: "",
    bedrooms: 1,
    rooms: [
      {
        size: 0,
        type: RoomType.SelfContained,
      }
    ]
  }
}

const initRentExpected = {
  uniqueId: "",
  rentExpectations: 0

}

const initJobDetail: JobDeailInterface = {
  uniqueId: '',
  jobDetails: {
    isWorking: 'FULL_TIME',
    workHoursPerDay: 1,
    rcvUniversalCredit: false,
    rcvAnyOtherBenefits: false,
    otherBenefitsDescription: '',
    localConnection: '',
  },
}

const initialPersonalAdvisor: PersonalAdvisorInterface = {
  uniqueId: '',
  personalAdvisor: {
    hasPersonalAdvisor: false,
    personalAdvisorlocalAuthority: 'one',
    firstName: '',
    surName: '',
    phoneNumber: '',
    email: '',
  },
}
const initEducation: EducationInterface = {
  uniqueId: '',
  education: {
    isStudying: false,
  },
}

const initAdditionalDetails: AdditionalDetailsInterface = {
  uniqueId: '',
  additionalDetails: {
    liveWithPartner: false,
    isCareLivingUnder25: false,
    hasExperiencedDomesticAbuse: false,
    livesInHostelOrRefugee3Months: false,
    getsDisabilityBenefits: false,
    isAFormerPrisoner: false,
    isSurvivorOfModernSlavery: false,
  },
}

interface CheckboxItem {
  label: string;
  property: keyof AdditionalDetailsInterface['additionalDetails']; // This ensures property is a valid key
}
interface PropertyComplaintCheckbox {
  label: string;
  property: keyof PropertyComplaint['propertyComplaint'];
}

const propertyComplaintCheckboxes: PropertyComplaintCheckbox[] = [
  {
    label: "Do you have a valid gas certificate?",
    property: 'validGasCertificate',
  },
  {
    label: "Do you have a valid electrical certificate?",
    property: 'validElectricalCertificate',
  },
  {
    label: "Do you have a valid smoke alarm installation certificate?",
    property: 'validSmokeAlarmInstallationCertificate',

  },
  {
    label: "Do you have a valid PAT testing certificate?",
    property: 'patTestingCertificate',

  },
  {
    label: "Do you have a valid Fire Risk Assessment (FRA) ?",
    property: 'fra',

  },
  {
    label: "Was the property previously used as HMO (House in Multiple Occupation)?",
    property: 'previouslyUsedAsHMO',
  },
];
const checkboxDataAdditionalDetails: CheckboxItem[] = [
  {
    label: "Do you live with your partner?",
    property: 'liveWithPartner',
  },
  {
    label: "Are you a care leaver aged 24 or younger?",
    property: 'isCareLivingUnder25',
  },
  {
    label: "Have you experienced domestic abuse?",
    property: 'hasExperiencedDomesticAbuse',
  },
  {
    label: "Have you lived in a hostel or refuge for at least three months?",
    property: 'livesInHostelOrRefugee3Months',
  },
  {
    label: "Are you a former prisoner aged 25 to 34 who is covered by MAPPA?",
    property: 'isAFormerPrisoner',
  },
  {
    label: "Do you receive disability benefits but do not require overnight care?",
    property: 'getsDisabilityBenefits',
  },
  {
    label: "Are you a survivor of modern slavery?",
    property: 'isSurvivorOfModernSlavery',
  },
];
const initPropertyComplaint: PropertyComplaint = {
  uniqueId: "",
  propertyComplaint: {
    validGasCertificate: false,
    validElectricalCertificate: false,
    validSmokeAlarmInstallationCertificate: false,
    patTestingCertificate: false,
    fra: false,
    previouslyUsedAsHMO: false
  }
};
const validMimeTypes: string[] = [
  'image/jpeg',
  'image/png',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

export { checkboxDataAdditionalDetails, initAdditionalDetails, initEducation, initJobDetail, initPropertyComplaint, initRentExpected, initialLegelDetails, initialPersonalAdvisor, initialPropertyDetails, propertyComplaintCheckboxes, roomReqData1, step1Data, validMimeTypes };

