import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./assets/styles/style.css";

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';  
import FirstOfAll from "./pages/FirstOfAll/FirstOfAll.js";
import SignIn from "./pages/SignIn/SignIn.js";
import LogIn from "./pages/LogIn/LogIn.js";
import GetStarted from "./pages/GetStarted/GetStarted.js";
import Home from "./pages/Home/Home.js";
import AdditionalOptions from "./pages/AdditionalOptions/AdditionalOptions.js";
import Folders from "./pages/Folders/Folders.js";
import OpenFolders from "./pages/OpenFolders/OpenFolders.js";
import MakeANote from "./pages/MakeANote/MakeANote.js";

export default function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<FirstOfAll />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/log_in" element={<LogIn />} />
          <Route path="/get_started" element={<GetStarted />} />
          <Route path="/home" element={<Home />} />
          <Route path="/additional_options" element={<AdditionalOptions />} />
          <Route path="/folders" element={<Folders />} />
          <Route path="/open_folders" element={<OpenFolders />} />
          <Route path="/make_a_note" element={<MakeANote />} />
        </Routes>
        {/* <Footer /> */}
        
      </Router>
    </>
  );
}