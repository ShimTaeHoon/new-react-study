import './App.css';
import Counter from './component/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';

// redux -> redux toolkit 방식으로 변경!

// redux toolkit? redux + 부가기능
// 1. 스토어를 기능별로 나눌 수 있음
// 2. state의 불변성을 유지할 필요가 없음

// toolkit으로 스토어를 만드는 방법
// 카운터 슬라이스 생성 > 슬라이스를 모아서 스토어 생성

// 변경!
// reducer + createStore => createSlice + configureStore

// Redux toolkit의 액션 함수 사용하기!

function App() {
  return (
    <div>
      {/* Provider로 앱에 스토어 주입 */}
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
