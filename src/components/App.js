import { useState } from "react";
import NavBar from "./NavBar";
import TextForm from "./TextForm";
import About from "./About";
import Alert from "./Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function toggleMode() {
    if (mode === "light") {
      document.querySelector(".navbar").setAttribute("data-bs-theme", "dark");
      document.body.style.backgroundColor = "#131518";
      document.body.style.color = "white";

      showAlert("dark mode enabled", "success");
      setTimeout(() => setAlert(null), 800);
      setMode("dark");
    } else {
      document.querySelector(".navbar").removeAttribute("data-bs-theme");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      showAlert("light mode enabled", "success");
      setTimeout(() => setAlert(null), 800);
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
    <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} setAlert={setAlert}/>
    <TextForm heading="Enter your text" mode={mode} />
    <About  />
    </>
  );
}

export default App;
