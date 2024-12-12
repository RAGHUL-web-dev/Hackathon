import React, { useState, useEffect } from 'react';
import styles from "../Styling/Finance.module.css";
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale  } from 'chart.js';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'; // Install react-calendar if not already done
import 'react-calendar/dist/Calendar.css'; // Import calendar styles


ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale );

const Personalfinance = () => {
  // State to manage the currently selected content
  const [selectedContent, setSelectedContent] = useState('Dashboard');

  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [inputVisible, setInputVisible] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [transactionType, setTransactionType] = useState("Increment");
  const [transectionMoney, setTransactionMoney] = useState(0);
  const [reason, setReason] = useState("");
  const [history, setHistory] = useState([]);
  const [initialIncome, setInitialIncome] = useState(0); 
  const [totalExpense, setTotalExpense] = useState(0);
  const [dailyExpenses, setDailyExpenses] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [scheduleText, setScheduleText] = useState('');
  const [scheduleList, setScheduleList] = useState([]);







useEffect(() => {
    localStorage.setItem('scheduleList', JSON.stringify(scheduleList));
  }, [scheduleList]);

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
    if (userInput <= 0) {
      alert("Please enter a value greater than 0.");
      return;
    }

    if(initialIncome < totalExpense) {
      alert("Your using more expense");
    }

    const transactionAmount = parseFloat(userInput);
    const newTransaction = {
      amount: transactionAmount,
      type: transactionType,
      reason,
      date: new Date().toLocaleString(),
    };

    if (transactionType === "Increment") {
      setMonthlyIncome(prevIncome => prevIncome + transactionAmount);
    } else {
      setMonthlyIncome(prevIncome => prevIncome - transactionAmount);
      setTotalExpense(prevExpense => prevExpense + transactionAmount); // Update total expense on decrement

      // Update daily expenses (assumes daily spending is added to the current day)
      const currentDay = new Date().getDay();
      const updatedExpenses = [...dailyExpenses];
      updatedExpenses[currentDay] += transactionAmount;
      setDailyExpenses(updatedExpenses);
    }

    setHistory(prevHistory => [newTransaction, ...prevHistory]);

    setUserInput("");
    setReason("");
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
    const halfIncome = initialIncome / 2;
    setMonthlyIncome(halfIncome);
    setHistory([]);
    setUserInput("");
    setReason("");
    setInputVisible(true);
    setTotalExpense("");
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
    if (savedExpense) setTotalExpense(Number(savedExpense));
    if (savedDailyExpenses) setDailyExpenses(JSON.parse(savedDailyExpenses));
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("monthlyIncome", monthlyIncome);
    localStorage.setItem("history", JSON.stringify(history));
    localStorage.setItem("totalExpense", totalExpense);
    localStorage.setItem("dailyExpenses", JSON.stringify(dailyExpenses));
  }, [monthlyIncome, history, totalExpense, dailyExpenses]);

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

  const chartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
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
    <body>
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
            <li 
              className={`${styles.sidebarItem} ${selectedContent === 'Dashboard' ? styles.active : ''}`} 
              onClick={() => setSelectedContent('Dashboard')}
            >
              Dashboard
            </li>
            <li 
              className={`${styles.sidebarItem} ${selectedContent === 'Wallet' ? styles.active : ''}`} 
              onClick={() => setSelectedContent('Wallet')}
            >
              Wallet
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className={styles.content}>
        {selectedContent === "Dashboard" && ( <div className={styles.dashboard}>
              <h2>Dashboard</h2>

              <div className={`${styles.graphChart} graphChart`}>
              {/* Circular Chart */}
              <div className={styles.chartContainer}>
                <Doughnut data={chartData} options={chartOptions} />
              </div>

              {/* Bar Chart for 7-day Expenses */}
              <div className={`${styles.chartContainer} ${styles.barGraph} barGraph`}>
                <Bar data={barChartData} options={barChartOptions} />
              </div>
        
              </div>
              {/* Transaction History */}
              <div className={styles.history}>
                <h3>Transaction History</h3>
                <ul className={styles.historyList}>
                  {history.map((transaction, index) => (
                    <li
                      key={index}
                      className={`${styles.historyItem} ${
                        transaction.type === "Increment" ? styles.increment : styles.decrement
                      }`}
                    >
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
        <button className={styles.changeButton} onClick={handleChange}>
          Change
        </button>
      )}
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
        <input
          type="number"
          placeholder="Enter Monthly Income"
          onChange={(e) => setUserInput(e.target.value)}
          className={styles.inputBox}
        />
        <button className={styles.saveButton} onClick={handleSave}>
          Save
        </button>
      </div>
      </div>
    )}

<div className={styles.inputContainer}>
                <h2>Enter Transaction</h2>
                <div className={styles.inputBoxContainer}>
                  <select
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    className={styles.inputBox}
                  >
                    <option value="Increment">Increment</option>
                    <option value="Decrement">Decrement</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Amount"
                    onChange={(e) => setUserInput(e.target.value)}
                    className={styles.inputBox}
                  />
                  <input
                    type="text"
                    placeholder="Reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className={styles.inputBox}
                  />
                  <button className={styles.saveButton} onClick={handleTransaction}>
                    Save
                  </button>
                </div>
              </div>

              {/* Transaction History */}
              <div className={styles.history}>
                <h3>Transaction History</h3>
                <ul className={styles.historyList}>
                  {history.map((transaction, index) => (
                    <li
                      key={index}
                      className={`${styles.historyItem} ${
                        transaction.type === "Increment" ? styles.increment : styles.decrement
                      }`}
                    >
                      <div>
                        <strong>{transaction.type}:</strong> ${transaction.amount} - {transaction.reason}
                      </div>
                      <div className={styles.date}>{transaction.date}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reset Button */}
              <button className={styles.resetButton} onClick={handleReset}>
                Reset
              </button>

  </div>
  
  
)}



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