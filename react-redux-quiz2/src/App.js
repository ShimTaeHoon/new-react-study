import { useReducer, useState } from 'react';
import { Todo } from './component/Todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// todo 앱에서 관리하는 state
// state는 왜 쓰지? 값이 변경이 될 때 화면을 다시 생성해야할 때!
// 입력필드의 todo
// todo 리스트 -> 스토어를 통해서 관리

// 스토어 만드는 법
// 리듀서 함수 정의 -> 스토어 생성 -> Provider 설정

// 1. 리듀서 함수 정의: 상태 변경 로직
const todoReducer = (oldState, action) => {
  
  // state의 특징
  // 1. react는 이전 state를 보관하려는 성격이 있음
  // 2. state는 object로 관리되기 때문에 값을 추가해도 변화X
  // object 변수에는 주소값이 저장됨
  // ▼▼▼▼▼▼▼▼▼▼▼▼ 주소값만 변경되기에 state 복제본
  
  // state 복제본 생성
  const newState = { ...oldState }

  switch (action.type) {
    case 'ADD':
      
      // let newList = [ ...oldState ];
      // 새로운 todo의 ID
      let newId = 0;

      // 리스트가 하나도 없으면 0, 있으면 리스트의 길이
      // newState: { todoList:[] }
      if (newState.todolist.length !== 0) {
        newId = newState.todolist.length;
      }

      // 리스트에 새로운 요소 추가
      newState.todolist.push( { id: newId, text: action.text });

      // 새로운 배열X 새로운 state 반환!
      return newState;

      // newList.push({ id: newId, text: action.text });
      // return newList;
    case 'DELETE':
      // state 중에서 list를 꺼내고
      // 리스트에서 선택한 아이디를 제거
      // true인녀석만 삭제 됨. false면 list에 남음
      // filter함수는 원본데이터를 변경하지 않음!
      // 그래서 state의 list를 교체해야함
      const filterList = newState.todolist.filter(todo => {
        
        return todo.id !== action.id
      
      });

      // 변경된 리스트로 교체
      newState.todolist = filterList;

      return newState;

      // return oldState.filter(todo => todo.id !== action.id);

    case 'RESET':
      
      // state 중에 list를 초기화하여 반환
      newState.todolist = [];

      return newState;

    default:
      return oldState;
  }
};

function App() {

  // useReducer->createStore
  // redux 스토어 생성
  // 인자: 리듀서, state 초기값
  const store = createStore( todoReducer, { todolist: [] } );
  
  return (
    <div>
      <h3>To-Do List</h3>
      {/* 3. 스토어를 사용하는 위치에 Provider로 감싸기 */}
      {/* store 주입! */}
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;