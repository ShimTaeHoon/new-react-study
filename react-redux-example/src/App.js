import './App.css';
import { Left1 } from './component/Left';
import { Right1 } from './component/Right';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// redux: 앱 전역에서 state를 관리하는 도구
// 이 도구를 통해 컴포넌트 간에 state를 공유할 수 있음

// Provider: 하위 컴포넌트들에게 스토어를 전달하는 역할

// state를 생성하기 위해 redux를 사용

// state 변경 로직을 가지고 있는 함수를 정의
// 리덕스에서 state를 관리할 때는 object로 관리

// 리듀서 함수 정의 -> 스토어 생성 -> Provider 설정

// 리듀서 함수 정의: state 상태 변경 로직
// 인자: 이전state, action(명령과 작업에 필요한 데이터)
// 리턴값: 새로운 state
function reducer(currentState, action) {
  
  // state 초기값 설정
  // undefined로 되어 있으면 한번도 초기화 안된것
    // if(currentState === undefined){
    //   return { num:1 }; // 새로운 state 반환
    // }
    
    // state 복제본 생성
    // 1. react는 이전 state를 유지하려는 성격이 있음
    // 2. object는 주소값을 가지고 있기 때문에 값을 수정해도 변화가 없음
    const newState = {...currentState};
  
    if(action.type === 'PLUS'){
      // newState는 여러건이기 때문에 특정 state를 꺼내야함!
      newState.num++; // state값 변경
    }

    return newState;

  }

// redux 스토어 생성
// 스토어: state를 전역적으로 관리하는 저장소
// 리듀서 함수, state의 초기값
const store = createStore(reducer, { num:1 });

function App() {
  return (
    <div class='root'>
      <h1>Root</h1>
      <div id='grid'>
      {/* 3.Provider설정 - 스토어를 사용할 준비 완료 */}
      {/* 스토어를 사용하기 위해 자식들을 Provider로 감싸기 */}
      <Provider store={store}>
        <Left1></Left1>
        <Right1></Right1>
      </Provider>
      </div>
    </div>
  );
}

export default App;
