import React from 'react';
import './App.css';
import styled from 'styled-components';

// styled로 버튼 만들기
// 백틱 사이에 CSS를 그대로 작성
const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

// SimpleButton 상속받아 스타일 확장하기
// 폰트색/배경색 + 폰트크기
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

// 일반 방식으로 버튼 컴포넌트 생성
const ReactButton = (props) => {
  
  // className은 스타일드에서 사용하는 속성으로
  // className을 추가해야 스타일이 적용됨
  console.log(props);
  return (
    <button className={props.className}>{props.children}</button>
  );
}

// ReactButton 버튼을 상속받는 styled 버튼 추가
const LargeReactButton = styled(ReactButton)`
  font-size: 50px;
`;

// 함수와 조건문을 사용하여 스타일 지정하기
// 함수에서 리턴되는 값이 color가 됨
const PrimaryButton = styled.button`
  color: ${
    function(props){
      // primary 값이 있으면 흰색, 없으면 파란색
      if(props.primary) { // primary가 boolean이라 if(props.primary===true)
        return 'white';
      } else {
        return 'blue';
      }
    }
  }
`;

function App() {
  return (
    <div className="App">
        <SimpleButton>Simple</SimpleButton>
        <LargeButton>Large</LargeButton>
        <ReactButton>React</ReactButton>
        <LargeReactButton>LargeReact</LargeReactButton>
        <PrimaryButton>PrimaryButton</PrimaryButton>
        <PrimaryButton primary>PrimaryButton</PrimaryButton>
    </div>
  );
}

export default App;
