import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // App.js
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Router 기능 활성화
// 라우트 기능을 활성화하기 위해 BrowserRouter로 최상위 컴포넌트를 감싸기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 최상위 ui컴포넌트에 Router로 감싸기 -> 라우터 기능 사용 가능(Browser, Hash)
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
