import React, { useState, useContext } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";

import client from "../apollo/client";
import {
  FORGOT_PASSWORD,
  POST_SIGNIN,
  POST_SIGNUP,
  RESET_PASSWORD,
  VERIFY_EMAIL,
} from "../gql/Auth";

const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [authentificationError, setAuthenticationError] = useState(null);
  const [authentificationSuccess, setAuthenticationSuccess] = useState(null);

  //const { setActiveProfile } = useContext(UserContext)

  function toggleAuthentification() {
    setisAuthenticated(!isAuthenticated);
  }

  /// Load User
  // const [loaduser] = useLazyQuery(LOAD_ME, {
  //   fetchPolicy: `network-only`,

  //   onCompleted: (data) => {
  //     if (data) {
  //       setActiveProfile((user) => {
  //         return {
  //           ...user,
  //           userId: data.me._id,
  //           firstName: data.me.firstName,
  //           lastName: data.me.lastName,
  //           birthDate: data.me.birthDate,
  //           address: data.me.address,
  //           phoneNumber: data.me.phoneNumber,
  //           background: data.me.background,
  //           accountState: data.me.accountState,
  //           profileImageUrl: data.me.avatar,
  //           walletId: data.me.walletId,
  //           email: data.me.local.email,
  //           connectedPageId: data.me.connectedPageId,
  //           connectedPage: data.me.userPages?.find(
  //             (el) => el._id === data.me.connectedPageId,
  //           ),
  //           userPages: data.me.userPages,
  //         }
  //       })
  //       setisAuthenticated(true)
  //     }
  //   },

  //   onError: (error) => {
  //     setisAuthenticated(false)
  //   },
  // })

  /// create Account
  const [createAccount] = useMutation(POST_SIGNUP, {
    onCompleted: (data) => {
      console.log(data);
      if (data) {
        setAuthenticationSuccess(
          "Account created successfully ,please verify your email"
        );
      }
    },
    onError: (error) => {
      setAuthenticationError(error.graphQLErrors[0].message);
    },
  });
  ///Login

  const [login] = useMutation(POST_SIGNIN, {
    onCompleted: (data) => {
      console.log(data);
      if (data) {
        localStorage.setItem("accessToken", data.login.accessToken);
        localStorage.setItem("refreshToken", data.login.refreshToken);
        // loaduser()
      }
    },
    onError: (error) => {
      setAuthenticationError(error.graphQLErrors[0].message);
    },
  });

  //logout
  async function logout() {
    await localStorage.clear();
    await client.clearStore();
    await toggleAuthentification();
  }
  //forgetPassword
  const [forgotPassword] = useMutation(FORGOT_PASSWORD, {
    onCompleted: (data) => {
      console.log(data);
      if (data) {
        setAuthenticationSuccess("Mail sent successfully");
      }
    },
    onError: (error) => {
      setAuthenticationError(error.graphQLErrors[0].message);
    },
  });

  //verifyEmail

  const [verifyEmail] = useMutation(VERIFY_EMAIL, {
    onCompleted: (data) => {
      console.log(data);
      if (data) {
        setAuthenticationSuccess("verification success");
      }
    },
    onError: (error) => {
      setAuthenticationError(error.graphQLErrors[0].message);
    },
  });

  ///ResetPassword
  const [resetPassword] = useMutation(RESET_PASSWORD, {
    onCompleted: (data) => {
      console.log(data);
      if (data) {
        setAuthenticationSuccess("password reset success");
      }
    },
    onError: (error) => {
      setAuthenticationError(error.graphQLErrors[0].message);
    },
  });

  ///updatePassword
  // const [updatePassword] = useMutation(UPDATE_PASSWORD, {
  //   onCompleted: (data) => {
  //     console.log(data)
  //     if (data) {
  //       addAlert('Password updated successfully', 'success')
  //     }
  //   },
  //   onError: (error) => {
  //     addAlert(error.graphQLErrors[0].message, 'danger')
  //   },
  // })

  const [siteAccess, setsiteAccess] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setisAuthenticated,
        toggleAuthentification,
        createAccount,
        login,
        logout,
        // loaduser,
        // updatePassword,
        authentificationError,
        setAuthenticationError,
        forgotPassword,
        authentificationSuccess,
        setAuthenticationSuccess,
        verifyEmail,
        resetPassword,
        siteAccess,
        setsiteAccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
