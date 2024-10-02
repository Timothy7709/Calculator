import './App.css';
// import Support from './support';
import {useState, useEffect} from 'react'
import { NumericFormat } from 'react-number-format';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [preState, setPreState] = useState("")
  const [curState, setCurState] = useState("")
  const [input, setInput] = useState("0")
  const [operator, setOperator] = useState(null)
  const [total, setTotal] = useState(false)
  const [history, setHistory] = useState([]);
  // const [showSupport, setShowSupport] = useState(false);

const inputNum = e =>{
  if(total){
    setPreState("")
  }

  curState 
    ? setCurState((pre) => pre + e.target.innerText) 
    : setCurState(e.target.innerText);
  setTotal(false);
};

useEffect(() => {
  setInput(curState)
}, [curState])

useEffect(() => {
  setInput("0")
}, [])


const operatorType = (e) =>{
  setTotal(false)
  setOperator(e.target.innerText)
  if(curState === "") return
  if(preState !== "") {
    equals()
  }else {
    setPreState(curState);
    setCurState("");
  }
};



const equals = (e) => {
// const isSequenceValid = /^\d+[+\-*/]?\d*$/;

if (e?.target.innerText === "=") {
  setTotal(true);
  }

  let cal;
  try {
    switch (operator) {
      case "/":
        if (parseFloat(curState) === 0) {
          throw new Error("Cannot divide by zero");
        }
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      default:
        throw new Error("Invalid operator");
    }

    setHistory((prevHistory) => [cal, ...prevHistory]);

    setInput("");
    setPreState(cal);
    setCurState("");
  } catch (error) {
    setHistory((prevHistory) => ["Err", ...prevHistory]);
    setInput("Err");
  }
};





const del = () =>{
  if (curState.length > 0) {
    setCurState((prev) => prev.slice(0, -1));
  } else if (preState.length > 0) {
    setPreState((prev) => prev.slice(0, -1));
  }
};

// const support = () =>{
//   console.log("Support button clicked");
//   setShowSupport(true);
//   // window.location.href = '/support';
// };

// const closeSupport = () => {
//   setShowSupport(false);
// };

// const submitSupport = (ticketDetails) => {
//   // Handle the support ticket submission (e.g., send to a server)
//   console.log('Support ticket submitted:', ticketDetails);
// };

const reset = () =>{
  setPreState("");
  setCurState("");
  setInput("0");
  setHistory([]);
};

  return <div className="container">
      <div className='screen'>
        <div className='history scrollable-content'>
          {/* Display history here */}
          {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        </div>
        <div className='screen-text'>
          {input !== "" || input === "0" ? (
            <NumericFormat value={input} displayType={'text'}/>
          ) : (
            <NumericFormat value={preState} displayType={'text'}/>
          )}
        </div>
      </div>
      <div className='wrapper'>
        
        
        <div className='btn ' onClick={reset}>C</div>
        <div className='btn' onClick={del}>DEL</div>
        <a href={`/support`} className='link btn brown'>
          <div className='btn brown'>?</div>
        </a>
        <div className='btn orange' onClick={operatorType}>/</div>
        <div className='btn' onClick={inputNum}>1</div>
        <div className='btn' onClick={inputNum}>2</div>
        <div className='btn' onClick={inputNum}>3</div>
        <div className='btn orange' onClick={operatorType}>X</div>
        <div className='btn' onClick={inputNum}>4</div>
        <div className='btn' onClick={inputNum}>5</div>
        <div className='btn' onClick={inputNum}>6</div>
        <div className='btn orange' onClick={operatorType}>-</div>
        <div className='btn' onClick={inputNum}>7</div>
        <div className='btn' onClick={inputNum}>8</div>
        <div className='btn' onClick={inputNum}>9</div>
        <div className='btn orange' onClick={operatorType}>+</div>
        <div className='btn zero' onClick={inputNum}>0</div>
        <div className='btn orange equal' onClick={equals}>=</div>
      </div>
            {/* Conditionally render the Support component
      {showSupport && (
        <Support onClose={closeSupport} onSubmit={submitSupport} />
      )} */}
    </div>;
}

export default App;
