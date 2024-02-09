import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./SignupPage/SignupPage";
import Login from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import Navbar from "../Components/Navbar/Navbar";
import Chat from "../Components/Chat/Chat";
import AllChats from "../Components/AllChats/AllChats";

import Sidebar from "../Components/Sidebar/Sidebar";
import Messages from "../Components/Messages/Messages";
import InputPanel from "../Components/InputPanel/InputPanel";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/chat" element={<Chat />} />

        <Route path="/allchats" element={<AllChats />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/messages" element={<Messages/>}/>
      <Route path="/inputpanel" element={<InputPanel/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
