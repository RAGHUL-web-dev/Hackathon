import React from 'react'
import { useState, useRef } from 'react';
import styles from "../Styling/Bank.module.css"
import {Link} from "react-router-dom";



const Bankchatbot = () => {

  const [prompt, setPrompt] = useState("");
  const [displayPrompt, setDisplayPrompt] = useState("");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const pdfList = [
    { id: 1, name: "PDF Document 1", url: "./path/to/pdf2.pdf"},
    { id: 2, name: "PDF Document 2", url: "/path/to/pdf2.pdf" },
    { id: 3, name: "PDF Document 3", url: "/path/to/pdf3.pdf" },
    { id: 4, name: "PDF Document 4", url: "./path/to/pdf2.pdf"},
    { id: 5, name: "PDF Document 5", url: "/path/to/pdf2.pdf" },
    { id: 6, name: "PDF Document 6", url: "/path/to/pdf3.pdf" },
    { id: 7, name: "PDF Document 7", url: "./path/to/pdf2.pdf"},
    { id: 8, name: "PDF Document 8", url: "/path/to/pdf2.pdf" },
    { id: 9, name: "PDF Document 9", url: "/path/to/pdf3.pdf" },
    // Add more PDFs as needed
  ];

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handlePromptSubmit = () => {
    setDisplayPrompt(prompt);
    setPrompt("");
  };

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf); // Set the selected PDF
  };

  const handleBackClick = () => {
    setSelectedPdf(null); // Clear the selected PDF
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>BankApp</div>
        <div className={styles.navItems}>
          <span className={styles.username}>Username</span>
          <Link to="/" style={{textDecoration:"none", color:"whiie"}}><span>Home</span></Link>
        </div>
      </nav>
      <div className={styles.content}>
        {/* Left Section */}
        <div className={styles.leftSection}>
         {selectedPdf ? (
            <>
              <h2 className={styles.sectionTitle}>{selectedPdf.name}</h2>
              <p className={styles.pdfContent}>{selectedPdf.content}</p>
              <button onClick={handleBackClick} className={styles.backButton}>
                Back
              </button>
            </>
          ) : (
            <>
              <h2 className={styles.sectionTitle}>Available PDFs</h2>
              <ul className={styles.pdfList}>
                {pdfList.map((pdf) => (
                  <li
                    key={pdf.id}
                    className={styles.pdfItem}
                    onClick={() => handlePdfClick(pdf)}
                  >
                    {pdf.name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.promptDisplay}>
            {displayPrompt ? <p className={styles.promptText}>{displayPrompt}</p> : "Your prompt will appear here..."}
          </div>
          <div className={styles.promptInput}>
            <input
              type="text"
              value={prompt}
              onChange={handleInputChange}
              className={styles.inputField}
              placeholder="Enter your prompt..."
            />
            <button onClick={handlePromptSubmit} className={styles.submitButton}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bankchatbot