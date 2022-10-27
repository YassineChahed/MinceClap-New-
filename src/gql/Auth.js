import { gql } from "@apollo/client";
export const POST_SIGNUP = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      _id
      firstName
    }
  }
`;
export const LOAD_ME = gql`
  {
    me {
      _id
      local {
        email
      }
      firstName
      lastName
      birthDate
      address
      phoneNumber
      background
      accountState
      avatar
      walletId
      connectedPageId
      userPages {
        _id
        pageName
        background
        description
        avatar
      }
    }
  }
`;

export const POST_SIGNIN = gql`
  mutation login($input: LoginUserInput!) {
    login(input: $input) {
      accessToken
      refreshToken
    }
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($input: String!) {
    forgotPassword(email: $input)
  }
`;
export const VERIFY_EMAIL = gql`
  mutation verifyEmail($input: String!) {
    verifyEmail(emailToken: $input)
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword($resetPasswordToken: String!, $password: String!) {
    resetPassword(resetPasswordToken: $resetPasswordToken, password: $password)
  }
`;
export const UPDATE_PASSWORD = gql`
  mutation changePassword(
    $id: ID!
    $currentPassword: String!
    $password: String!
  ) {
    changePassword(
      _id: $id
      currentPassword: $currentPassword
      password: $password
    )
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(_id: $id, input: $input)
  }
`;

export const REFRESH_TOKEN = gql`
  mutation refreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      accessToken
    }
  }
`;
