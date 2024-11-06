import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// useSelector: 스토어에서 state를 가져오는 함수
// useDispatch: 스토어에서 state를 변경하는 함수

// + 버튼과 숫자를 담은 UI 반환
const Counter = () => {

  // redux 스토어의 state 중에서 num 가져오기
  const num = useSelector( (state)=>{
    console.log(state);
    return state.num;
  });

  // redux 스토어에서 dispatch 함수 가져오기
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>{
        // 디스패치에 'UP'타입 액션을 전달
        dispatch( { type: 'UP', step: 2 } );
      }}>+</button>
      {num}
    </div>
  )
}

export default Counter
