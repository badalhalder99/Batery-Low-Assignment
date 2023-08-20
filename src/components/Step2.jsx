import React, { useState } from 'react';
import PDFDownloadButton from './PDFDownloadButton';

function Step2({ formData, csvData, onCSVUpload }) {
  const [maxX, setMaxX] = useState('');
  const [minX, setMinX] = useState('');
  const [maxY, setMaxY] = useState('');
  const [minY, setMinY] = useState('');
  const [maxZ, setMaxZ] = useState('');
  const [minZ, setMinZ] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleMaxXChange = (e) => setMaxX(e.target.value);
  const handleMinXChange = (e) => setMinX(e.target.value);
  const handleMaxYChange = (e) => setMaxY(e.target.value);
  const handleMinYChange = (e) => setMinY(e.target.value);
  const handleMaxZChange = (e) => setMaxZ(e.target.value);
  const handleMinZChange = (e) => setMinZ(e.target.value);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setSelectedFile(file); // Update the state with the selected file
  };

  const renderCSVData = () => {
    if (csvData.length === 0) {
      return (
        <div>
          <p>CSV data not uploaded</p>
          
          <div className="input-group">
            <label>Upload File</label>
            <input
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            value={selectedFile}
            onChange={handleFileChange}
          />
          </div>
          <div className="input-group">
            <label>max_X:</label>
            <input type="number" value={maxX} onChange={handleMaxXChange} />
          </div>
          <div className="input-group">
            <label>max_Y:</label>
            <input type="number" value={maxY} onChange={handleMaxYChange} />
          </div>
          <div className="input-group">
            <label>min_X:</label>
            <input type="number" value={minX} onChange={handleMinXChange} />
          </div>
          <div className="input-group">
            <label>min_Y:</label>
            <input type="number" value={minY} onChange={handleMinYChange} />
          </div>
          <div className="input-group">
            <label>max_Z:</label>
            <input type="number" value={maxZ} onChange={handleMaxZChange} />
          </div>
          <div className="input-group">
            <label>min_z:</label>
            <input type="number" value={minZ} onChange={handleMinZChange} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>CSV data uploaded:</p>
        </div>
      );
    }
  };

  return (
    <div className="step2-container">
      <h2 className="step2-heading">Step 2: Result Page</h2>
      <h3 className="sub-heading">Input Values from Step 1:</h3>
      <p>Project Name: {formData.projectName}</p>
      <p>Project Description: {formData.projectDescription}</p>
      <p>Client: {formData.client}</p>
      <p>Contractor: {formData.contractor}</p>

      <h3 className="sub-heading">CSV Data:</h3>
      {renderCSVData()}

      <PDFDownloadButton data={formData} />

      <h3 className="sub-heading">Result Table:</h3>
      <table className="result-table">
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Step2;
