import {MouseEventHandler, useState } from 'react';
import './App.css'

interface CounterProps {
  count?: number;
  inc?: MouseEventHandler;
}

const CountDisplay = ({ count }: CounterProps) => <div>{count}</div>

const Button = ({ inc }: CounterProps) => <button className='myButton' onClick={inc}></button>

function App() {
  const [counter, setCounter] = useState(0);
  const inc = () => setCounter(counter + 1);

  return (
    <>
      <CountDisplay count={counter}></CountDisplay>
      <Button inc={inc}></Button>
      <button className="myButton" style={counter < 10 ? { background: "blue" } : { background: "red" }}>
      </button>
    </>
  );
}

export default App;
