import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // state는 컴포넌트의 생명주기를 관리하는 데이터이므로
  // 일반함수에서는 사용할 수 없음
  let [ count, setCount ] = useState(0);
  // count를 저장하는 state 생성
  let [ text, setText ] = useState(0);

  // App바깥에서 쓰려면 props로 전달
  // 바깥에 function up...등
  //
    function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  const inputline = (e) => {
    setText(e.target.value.length);
  };

  // 글자의 수를 저장할 state
  const [length, SetLength] = useState(0);

  return(
  <div>
    
  </div>
  );
}

export default App;