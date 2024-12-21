import React, { useState, useEffect } from 'react';
import styles from "../Styling/Finance.module.css";
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale  } from 'chart.js';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'; // Install react-calendar if not already done
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

import schemeBotIcon from "../images/schemebot.jpg"


ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale );

const Personalfinance = () => {
  // State to manage the currently selected content
  const [selectedContent, setSelectedContent] = useState('Dashboard');

  const [monthlyIncome, setMonthlyIncome] = useState(() => parseFloat(localStorage.getItem('monthlyIncome')) || 0);
  const [inputVisible, setInputVisible] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [transactionType, setTransactionType] = useState("Increment");
  // const [transectionMoney, setTransactionMoney] = useState(0);
  const [reason, setReason] = useState("");
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('history')) || []);
  const [initialIncome, setInitialIncome] = useState(0); 
  const [totalExpense, setTotalExpense] = useState(() => parseFloat(localStorage.getItem('totalExpense')) || 0 );
  const [dailyExpenses, setDailyExpenses] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [scheduleText, setScheduleText] = useState('');
  const [scheduleList, setScheduleList] = useState(() => JSON.parse(localStorage.getItem('scheduleList')) || []);
  const [showAnalysisMessage, setShowAnalysisMessage] = useState(false); // New state to control analysis message visibility
  const [userQuestion, setUserQuestion] = useState('');
    const [chatMessages, setChatMessages] = useState([{ type: 'bot', text: 'Hello! How can I assist you with your finances today?' }]);
    const [isTyping, setIsTyping] = useState(false);
  

  const [halfIncome, setHalfIncome] = useState(0);





  // chatbot
   // Handle chatbot prompt
   



  


  useEffect(() => {
    localStorage.setItem('monthlyIncome', monthlyIncome);
    localStorage.setItem('totalExpense', totalExpense);
    localStorage.setItem('history', JSON.stringify(history));
    localStorage.setItem('scheduleList', JSON.stringify(scheduleList));

    if (monthlyIncome > 0 && totalExpense / monthlyIncome > 0.5) {
      setShowAnalysisMessage(true);
    } else {
      setShowAnalysisMessage(false);
    }
  }, [monthlyIncome, totalExpense, history, scheduleList]);

  const handleAddSchedule = () => {
    const newSchedule = {
      date: selectedDate.toLocaleDateString(),
      text: scheduleText,
    };
    setScheduleList((prev) => [...prev, newSchedule]);
    setScheduleText('');
    setShowScheduleForm(false);
  };

  const handleToggleScheduleForm = () => {
    setShowScheduleForm(!showScheduleForm);
  };

  const handleChange = () => {
    setInputVisible(true);
    setUserInput("");

  };

  const handleTransaction = () => {
    const transactionAmount = parseFloat(userInput);

    if (transactionAmount <= 0) {
      alert("Please enter a value greater than 0.");
      return;
    }

    const newTransaction = {
      amount: transactionAmount,
      type: transactionType,
      reason,
      date: new Date().toLocaleString(),
    };

    if (transactionType === "Decrement") {
      if (transactionAmount > monthlyIncome) {
        // Alert only when expense exceeds income
        alert("Your expense exceeds your monthly income!");
        return;
      }
      setMonthlyIncome((prevIncome) => prevIncome - transactionAmount);
      setTotalExpense((prevExpense) => prevExpense + transactionAmount);

      // Update daily expenses (assumes daily spending is added to the current day)
      const currentDay = new Date().getDay();
      const updatedExpenses = [...dailyExpenses];
      updatedExpenses[currentDay] += transactionAmount;
      setDailyExpenses(updatedExpenses);
    } else {
      setMonthlyIncome((prevIncome) => prevIncome + transactionAmount);
    }

    setHistory((prevHistory) => [newTransaction, ...prevHistory]);
    setUserInput("");
    setReason("");
  };


  // Handle input change
  const handleInputChange = (e) => {
    setUserQuestion(e.target.value);
  };

  // Handle send message
  const handleSendMessage = () => {
    if (userQuestion.trim()) {
      // Add user question to chat
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userQuestion },
      ]);
  
      // Process the question and generate a response
      const lowerCaseQuestion = userQuestion.toLowerCase();
      // const upperCaseQuestion = userQuestion.toUpperCase();
  
      // Response mapping based on keywords
      const responses = {
        hello: 'Hi there! 😊 How can I assist you today?',
        income: `Your current monthly income is $${monthlyIncome}.`,
        expense: `Your total expenses so far are $${totalExpense}.`,
        decrement : `Your remaining balance is $${totalExpense}.`,
        transaction: `You have made ${history.length} transactions.`,
        schedule: `You have ${scheduleList.length} schedules added.`,
        listShedule: `You have ${scheduleList} schedules added.`,
        transactionHistory: 'you can see you transaction in the transaction history part',
        // elsepart: "any other query free to ask",
        cryptocurrency: "Cryptocurrency is a digital or virtual currency that uses cryptography for security. It operates independently of a central authority, with Bitcoin and Ethereum being popular examples.",
        stockMarket: "The stock market is a collection of markets where stocks (shares of ownership in businesses) are traded between investors. Major examples include the NYSE, NASDAQ, and the London Stock Exchange.",
        surviveLowMoney: `Surviving with low money requires smart financial habits. Here are some tips:
        1. Create a Budget: Track your income and expenses to avoid overspending.
        2. Cut Unnecessary Expenses**: Focus on needs (rent, food) and minimize wants (entertainment, luxury items).
        3. Seek Assistance: Look for community resources, food banks, or government aid programs.
        4. Develop Skills: Learn in-demand skills that can lead to better job opportunities or side gigs.
        5. Avoid Debt: Use cash or a debit card to stay within your means.
        6. Save a Little: Even small savings can help during emergencies.
        Remember, resilience and planning go a long way!,`,
        saveMoneyEffectively: `Saving money effectively requires discipline and planning:
        1. Set Clear Goals: Define what you're saving for (e.g., emergency fund, vacation).
        2. Pay Yourself First: Treat savings like a bill and set aside money before spending on anything else.
        3. Automate Savings: Use bank tools to automatically transfer money into a savings account.
        4. Reduce Unnecessary Spending: Audit your expenses and cut non-essential items.
        5. Avoid Impulse Purchases: Stick to your shopping list.
        Over time, small consistent savings add up to significant amounts.`,
        waysToReduceDebt: `To reduce debt effectively:
        1. Create a Payment Plan: Prioritize high-interest debts (like credit cards) first.
        2. Consolidate Debt: Consider consolidating multiple debts into one loan with a lower interest rate.
        3. Increase Income: Look for additional income sources, such as freelancing or part-time work.
        4. Avoid New Debt: Freeze credit card usage until your debt is under control.
        5. Negotiate with Creditors: They may offer reduced rates or payment plans.
        Tackling debt takes effort, but with consistent payments and smart choices, it’s achievable.`,
        investWithLittleMoney: `Investing with little money is possible! Start with:
        1. Robo-Advisors: Use platforms like Betterment or Wealthfront for automatic, low-cost investments.
        2. Fractional Shares: Invest in small portions of stocks through apps like Robinhood or Stash.
        3. ETFs and Index Funds: Low-cost funds like S&P 500 ETFs let you diversify without needing a lot of capital.
        4. Set Up Regular Contributions: Even $10 a week can grow over time with compound interest.
        5. Focus on Learning: Understand basic investment principles to make informed decisions.
        Remember, consistency and patience are key to growing wealth over time.`,
        increaseMyIncome: `Increasing your income can be achieved by:
        1. Upskilling: Learn high-demand skills like coding, digital marketing, or project management.
        2. Freelancing: Offer your skills on platforms like Fiverr or Upwork.
        3. Side Hustles: Explore opportunities like tutoring, driving for a rideshare service, or selling handmade goods.
        4. Negotiating Salary: Ask for a raise if your performance justifies it.
        5. Passive Income: Invest in dividend stocks, rental properties, or create digital products.
        Multiple streams of income can make a significant difference in your financial situation.`,
        improveMyCreditScore: `Improving your credit score involves:
        1. Pay Bills on Time: Late payments negatively impact your score.
        2. Keep Credit Utilization Low: Use less than 30% of your available credit limit.
        3. Avoid Opening Too Many Accounts: Limit new credit inquiries to avoid lowering your score.
        4. Check for Errors: Regularly review your credit report for mistakes and dispute them if needed.
        5. Maintain Long-Term Accounts: Older accounts improve your credit history.
        Good credit opens doors to better loans and financial opportunities.`,
       
      };
      let botResponse = "I'm sorry, I don't have the information you're looking for. Try rephrasing your question or exploring reliable sources for more details.";

      if(lowerCaseQuestion.includes("hello") || lowerCaseQuestion.includes("hi") ){
        botResponse = responses.hello;;
      } else if (lowerCaseQuestion.includes("income") || lowerCaseQuestion.includes("increment") || lowerCaseQuestion.includes("balance")) {
        botResponse = responses.income;
      } else if (lowerCaseQuestion.includes("expense") || lowerCaseQuestion.includes("decrement") || lowerCaseQuestion.includes("spend") || lowerCaseQuestion.includes("used")) {
        botResponse = responses.expense;
      }  else if (lowerCaseQuestion.includes("transaction") ) {
        botResponse = responses.transaction + responses.transactionHistory;
      }  else if (lowerCaseQuestion.includes("schedule")) {
        botResponse = responses.schedule;
      } else if (lowerCaseQuestion.includes("cryptocurrency")) {
        botResponse = responses.cryptocurrency; 
      } else if (lowerCaseQuestion.includes("stock market")) {
        botResponse = responses.stockMarket; 
      } else if (lowerCaseQuestion.includes("how can i survive in this world with low money")) {
        botResponse = responses.investWithLittleMoney; 
      } else if (lowerCaseQuestion.includes("how can i save money effectively")) {
        botResponse = responses.saveMoneyEffectively; 
      } else if (lowerCaseQuestion.includes("what are the best ways to reduce debt")) {
        botResponse = responses.waysToReduceDebt; 
      } else if (lowerCaseQuestion.includes("how can i invest with little money")) {
        botResponse = responses.investWithLittleMoney; 
      } else if (lowerCaseQuestion.includes("how can i increase my income")) {
        botResponse = responses.increaseMyIncome; 
      } else if (lowerCaseQuestion.includes("credit")) {
        botResponse = responses.improveMyCreditScore; 
      }
  
      // Typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "chatbot", text: botResponse },
        ]);
        setIsTyping(false);
      }, 2000); // Chatbot responds after 2 seconds
  
      // Clear user input
      setUserQuestion("");
    }
  };


  const handleSave = () => {
    if (userInput <= 0) {
      alert("Please enter a value greater than 0.");
      return;
    }

    if (transactionType === "Increment") {
      setMonthlyIncome(prevIncome => prevIncome + parseFloat(userInput));
    } else {
      setMonthlyIncome(prevIncome => prevIncome - parseFloat(userInput));
    }

    const newTransaction = {
      amount: userInput,
      type: transactionType,
      reason,
      date: new Date().toLocaleString(),
    };

    
    setHistory(prevHistory => [newTransaction, ...prevHistory]);

    setUserInput("");
    setReason("");
    setInputVisible(false);
  };

  // Reset function to reset all data
  const handleReset = () => {
    // setHalfIncome = initialIncome / 2;
    setMonthlyIncome(halfIncome);
    setHistory([]);
    setUserInput("");
    setReason("");
    setInputVisible(true);
    setTotalExpense("");
    setScheduleText("");
    // setShowAnalysisMessage(false); 
  };
  
  

  // Load data from localStorage on page load
  useEffect(() => {
    const savedIncome = localStorage.getItem("monthlyIncome");
    const savedHistory = JSON.parse(localStorage.getItem("history"));
    const savedInitialIncome = localStorage.getItem("initialIncome");
    const savedDailyExpenses = localStorage.getItem("dailyExpense");
    const savedExpense = localStorage.getItem("totalExpense");
    if (savedIncome) {
      setMonthlyIncome(Number(savedIncome));
    }
    if (savedHistory) {
      setHistory(savedHistory);
    }
    if (savedInitialIncome) {
      setInitialIncome(Number(savedInitialIncome));
    }
    if (savedExpense) { 
      setTotalExpense(Number(savedExpense));
    }
    if (savedDailyExpenses) {
      setDailyExpenses(JSON.parse(savedDailyExpenses));
    }
  }, []);

  // useEffect(() => {
  //   if (totalExpense >= setHalfIncome) {
  //     setShowAnalysisMessage(true); // Show message if total expense exceeds or equals income
  //   // } else {
  //   //   setShowAnalysisMessage(false); // Hide message otherwise
  //   }
  //   // Get the history from localStorage when component mounts
  //   // const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
  //   // setFilteredHistory(storedHistory);
  // }, [totalExpense, monthlyIncome]);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("monthlyIncome", monthlyIncome);
    localStorage.setItem("history", JSON.stringify(history));
    localStorage.setItem("initialIncome", initialIncome);
    localStorage.setItem("totalExpense", totalExpense);
    localStorage.setItem("dailyExpenses", JSON.stringify(dailyExpenses));
  }, [monthlyIncome, history, totalExpense, dailyExpenses, initialIncome]);

  const showAnalysisMessageCondition = totalExpense >= monthlyIncome;

  // const handleSave = () => {
  //   if (userInput <= 0) {
  //     alert("Please enter a value greater than 0.");
  //     return;
  //   }

  //   if (transactionType === "Increment") {
  //     setMonthlyIncome(prevIncome => prevIncome + parseFloat(userInput));
  //   } else {
  //     setMonthlyIncome(prevIncome => prevIncome - parseFloat(userInput));
  //   }

  //   const newTransaction = {
  //     amount: userInput,
  //     type: transactionType,
  //     reason,
  //     date: new Date().toLocaleString(),
  //   };
  //   setHistory(prevHistory => [newTransaction, ...prevHistory]);

  //   setInputVisible(false);
  //   setUserInput("");
  //   setReason("");
  //   setMonthlyIncome(userInput);
  //   setInputVisible(false);
  // };

  // Chart data and options
  const chartData = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Finance Overview',
        data: [monthlyIncome, totalExpense],
        backgroundColor: ['#4caf50', '#f44336'], // Green for Income, Red for Expense
        hoverOffset: 4,
      },
    ],
  };

  // Custom Plugin to Draw Percentage in the Center of Doughnut Chart
  const drawPercentageInCenter = {
    id: 'drawPercentageInCenter',
    beforeDraw: (chart) => {
      const { ctx, width, height, data } = chart;
      const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
      const percentage = Math.round((data.datasets[0].data[1] / total) * 100);

      ctx.save();
      ctx.font = 'bold 24px Arial';
      ctx.fillStyle = 'black';  // Text color
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${percentage}%`, width / 2, height / 2); // Position in the center
      ctx.restore();
    },
  };

  const chartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const percentage = Math.round(tooltipItem.raw / tooltipItem.dataset.data.reduce((a, b) => a + b) * 100);
            return `${tooltipItem.label}: ${tooltipItem.raw} (${percentage}%)`;
          }
        }
      },
    },
  };

  // Chart data and options for the bar chart (7-day expenses)
  const barChartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Daily Expenses',
        data: dailyExpenses,
        backgroundColor: '#f44336', // Red for expenses
        borderColor: '#d32f2f',
        borderWidth: 1,
        // color:"red"
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
    animation: {
      duration: 1000, // For smooth animation
    },
  };

  
  

  return (
    <body  className={`${styles.financeApp} financeApp`}>
      <div className={styles.container}>
        {/* Navbar */}
        <nav className={styles.navbar}>
          <div className={styles.logo}>MyLogo</div>
            <ul className={styles.navItems}>
              <Link to="/" style={{textDecoration:"none", color:"white"}}><li className={styles.navItem}>Home</li></Link>
              <li className={styles.navItem}>Username</li>
            </ul>
        </nav>

        <div className={styles.main}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <h1 className={styles.sidebarTitle}>Menu</h1>
            <ul className={styles.sidebarItems}>
              <li className={`${styles.sidebarItem} ${selectedContent === 'Dashboard' ? styles.active : ''}`} onClick={() => setSelectedContent('Dashboard')}>Dashboard</li>
              <li className={`${styles.sidebarItem} ${selectedContent === 'Wallet' ? styles.active : ''}`} onClick={() => setSelectedContent('Wallet')}>Wallet</li>
            </ul>

            {selectedContent === "Dashboard" && <div className={styles.chatBox}>
            <div className={styles.chatHeader}>
              <div className={styles.chatBubbleContainer}>
                {chatMessages.map((message, index) => (
                  <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
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
              <img src={schemeBotIcon} alt="Chatbot" className={styles.chatbotImage} />
            </div>
          </div>}
          </aside>

          {/* Main Content */}
          <section className={styles.content}>
            {selectedContent === "Dashboard" && ( <div className={styles.dashboard}>
              <h2>Dashboard</h2>
              <div className={styles.graphContainer}>
                {/* Doughnut Chart */}
                <div className={styles.chartBox}>
                  <Doughnut data={chartData} options={chartOptions} />
                </div>

                {/* Bar Chart */}
                <div className={styles.chartBox}>
                  <Bar data={barChartData} options={barChartOptions} />
                </div>
              </div>

             {/* Finance Analysis Section */}
             {showAnalysisMessage && (
             <div className={styles.analysisMessage}>
               <h3 style={{ color: 'red' }}>Warning: Your expenses have reached or exceeded your monthly income!</h3>
               <p>Please consider adjusting your spending to avoid financial strain.</p>
             </div>
              )}
              {/* Transaction History */}
              <div className={styles.history}>
                <h3>Transaction History</h3>
                <ul className={styles.historyList}>
                  {history.map((transaction, index) => (
                    <li key={index} className={`${styles.historyItem} ${transaction.type === "Increment" ? styles.increment : styles.decrement}`}>
                      <div>
                        <strong>{transaction.type}:</strong> ${transaction.amount} - {transaction.reason}
                      </div>
                      <div className={styles.date}>{transaction.date}</div>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>)}

           {selectedContent === "Wallet" && (
           <div className={styles.wallet}>
           {/* Monthly Income Box */}
            <div className={`${styles.iconeExpense} iconeExpense`}>
              <div className={styles.box}>
                <h2>Monthly Income</h2>
                <p>${monthlyIncome || "0.00"}</p>
               {!inputVisible && (
                <button className={styles.changeButton} onClick={handleChange}>Change</button>)}
              </div>

              {/* Total Expense Box */}
              <div className={`${styles.box} ${styles.expenseBox}`}>
                <h2>Total Expense</h2>
                <p>${totalExpense || "0.00"}</p>
              </div>
           </div>

    

            {/* Input Box */}
            {inputVisible && (
            <div className={styles.inputContainer}>
              <h2>Enter Monthly Income</h2>
              <div className={`${styles.inputBoxContainer} inputBoxContainer`}>
                <input type="number" placeholder="Enter Monthly Income" onChange={(e) => setUserInput(e.target.value)} className={styles.inputBox}/>
                <button className={styles.saveButton} onClick={handleSave}>Save</button>
              </div>
            </div>)}

            <div className={styles.inputContainer}>
              <h2>Enter Transaction</h2>
              <div className={styles.inputBoxContainer}>
                <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} className={styles.inputBox}>
                  <option value="Increment">Increment</option>
                  <option value="Decrement">Decrement</option>
                </select>
                <input type="number" placeholder="Amount" onChange={(e) => setUserInput(e.target.value)}className={styles.inputBox}/>
                <input type="text" placeholder="Reason" value={reason} onChange={(e) => setReason(e.target.value)} className={styles.inputBox}/>
                <button className={styles.saveButton} onClick={handleTransaction}>Save</button>
              </div>
            </div>

            {/* Transaction History */}
            <div className={`${styles.history} history`}>
              <h3>Transaction History</h3>
              <ul className={styles.historyList}> 
                {history.map((transaction, index) => (
                  <li key={index} className={`${styles.historyItem} ${ transaction.type === "Increment" ? styles.increment : styles.decrement}`}>
                    <div>
                      <strong>{transaction.type}:</strong> ${transaction.amount} - {transaction.reason}
                    </div>
                    <div className={styles.date}>{transaction.date}</div>
                  </li>
                ))}
              </ul>
             </div>

             {/* Reset Button */}
             <button className={styles.resetButton} onClick={handleReset}>Reset</button>
            </div>)}
          </section>

        {/* Right Sidebar */}
        <aside className={styles.rightSidebar}>
            <button className={styles.scheduleButton} onClick={handleToggleScheduleForm}>
              Want to add some schedule? Click Here
            </button>

            {showScheduleForm && (
  <>
    <div className={styles.overlay} onClick={handleToggleScheduleForm}></div>
    <div className={styles.scheduleForm}>
      <h3>Add Schedule</h3>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <textarea
        placeholder="Enter your schedule"
        value={scheduleText}
        onChange={(e) => setScheduleText(e.target.value)}
        className={styles.scheduleInput}
      />
      <button className={styles.addButton} onClick={handleAddSchedule}>
        Add
      </button>
    </div>
  </>
)}

            <h3>Schedules</h3>
            <ul className={styles.scheduleList}>
              {scheduleList.map((schedule, index) => (
                <li key={index} className={styles.scheduleItem}>
                  <strong>{schedule.date}:</strong> {schedule.text}
                </li>
              ))}
            </ul>
          </aside>
      </div>
      </div>
    </body>
  );
};
 export default Personalfinance
