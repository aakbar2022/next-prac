import { gql } from "@apollo/client";

const CREATE_BASIC_LANDLORD = gql`
  mutation CreateBasicLandLord($basicDetails: BasicDetailsInput!) {
  createBasicLandLord(basicDetails: $basicDetails) {
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

const UPDATE_LANDLORD_PROPERTY_INFO = gql`
mutation UpdateLandlordPropertyInfo($uniqueId: ID!, $propertyInfo: PropertyInfoInput) {
  updateLandlordPropertyInfo(uniqueId: $uniqueId, propertyInfo: $propertyInfo) {
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
const UPDATE_LANDLORD_PROPERTY_COMPLAINT = gql`
mutation UpdateLandlordPropertyComplaint($uniqueId: ID!, $propertyComplaint: PropertyComplaintInput) {
  updateLandlordPropertyComplaint(uniqueId: $uniqueId, propertyComplaint: $propertyComplaint) {
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
const LANDLORD_RENT_EXPECTATION = gql`
mutation UpdateLandlordRentExpectations($uniqueId: ID!, $rentExpectations: Int!) {
  updateLandlordRentExpectations(uniqueId: $uniqueId, rentExpectations: $rentExpectations) {
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
const LANDLORD_LEGEL = gql`
mutation UpdateLandlordLegal($uniqueId: ID!, $legal: LegalInput) {
  updateLandlordLegal(uniqueId: $uniqueId, legal: $legal) {
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
  CREATE_BASIC_LANDLORD, LANDLORD_LEGEL, LANDLORD_RENT_EXPECTATION, UPDATE_LANDLORD_PROPERTY_COMPLAINT, UPDATE_LANDLORD_PROPERTY_INFO
};

