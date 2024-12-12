import React, { useState } from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// 회원가입 화면을 반환하는 컴포넌트

const Register = () => {
  
  // 새로운 회원정보를 저장할 state 선언
  const [member, setMember] = useState(null);

  // 입력필드의 이벤트 함수
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
  }

  return (
    <CustomCard>
      <CustomContainer>
        <h3>회원가입</h3>
        {/* Form컴포넌트 -> <form>태그 */}
        <Form>
          {/* Group컴포넌트 -> <div>태그 */}
          {/* controlId -> 자식컴포넌트들(label,input)에 설정됨 */}
          <Form.Group className="mb-3" controlId="member.id">
            {/* Label컴포넌트 -> <label>태그 */}
            <Form.Label>아이디</Form.Label>
            {/* Control컴포넌트 -> <input>태그 */}
            <Form.Control type="text" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="member.password">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="member.name">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" onChange={handleChange} />
          </Form.Group>
          {/* 사용자 권한 -> 옵션 -> 라디오버튼 */}
          <Form.Group className="mb-3" controlId="member.role">
            <Form.Check
              type="radio"
              label="사용자" /* 밖으로 표시되는 이름 */
              id="member.role1"
              name="role"
              value="ROLE_USER" /* 서버에 전달되는 실제 값 */
            />
            <Form.Check
              type="radio"
              label="관리자" /* 밖으로 표시되는 이름 */
              id="member.role2"
              name="role"
              value="ROLE_ADMIN" /* 서버에 전달되는 실제 값 */
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
  )
}

export default Register
