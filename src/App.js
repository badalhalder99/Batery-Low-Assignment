import React, { useState } from "react";
import Step2 from "./components/Step2";
import Step1 from "./components/Step1";
import "./style.css";

function App() {
  const [formData, setFormData] = useState({});
  const [csvData, setCSVData] = useState([]);
  const [step, setStep] = useState(1);

  const handleStep1Submit = (data) => {
    setFormData(data);
    setStep(2);
  };

  const handleCSVUpload = (data) => {
    setCSVData(data);
  };

  return (
    <div className="App">
      {step === 1 && <Step1 onSubmit={handleStep1Submit} />}
      {step === 2 && (
        <Step2
          formData={formData}
          csvData={csvData}
          onCSVUpload={handleCSVUpload}
        />
      )}
    </div>
  );
}

export default App;

