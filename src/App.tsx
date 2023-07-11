import {MouseEventHandler, useState, useRef, useEffect} from 'react';
import './App.css'

//typing props for components below

interface CountProps {
  count: number;
}

interface ButtonProps {
  inc: MouseEventHandler;
}

interface CanvasProps {
  width: number;
  height: number;
  isRed: boolean;
}

//component that displays the current count, gets updated count prop from parent component App
const CountDisplay = ({ count }: CountProps) => <div>{count}</div>

//component that functions as an increment button, onClick event is passed as prop from parent component App
const Button = ({ inc }: ButtonProps) => <button className='myButton' onClick={inc}></button>

//component providing canvas for drawing the rectangle
const Canvas = ({width, height, isRed}: CanvasProps) => {

  //useRef can be used to access a DOM element directly.
  //passing type to inform TypeScript we are working with Canvas elements

  const canvasRef = useRef<HTMLCanvasElement>(null);

  //useEffect Hook allows you to perform side effects in your components
  //in this case useEffect is dependent on the isRed Boolean, 
  //if it updates, effect is run again

  useEffect(() => {
    if(canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if(ctx) {
        ctx.clearRect(0,0, window.innerWidth, window.innerHeight)
        ctx.fillStyle= isRed ? "red" : "blue";
        ctx.fillRect(0, 10, 65, 65);
      }
    }
  }, [isRed])

  return <canvas ref={canvasRef} height={height} width={width} />;
}

const App = () => {
  //destructuring return value of useState to use below
  const [counter, setCounter] = useState(0);

  //arrow function to increment the counter by one
  const inc = () => setCounter(counter + 1);

  return (
    <>
      <CountDisplay count={counter}></CountDisplay>
      <Button inc={inc}></Button>
      <Canvas width={window.innerWidth} height={window.innerHeight} isRed={counter < 10? false : true}/>
    </>
  );
}

export default App;
