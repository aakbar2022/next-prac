import { gql } from "@apollo/client";

const ADD_USER = gql`
mutation AddUserQuery($requestInput: RequestInput!) {
  addUserQuery(requestInput: $requestInput) {
    ... on Success {
      uniqueId
      message
    }
    ... on Error {
      errorCode
      reason
    }
  }
}
`;

const CREATE_BASIC_ROOM = gql`
mutation CreateBasicRoomRequest($uniqueId: ID!, $basicDetails: BasicDetailsInput!) {
  createBasicRoomRequest(uniqueId: $uniqueId, basicDetails: $basicDetails) {
    ... on Success {
      uniqueId
      message
    }
    ... on Error {
      errorCode
      reason
    }
  }
}
`;

const UPDATE_JOB_DETAILS = gql`
mutation UpdateJobDetails($uniqueId: ID!, $jobDetails: JobDetailsInput) {
  updateJobDetails(uniqueId: $uniqueId, jobDetails: $jobDetails) {
    ... on Success {
      uniqueId
      message
    }
    ... on Error {
      errorCode
      reason
    }
  }
}
`;

const UPDATE_PERSONAL_ADVISOR = gql`
mutation UpdatePersonalAdvisor($uniqueId: ID!, $personalAdvisor: PersonalAdvisorInput) {
  updatePersonalAdvisor(uniqueId: $uniqueId, personalAdvisor: $personalAdvisor) {
    ... on Success {
      uniqueId
      message
    }
    ... on Error {
      errorCode
      reason
    }
  }
}
`;

const UPDATE_EDUCATION = gql`
mutation UpdateEducation($uniqueId: ID!, $education: EducationInput) {
  updateEducation(uniqueId: $uniqueId, education: $education) {
    ... on Success {
      uniqueId
      message
    }
    ... on Error {
      errorCode
      reason
    }
  }
}
`;

const UPDATE_ADDITIONAL_DETAILS = gql`
mutation UpdateAdditionalDetails($uniqueId: ID!, $additionalDetails: AdditionalDetailsInput) {
  updateAdditionalDetails(uniqueId: $uniqueId, additionalDetails: $additionalDetails) {
    ... on Success {
      uniqueId
      message
    }
    ... on Error {
      errorCode
      reason
    }
  }
}
`;
const GENERATE_UPLOAD_URL = gql`
mutation GenerateUploadUrl($fileName: String!, $fileType: String!) {
  generateUploadUrl(fileName: $fileName, fileType: $fileType) {
    ... on UploadUrlResponse {
      url
      fields
    }
    ... on Error {
      errorCode
      reason
    }
  }
}
`;
const UPDATE_LANDLORD_ATTACHMENT = gql`
mutation UpdateLandlordAttachment($uniqueId: ID!, $attachment: AttachmentInput) {
  updateLandlordAttachment(uniqueId: $uniqueId, attachment: $attachment) {
    ... on Success {
      uniqueId
      message
    }
    ... on Error {
      errorCode
      reason
    }
  }
}
`;

export {
  ADD_USER, CREATE_BASIC_ROOM, GENERATE_UPLOAD_URL, UPDATE_ADDITIONAL_DETAILS, UPDATE_EDUCATION, UPDATE_JOB_DETAILS, UPDATE_LANDLORD_ATTACHMENT, UPDATE_PERSONAL_ADVISOR
};

