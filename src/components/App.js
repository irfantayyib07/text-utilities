import { useState } from "react";
import NavBar from "./NavBar";
import TextForm from "./TextForm";
import About from "./About";
import Alert from "./Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [timer, setTimer] = useState();

  function toggleMode() {
    if (mode === "light") {
      document.querySelector(".navbar").setAttribute("data-bs-theme", "dark");
      document.body.style.backgroundColor = "#131518";
      document.body.style.color = "white";

      showAlert("dark mode enabled", "success");
      clearTimeout(timer);
      setTimer(setTimeout(() => setAlert(null), 800));
      setMode("dark");
    } else {
      document.querySelector(".navbar").removeAttribute("data-bs-theme");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      showAlert("light mode enabled", "success");
      clearTimeout(timer);
      setTimer(setTimeout(() => setAlert(null), 800));
      setMode("light");
    }
  }

  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type
    });
  }

  return (
    <>
    <Router>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm heading="Enter your text" mode={mode} />} exact />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
