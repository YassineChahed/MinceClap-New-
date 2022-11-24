import logo from "./assets/img/logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Routes from "./Routing/Routes";
import Profile from "./pages/Profile";
import Deals from "./pages/Deals";
import Likes from "./pages/Likes";
import Chat from "./components/chat/Chat";
import SingupModal from "./modals/SingupModal";
// import Likes  from "./pages/Likes ";

import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { login } = useContext(AuthContext);
  const [isConnected, setIsConnected] = useState(false);
  let email = "brounouzita@gmail.com";
  let password = "123456789";
  const connectUser = async () => {
    return await login({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  };
  useEffect(() => {
    connectUser();
    console.log("User Connected", connectUser());
  }, []);

  return (
    <>
      <Router>
        <Chat />

        <NavBar />

        <Chat />

        <Routes>
          {/* <Route component={Routes} />  */}
          <Route exact path="/" element={<Home isConnected={isConnected} />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Deals" element={<Deals />} />*
        </Routes>

        <SingupModal />
      </Router>
    </>
  );
}

export default App;
