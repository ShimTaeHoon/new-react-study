import './App.css';
import { useState, useReducer } from 'react';

function App() {

  function countReducer(oldCount, action){
    
    console.log(oldCount);
    console.log(action);

    if(action.type === 'DOWN'){
      return oldCount - action.num;
    } else if(action.type === 'UP') {
      return oldCount + action.num;
    } else if(action.type === 'RESET'){
      return 0;
    }

  }

  const [count, countDispatch] = useReducer(countReducer, 0);

  const [num, setNum] = useState(0);

  return (
    
    <div class='App'>
      <input type='button' value="-" onClick={() =>{
        countDispatch({type: 'DOWN', num: num})
      }}></input>
      <input type='button' value="0" onClick={()=>{
        countDispatch({type: 'RESET', num: num})
      }}></input>
      <input type='button' value="+" onClick={()=>{
        countDispatch({type: 'UP', num: num})
      }}></input>
      <input type='text' onChange={(event) => {
        setNum(Number(event.target.value));
      }}></input>
    
    <span>{count}</span>
    </div>
  );
}

export default App;
