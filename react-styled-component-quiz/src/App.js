  import './App.css';
  // 먼저 npm install react-router-dom
  import { Routes, Route, NavLink } from 'react-router-dom';
  import styled from 'styled-components';
  import Home from './componenet/Home';
  import About from './componenet/About';
  import Contact from './componenet/Contact';
  import Hungry from './componenet/Hungry';

  const Menu = styled.div`
    background-color: gray;
  `;

  function App(){

    console.log('App..');

    return (
      <>
      {/* Router는 주소에 따라 화면이 전환될때 사용 */}
      {/* 조건: URL 주소 -> if(URL=/about){ */}
      {/* 리턴: 새로운 UI -> return(about)} */}
      {/* 그자리에 <component>가 남음 */}
      <Menu>
        <div> 
          {/* <ul class="ul-nav">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/hungry'>Hungry</NavLink>
          </ul> */}


          {/* <a>태그                     // App + 세부
          링크를 클릭하면 request가 발생됨
          파일을 다시 불러옴 -> 모든 컴포넌트가 재생성됨 */}
          
          {/* Link컴포넌트                // 세부만
          링크를 클릭해도 request가 발생되지 않음
          변경된 컴포넌트만 생성됨 */}
          
          {/* 속도: <a> < <Link> */}

          <a class="ul-nav" href='/'>Home</a>
          <a class="ul-nav" href='/about'>About</a>
          <a class="ul-nav" href='/contact'>Contact</a>

        </div>
      </Menu>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/hungry' element={<Hungry></Hungry>}></Route>
        </Routes>
      </>
    );
  }

  export default App;