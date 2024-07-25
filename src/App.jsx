import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [amount,setAmount]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [interest,setInterest]=useState(0)
  console.log(amount,rate,year);
  const calculate=(e)=>{
      const output=amount*year*rate/100
      console.log(output);
      setInterest(output)
  }
  const reset=(e)=>{
    setAmount(0)
    setRate(0)
    setYear(0)
    setInterest(0)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="headings">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple interest with us ❤️ 
          </p>
        </div>

        <div className="total">
        <h3>&#8377;{interest}</h3>
        <p>Your total interest</p>
      </div>
      <div className="form">
        <form action="
        ">
          <div className="input">
          <TextField className='in' label="Amount"
          onChange={(e)=>setAmount(e.target.value)} value={amount||""} variant="outlined" />
          <TextField className='in' label="Rate" onChange={(e)=>setRate(e.target.value)} value={rate||""}  variant="outlined" />
          <TextField className='in' label="Year" onChange={(e)=>setYear(e.target.value)}  value={year||""}variant="outlined" />
          </div>
          <div className="button">
          <Button onClick={calculate} variant="outlined">Calculate </Button>

           <Button onClick={reset} variant="outlined">Reset </Button>
          </div>
        </form>
      </div>
      
      </div>
      
      
    </div>
  );
}

export default App;
