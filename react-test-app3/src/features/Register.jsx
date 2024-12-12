import React, { useContext, useState } from 'react';
import { CustomCard, CustomContainer } from '../components/Styles';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from '../index';

// 회원가입 화면을 반환하는 컴포넌트
const Register = () => {

  // 새로운 회원정보를 저장할 state 선언
  const [member, setMember] = useState(null);

  // 입력필드의 이벤트 함수
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newMember = { ...member };
    newMember[name] = value;
    setMember(newMember);
  }

  // useNavigate hook을 컴포넌트 내부로 이동
  const navigate = useNavigate();

  // API주소
  const {host} = useContext(Context);

  // 폼 이벤트 함수
  const handleSubmit = async (event) => {
    
    event.preventDefault();

    // 회원 가입 API 호출
    const response = await axios.post(
      `${host}/register`,
      member
    );

    console.log(response);

    // 회원가입에 성공했으면 로그인화면으로 이동
    if (response.status === 201) {
      navigate('/login');
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  };

  return (
    <CustomCard>
      <CustomContainer>
        <h3>회원가입</h3>
        {/* Form컴포넌트 -> <form>태그 */}
        <Form onSubmit={handleSubmit}>
          {/* Group컴포넌트 -> <div>태그 */}
          {/* controlId -> 자식컴포넌트들(label, input)에 설정됨 */}
          <Form.Group className="mb-3" controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" onChange={handleChange} name="id" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="member.password">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" onChange={handleChange} name="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="member.name">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" onChange={handleChange} name="name" />
          </Form.Group>
          {/* 사용자 권한 -> 옵션 -> 라디오버튼 */}
          <Form.Group className="mb-3" controlId="member.role">
            <Form.Check
              type="radio"
              label="사용자" /* 밖으로 표시되는 이름 */
              id="member.role1"
              name="role"
              value="ROLE_USER" /* 서버에 전달되는 실제 값 */
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="관리자" /* 밖으로 표시되는 이름 */
              id="member.role2"
              name="role"
              value="ROLE_ADMIN" /* 서버에 전달되는 실제 값 */
              onChange={handleChange}
            />
          </Form.Group>

          {/* 일반 버튼X submit 버튼은 특별한 기능이 있음 */}
          {/* 폼데이터를 서버에 전달하는 역할 */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </CustomContainer>
    </CustomCard>
  );
}

export default Register;
