import './App.css';
import { useState, useReducer } from 'react';

// useState: 값이 변경되면 화면이 다시 렌더링됨
// useReducer: 기능은 같음 + 상태변경 로직을 중앙에서 처리
function App() {
  // state 생성
  // [현재 상태(read only), 값을 변경하는 함수]
  // let [count, setCount] = useState(0); //초기값

  // 리듀서 함수: 이벤트에따라 state를 변경하는 함수
  // 이전 state값, 액션
  // 반환값: 새로운 state
  function countReducer(oldCount, action) {

    console.log(action);
    
    if(action.type === 'UP') {
      return oldCount + action.num;
    } else if(action.type === 'DOWN') {
      return oldCount - action.num;
    } else if(action.type === 'RESET') {
      return 0;
    }
  }

  // 리듀서 함수를 사용하여 state 생성
  // 인자: 리듀서(state을 변경하는 로직을 가지는 함수), state초기값
  // 반환: 현재 state, 값을 변경하는 dispatch함수
  const [count, countDispatch] = useReducer(countReducer, 0);

  // 입력된 숫자
  const [num, setNum] = useState(0);

  return (
    <div class='App'>
     <input type='button' value="-" onClick={()=>{
      countDispatch({type:'DOWN', num: num});
     }}></input>
     <input type='button' value="0" onClick={()=>{
      countDispatch({type:'RESET', num: num});
     }}></input>
     <input type='button' value="+" onClick={()=>{
      countDispatch({type:'UP', num: num});
     }}></input>
     <input type='text' onChange={(event) =>{
      setNum(Number(event.target.value));
     }}></input>
      
     <span>{count}</span>
    </div>
  );
}

export default App;
