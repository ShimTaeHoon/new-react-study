  import logo from './logo.svg';
  import './App.css';
  import { Routes, Route, NavLink, useParams } from 'react-router-dom';
  import Home from './component/Home';
  import Contact from './component/Contact';
  import Topics from './component/Topics';

  // useParams: 현재 URL 주소에서 파라미터를 꺼내오는 기능

  // 전체 UI를 반환하는 함수
  function App(){
    
    return (
      <div>
        <h1>Hello React Router DOM</h1>

        {/* a태그 -> Link컴포넌트 */}
        {/* Link -> NavLink */}
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/topics'>Topics</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>

        {/* a태그: 파일을 다시 로드하면서 request(파일불러옴)가 발생됨 */}
        {/* Link컴포넌트: 기존 index.html에 필요한 컴포넌트만 다시 생성함. 
            request 발생안됨
        */}
        {/* Link컴포넌트를 사용하면 페이지 전환 속도가 빨라진다 */}
        {/* url경로와 컴포넌트 설정 */}
        
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          {/* /*는 하위 경로도 포함한다는 의미 */}
          <Route path='/topics/*' element={<Topics></Topics>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          
          {/* 존재하지 않는 경로를 호출하면 'Not Found'를 표시 */}
          <Route path='/*' element={'Not Found'}></Route>
        </Routes>

      </div>
      
    );
  }

  export default App;
