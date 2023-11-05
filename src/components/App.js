import NavBar from "./NavBar";
import TextForm from "./TextForm";
import About from "./About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    if (mode === "light") {
      document.querySelector(".navbar").setAttribute("data-bs-theme", "dark");
      document.body.style.backgroundColor = "#131518";
      document.body.style.color = "white";

      setMode("dark");
    } else {
      document.querySelector(".navbar").removeAttribute("data-bs-theme");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      setMode("light");
    }
  }

  return (
    <>
    <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <TextForm heading="Enter your text" mode={mode} />
    <About  />
    </>
  );
}

export default App;
