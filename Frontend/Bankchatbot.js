import React from 'react'
import { useState, useRef } from 'react';
import styles from "../Styling/Bank.module.css"
import {Link} from "react-router-dom";
import * as pdfjsLib from 'pdfjs-dist';



const Bankchatbot = () => {

  const [userQuestion, setUserQuestion] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfContent, setPdfContent] = useState('');

  const pdfList = [
    { id: 1, name: "PDF Document 1", url: "/pdfContent/resume.pdf"},
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

  // Handle input change
  const handleInputChange = (e) => {
    setUserQuestion(e.target.value);
  };


  // Handle send message
  const handleSendMessage = () => {
    if (userQuestion.trim()) {
      // Add user question
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: userQuestion },
      ]);

       // Simulate chatbot response with typing animation
       setIsTyping(true);
       setTimeout(() => {
         setChatMessages((prevMessages) => [
           ...prevMessages,
           { sender: 'chatbot', text: "I'm here to help!" },
         ]);
         setIsTyping(false);  // Stop typing animation
       }, 4000); // Chatbot responds after 2 seconds
 
       // Clear user input
       setUserQuestion('');
     }
  };

  const handlePdfClick = async (pdf) => {
    setSelectedPdf(pdf);
    try {
      const pdfContent = await extractPdfContent(pdf.url);
      setPdfContent(pdfContent);
    } catch (error) {
      setPdfContent('Failed to load PDF content.');
    }
  };

  const handleBackClick = () => {
    setSelectedPdf(null); // Clear the selected PDF
    setPdfContent('');
  };

  const extractPdfContent = async (pdfUrl) => {
    try {
      console.log(`Loading PDF from: ${pdfUrl}`); // Debug log
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      console.log(`Loaded PDF with ${pdf.numPages} pages.`); // Debug log
  
      const numPages = pdf.numPages;
      let textContent = '';
  
      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const text = await page.getTextContent();
        text.items.forEach((item) => {
          textContent += item.str + ' ';
        });
      }
      return textContent;
    } catch (error) {
      console.error('Error loading PDF:', error);
      throw new Error('Failed to load PDF content.');
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>BankApp</div>
        <div className={styles.navItems}>
          <span className={styles.username}>Username</span>
          <Link to="/" className={styles.home}>
            <span>Home</span>
          </Link>
        </div>
      </nav>
      <div className={styles.content}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          {selectedPdf ? (
            <>
              <h2 className={styles.sectionTitle}>{selectedPdf.name}</h2>
              <div className={styles.pdfContent}>{pdfContent}</div>
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
              {selectedPdf && (
        <div>
          <h2>{selectedPdf.name}</h2>
          <p>{pdfContent}</p>
        </div>
      )}
            </>
          )}
        </div>
        {/* Right Section */}
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <div className={styles.chatBubbleContainer}>
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${styles[message.sender]}`}
                >
                  {message.text}
                </div>
              ))}
              {isTyping && (
                <div className={styles.typingIndicator}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              )}
            </div>
          </div>
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              value={userQuestion}
              onChange={handleInputChange}
              className={styles.chatInput}
              placeholder="Ask a question..."
            />
            <button onClick={handleSendMessage} className={styles.chatSendButton}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bankchatbot
