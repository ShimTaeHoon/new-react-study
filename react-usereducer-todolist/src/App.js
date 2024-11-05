import './App.css';
import { useState, useReducer } from 'react';

function App() {
  
  function inputReducer(oldText, action){

    if (action.type === 'CLICK') {
      return [...oldText, action.text];
    }

    if (action.type === 'DELETE') {
      return oldText.filter((_, index) => index !== action.index);
    }

    return oldText;
  }

  const handleAddClick = () => {
    if (text.trim()) {
      inputDispatch({ type: 'CLICK', text: text });
      setText('');
    }
  };

  const handleDeleteClick = (index) => {
    inputDispatch({ type: 'DELETE', index: index });
  };

  const[input, inputDispatch] = useReducer(inputReducer, []);
  const[text, setText] = useState('');

  return (  

    <div class='App'>
      <h2>To-Do List</h2>
      <input type='text' placeholder='새 할 일 입력' value={text} onChange={(event) => {
          setText(event.target.value);
        }}
      />
      
      <input type='button' value='추가' onClick={handleAddClick} 
      />
      
      <input type='button' value='초기화' onClick={() => {

      }}></input>
      <ul>
      {input.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleDeleteClick(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
