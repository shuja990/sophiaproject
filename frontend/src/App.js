import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Feedback from "./Components/Feedback";
import About from "./Components/About";
import Navigation from "./Components/Navbar";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,logEvent  } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVQWkpG46kt2z5pSIcvwO59cuj2GXy-i4",
  authDomain: "sophia-29aba.firebaseapp.com",
  projectId: "sophia-29aba",
  storageBucket: "sophia-29aba.appspot.com",
  messagingSenderId: "818160053313",
  appId: "1:818160053313:web:534a9c714d6d4a9620eac0",
  measurementId: "G-BRTCE6P9BX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
logEvent(analytics,'screen_view', { screen_name: window.location.pathname });
export const db = getFirestore(app);
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Navigation theme={theme} setTheme={setTheme} />
      <Routes>
        <Route exact path="/*" element={<Home theme={theme} />} />
        <Route exact path="/feedback" element={<Feedback theme={theme} />} />
        <Route exact path="/about" element={<About theme={theme} />} />
      </Routes>
    </>
  );
}

export default App;
