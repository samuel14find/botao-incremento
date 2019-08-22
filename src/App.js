import React from 'react';
import { useState } from 'react';
import './App.css';
import {Button} from "./Buttom";
import {Display} from "./Display";

function App() {
  const [counter, setCounter] = useState(5);
  const incrementCounter = (incrementValue) => setCounter(counter +incrementValue);
  return (
      <div>
        <Button onClickFunction={incrementCounter} increment={1} />
        <Button onClickFunction={incrementCounter} increment={5} />
        <Button onClickFunction={incrementCounter} increment={10} />
        <Button onClickFunction={incrementCounter} increment={100} />
        <Display message={counter} />
      </div>
  );
}
export default App;