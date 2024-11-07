import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { todoSlice } from '../App';

// useDispatch: 스토어에 있는 state를 변경하는 함수
// useSelector: 스토어에 있는 state를 조회하는 함수

// todo ui를 반환하는 컴포넌트
export const Todo = () => {
  
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  // state 중에서 list 조회
  const list = useSelector((state)=>{
    console.log(state);
    return state.todo.todolist;
  });

  return (
    <div>
       <input type="text" value={input} onChange={(event)=>{
          setInput(event.target.value);
        }
      }></input>
        <button onClick={() => {
          // 액션 타입 수정 (슬라이스이름/타입)
          // dispatch( { type:'todoSlice/ADD', text: input} );

          // 액션을 직접 넘기지 않고 액션함수를 사용
          dispatch( todoSlice.actions.ADD(input) );

          setInput('');
        }}>추가</button>
          <button onClick={()=>{
            
            // 디스패치에 ''액션을 전달
            // dispatch( { type: 'todoSlice/RESET' } );
            // todoDispatch({ type: 'RESET' })

            // 액션타입을 직접 전달하지 않고 액션함수 사용
            dispatch(todoSlice.actions.RESET());
          }}>초기화</button>
       <ul>
          {/* 배열의 map함수를 사용하여 li 태그 생성 */}
          {/* jsx에서 태그를 동적으로 생성할때는 key 입력해야함 */}
          { list.map( (todo)=>{
            return (<li key={todo.id}>
              {todo.text}
              <button onClick={()=>{
                // 단건삭제는 삭제할 대상을 지정해야함
                // 조건: 식별자 (아이디, 번호 등..)
                // dispatch( { type:'todoSlice/DELETE', id: todo.id } );

                dispatch( todoSlice.actions.DELETE(todo.id) );

              }}>삭제</button>
              </li>);
          } ) }
       </ul>
       
    </div>
  )
}
