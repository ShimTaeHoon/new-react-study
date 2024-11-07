import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './features/Home';
import Register from './features/Register';
import Login from './features/Login';

function App() {

  // Router로 URL경로에따라 컴포넌트 설정
  // 예: / -> Home 컴포넌트
  //     /board/list -> BoardList 컴포넌트

  return (
    <div>
     
      <Routes>
        {/* 중첩 라우트 설정 */}
        {/* / 경로로 이동하면 Layout 컴포넌트가 렌더링 */}
        <Route path="/" element={ <Layout></Layout> }>
          {/* 중첩 라우트는 부모와 자식 컴포넌트가 함께 렌더링되는 구조 */}
          {/* 예: /register : <Layout> + <Register> */}
          <Route path="/" element={ <Home></Home> } ></Route>
          <Route path="/register" element={ <Register></Register> } ></Route>
          <Route path="/login" element={ <Login></Login> } ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;