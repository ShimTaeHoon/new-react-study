import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Context: 여러 컴포넌트에서 값을 관리할 때 사용
// export해서 외부에서도 Context를 사용할 수 있게..
export const Context = createContext();

// API 기본 주소(전역으로..)
let host = 'http://localhost:8080';

root.render(

  <BrowserRouter>
      {/* 하위 컴포넌트들에게 context 데이터 전달 */}
      <Context.Provider value={ {host} }>
        {/* App 컴포넌트를 Provider로 감싸서 store를 주입(컴포넌트들이 store를 쓸 수 있음 */}
        <Provider store={store}>
          <App />
        </Provider>
      </Context.Provider> 
  </BrowserRouter>
);
