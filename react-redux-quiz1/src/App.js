import './App.css';
import { useState, useReducer } from 'react';
import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Clac } from './component/Clac';
import { Provider } from 'react-redux';

function App() {

  console.log('App.....');
  
  // 리듀서 함수 정의
  // 매개변수: 이전 state, action:명령과 작업에 필요한 값
  // 리턴값: 새로운 state
  // state: { } object
  const resultReducer = (oldState, action) => {

    // state 복제본 생성
    let newState = { ...oldState }
    
    // state 중에 result 값을 변경
    // tempResult -> newState.result로 수정!

    switch (action.type) {
      case '+':
        newState.result = action.num1 + action.num2;
        break;
      case '-':
        newState.result = action.num1 - action.num2;
        break;
      case '*':
        newState.result = action.num1 * action.num2;
        break;
      case '/':
        newState.result = action.num1 / action.num2;
        break;
      case '0':
        newState.result = null;
        break;
      default:
        newState.result = null;
    }

    // 변경된 state
      return newState;
  };

  // const [result, resultDispatch] = useReducer(resultReducer, null);

  // useReducer -> creaetStore
  // redux 스토어 생성
  // 인자: 리듀서함수, state초기값
  const store = createStore(resultReducer, { result: 0 });

  // 준비: 
  // 1. 리듀서함수 정의 -> 2. 스토어 생성 -> 3. Provider

  return (
    <div>
      <h3>계산기</h3>
      <Provider store={store}>
        <Clac></Clac>
      </Provider>
    </div>
  );
}

export default App;