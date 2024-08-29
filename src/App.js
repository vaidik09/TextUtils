import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Aboutus from "./components/Aboutus";

function App() {
  const [mode, setToggle] = useState("light");
  const [alert, setAlert] = useState(null);

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
  };
  const coloredTheme = (cls) => {
    showAlert(mode + " Mode Enabled! with " + cls + " theme", "success");
    removeBodyClasses();
    mode === "light"
      ? document.body.classList.add("bg-" + cls)
      : cls === "primary"
        ? (document.body.style.backgroundColor = "#203354")
        : cls === "danger"
          ? (document.body.style.backgroundColor = "#800000")
          : cls === "warning"
            ? (document.body.style.backgroundColor = "#ac7d0c")
            : document.body.classList.remove("bg-light");
  };

  const toggleMode = () => {
    removeBodyClasses();
    if (mode === "light") {
      setToggle("dark");
      document.body.style.backgroundColor = "#0f172a";
      showAlert("Dark Mode Enabled!", "success");
    } else {
      setToggle("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled!", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar
          title="Apple"
          mode={mode}
          toggleMode={toggleMode}
          coloredTheme={coloredTheme}
        />
        <Alert alert={alert} />
        <div className="container">
          
        <Routes>
            <Route path="/about" element={<Aboutus />}>
            </Route>
            <Route path="/" element={
              <TextForm title="Text Analyzer" mode={mode} alert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
