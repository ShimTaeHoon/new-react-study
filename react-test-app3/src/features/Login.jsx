import React, { useContext, useState } from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login } from '../store/memberSlice';
import { useDispatch } from 'react-redux';

// 로그인 화면을 반환하는 컴포넌트
const Login = () => {
  
  // dispatch: 스토어의 state를 변경하기 위한 도구
  const dispatch = useDispatch();

  // 사용자가 입력한 로그인 데이터를 저장할 state
  const [user, setUser] = useState();

  // 입력필드의 이벤트 함수
  const handleChange = (event) => {
    
    const { name, value } = event.target;
    const newUser = { ...user };
    newUser[name] = value;
    setUser(newUser);
    // console.log(newUser);
    
  }

  // API 기본 주소
  const { host } = useContext(Context);
  
  const navigate = useNavigate();

  // 폼 이벤트 함수
  const handleSubmit = async(event) => {
    
    // 이벤트 방지
    event.preventDefault();

    // 로그인 API 호출
    // 인자: 주소, 바디데이터, 헤더(x..로그인, 회원가입은 헤더필요 x)
    const response = await axios.post(
      `${host}/login`,
      user
    );

    // 로그인에 성공했으면 홈화면으로 이동하고
    // 응답 데이터를(로그인) 스토어에 저장
    if(response.status === 200){
      // 리듀서함수를 사용하여 스토어에 있는 state를 변경(memeberSlice.jsx의 리듀서함수)
      dispatch( login(response.data) );
      navigate('/');
    }else{
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
     
  }

  return (
    <CustomCard>
      <CustomContainer>
        <h3>로그인</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" onChange={handleChange} name="id"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="member.password">
            <Form.Label>패스워드</Form.Label>
            <Form.Control type="password" onChange={handleChange} name="password"/>
          </Form.Group>
            <Button variant="primary" type="submit">
              로그인
            </Button>
        </Form>
      </CustomContainer>
    </CustomCard>
  )
}

export default Login
