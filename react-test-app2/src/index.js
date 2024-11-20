import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';

// API 서버 주소
let host = 'http://localhost:8080';

// Context 생성
// Context: 여러 컴포넌트에서 값을 공유할 때 사용
// Store, Slice: 여러 컴포넌트에서 state를 공유할 때 사용
export const Context = createContext();

// Router: URL 주소에따라 화면을 전환하는 기능
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 앱에 라우터 설정
  <BrowserRouter>
    <React.StrictMode>
      {/* Context.Provider로 App컴포넌트 감싸기 */}
      {/* 하위 컴포넌트들에게 host 데이터 전달 */}
      <Context.Provider value={ {host} }>
        <App />
      </Context.Provider>
    </React.StrictMode>
  </BrowserRouter>
);