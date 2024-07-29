
interface FileInterface {
    fileName: string;
    progress: number;
    fileLocalBlobURL: string;
    fileSize: number;
    fileType: string;
    isUploading: boolean;
    isCompleted: boolean;
  }
interface StepData {
    icon: JSX.Element;
    inActiveIcon: JSX.Element;
    stepCount: number;
    stepDetail: string;
    isActive: boolean;
    isDone: boolean;
    IconColor: string;
}
interface Step1Data {
    email: string;
    firstName: string;
    surName: string;
    phoneNumber: string;
    isWorkingWithLocalAuthority: boolean;
}
interface RoomReqData1 {
    uniqueId: string;
    basicDetails: Step1Data;
}
enum RoomType {
    SelfContained = 'Self_Contained',
    Regular = 'Regular',
}
interface Room {
    size: number;
    type: RoomType;
}
interface PropertyInfo {
    address: string;
    bedrooms: number;
    rooms: Room[];
}

interface PropertyDetailData {
    uniqueId: string;
    propertyInfo: PropertyInfo;
}

type PropertyComplaintKey = keyof PropertyComplaint['propertyComplaint']

interface PropertyComplaintData {
    validGasCertificate: boolean;
    validElectricalCertificate: boolean;
    validSmokeAlarmInstallationCertificate: boolean;
    patTestingCertificate: boolean;
    fra: boolean;
    previouslyUsedAsHMO: boolean;
}
interface PropertyComplaint {
    uniqueId: string;
    propertyComplaint: PropertyComplaintData
}

interface LegalInfo {
    leaseDuration: number;
}

interface LegelDetails {
    uniqueId: string;
    legal: LegalInfo;
}

interface RequestInput {
    email: string;
    firstName: string;
    phoneNumber: string;
    queryDetail: string;
    surname: string;
}

interface RequestData {
    requestInput: RequestInput;
}


interface JobDetails {
    isWorking: 'FULL_TIME' | 'PART_TIME';
    workHoursPerDay: number;
    rcvUniversalCredit: boolean;
    rcvAnyOtherBenefits: boolean;
    otherBenefitsDescription: string;
    localConnection: string;
}

interface JobDeailInterface {
    uniqueId: string;
    jobDetails: JobDetails;
}

interface PersonalAdvisor {
    hasPersonalAdvisor: boolean;
    personalAdvisorlocalAuthority: string;
    firstName: string;
    surName: string;
    phoneNumber: string;
    email: string;
}

interface PersonalAdvisorInterface {
    uniqueId: string;
    personalAdvisor: PersonalAdvisor;
}

interface Education {
    isStudying: boolean;
}

interface EducationInterface {
    uniqueId: string;
    education: Education;
}

interface AdditionalDetails {
    liveWithPartner: boolean;
    isCareLivingUnder25: boolean;
    hasExperiencedDomesticAbuse: boolean;
    livesInHostelOrRefugee3Months: boolean;
    getsDisabilityBenefits: boolean;
    isAFormerPrisoner: boolean;
    isSurvivorOfModernSlavery: boolean;
}

interface AdditionalDetailsInterface {
    uniqueId: string;
    additionalDetails: AdditionalDetails;
}
