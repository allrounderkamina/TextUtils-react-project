import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  };
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert('dark mode has been enable','success')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('light mode has been enable','success')
    }
  };
  return (
    <>
      {/* <Navbar/> */}
      {/* <About/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter The Text Analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
