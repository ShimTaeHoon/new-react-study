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
function reducer(oldState, action) {
  
  // state 초기값 설정
  // undefined로 되어 있으면 한번도 초기화 안된것
  if(oldState === undefined){
    return { num:1 }; // 새로운 state 반환
  } else {
    
    if(action.type === 'PLUS'){
      
      const newState = { ...oldState }
      newState.num++;
      return newState;
    }

  }

}

// redux 스토어 생성
// 스토어: state를 전역적으로 관리하는 저장소
const store = createStore(reducer);

function App() {
  return (
    <div class='root'>
      {/* 스토어를 사용하기 위해 자식들을 Provider로 감싸기 */}
      <Provider store={store}>
        <Left1></Left1>
        <Right1></Right1>
      </Provider>
    </div>
  );
}

export default App;
