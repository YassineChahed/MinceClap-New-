import logo from "./assets/img/logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useEffect, useState } from "react";

import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Routes from "./Routing/Routes";
import Profile from "./pages/Profile";
import Deals from "./pages/Deals";
import Likes from "./pages/Likes";
import Chat from "./components/chat/Chat";
import SingupModal from "./modals/SingupModal";
import { AuthContext } from "./context/AuthContext";
// import Likes  from "./pages/Likes ";

function App() {
  const { isAuthenticated, loaduser } = useContext(AuthContext);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token && token.length) loaduser();
  }, []);
  return (
    <>
      <Router>
        <Chat />

        <NavBar />

        <Chat />

        <Routes>
          {/* <Route component={Routes} />  */}
          <Route
            exact
            path="/"
            element={<Home isConnected={isAuthenticated} />}
          />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Deals" element={<Deals />} />*
        </Routes>
        {!isAuthenticated && <SingupModal />}
      </Router>
    </>
  );
}

export default App;
