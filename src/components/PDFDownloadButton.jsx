import React from "react";
import jsPDF from "jspdf";

function PDFDownloadButton({ data }) {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Result Data", 10, 10);
    let y = 20;
    for (const [field, value] of Object.entries(data)) {
      doc.text(`${field}: ${value}`, 10, y);
      y += 10;
    }
    doc.save("result.pdf");
  };

  return (
    <button onClick={handleDownload}>Download as PDF</button>
  );
}

export default PDFDownloadButton;
