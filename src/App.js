// import './App.css';
// import firebase from 'firebase/compat/app'; // appears that this is needed for firebase 9 update
// import 'firebase/compat/firestore'; // haven't run into any problems with the import above, but may need to change to this
// import React, {useState, useEffect} from "react";
// import {} from "./firebase";

import {React} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GetFirebase from "./GetFirebase";
import SnapshotFirebase from "./SnapshotFirebase";
import {AuthProvider} from "./AuthContext";
import SignIn from "./SignIn"
import ResourceLibrary from "./pages/ResourceLibrary"

function App() {
  const get = false;
  // const get = true; // requires you to refresh to update
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={get ? <GetFirebase /> : <ResourceLibrary /> }/>
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
