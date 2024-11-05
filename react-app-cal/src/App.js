import './App.css';
import { useReducer, useState } from 'react';

function App() {
  
    const [count, countDispatch] = useReducer (countReducer, 0); 
  
    function countReducer(oldCount, action) {
      switch (action.type) {
        case 'CLICK':
          return action.num;
        default:
          return oldCount;
      }
    }

  return (
    <div>
      <h3>계산기</h3>
      <div>
        {/* <div><span>식:</span>{input}</div> */}
        <div><span>식:</span>{count}</div>
        {/* <div><span>결과:</span>{result}</div> */}
        <div><span>결과:</span>test</div>
      </div>

      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => 
            countDispatch({type:'CLICK', num: num})  }>
            {num}
          </button>
        ))}
      </div>
      {/* <div>
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} onClick={() => inputOper(op)}>
            {op}
          </button>
        ))}
      </div> */}
      {/* <button onClick={calculate}>=</button> */}
      {/* <button onClick={clear}>C</button> */}
    </div>
  );
}


export default App;