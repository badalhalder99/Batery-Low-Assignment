import React, { useState } from "react";

function Step1({ onSubmit }) {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Step 1: Input Fields</h2>
      <div className="form-group">
        <label>Project Name:</label>
        <input
          type="text"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Project Description:</label>
        <input
          type="text"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Client:</label>
        <input
          type="text"
          name="client"
          value={formData.client}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Contractor:</label>
        <input
          type="text"
          name="contractor"
          value={formData.contractor}
          onChange={handleChange}
        />
      </div>
      <button className="submit-button" type="submit">Next</button>
    </form>
  );
}

export default Step1;
