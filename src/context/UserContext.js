import React, { useState } from "react";

const UserContext = React.createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const [activeProfile, setActiveProfile] = useState(user);
  function switchProfile(profile) {
    setActiveProfile(profile);
  }

  const [profileSwitcher, setProfileSwitcher] = useState(false);
  const [myReservations, setMyReservations] = useState([]);

  const [myTickets, setMyTickets] = useState([]);

  const [myInvitations, setMyInvitations] = useState([]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        activeProfile,
        setActiveProfile,
        switchProfile,
        profileSwitcher,
        setProfileSwitcher,
        myReservations,
        setMyReservations,
        myTickets,
        setMyTickets,
        myInvitations,
        setMyInvitations,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContextProvider, UserContext };
