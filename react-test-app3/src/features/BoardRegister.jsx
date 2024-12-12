import styled from 'styled-components';
// bootstrap에서 가져오기
import { Form, Button } from 'react-bootstrap';
import { CustomCard,CustomContainer } from '../components/Styles';
import { useState, useContext } from 'react';
import { Context } from '../index';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BoardRegister = () => {

  // controlId는 아무 값이나 입력하면 자동으로 label과 input에 설정됨

  // 사용자가 입력한 게시물 데이터를 저장
  // const [ board, setBoard ] = useState(null);
  const [ board, setBoard ] = useState(null);

  // 페이지를 이동하는 navigate 객체 생성
  const navigate = useNavigate();

  // 스토어에서 토큰 가져오기
  const token = useSelector( state => {
    
    console.log(state);
    return state.member.token

  });
    
  console.log(token);

  // 입력필드의 이벤트 함수
  // 매개변수: event (이벤트가 발생한 엘리먼트가 주입 됨)
  const handleChange = (event) => {

    // console.log(event.target);
    // 엘리먼트에서 필요한 데이터를 추출 (name과 입력한 값)
    const { name, value } = event.target;

    // console.log(name, value);

    // 사용자가 입력한 데이터를 state에 저장
    // state의 복제본 생성
    let newBoard = { ...board };

    // name 속성은 key로, 사용자가 입력한 데이터를 value로 저장
    newBoard[name] = value;

    setBoard(newBoard);
    // console.log(newBoard);

  }

  // API 주소
  const { host } = useContext(Context);
  // console.log(host);

  // 폼 이벤트 함수
  // 사용자가 입력한 게시물을 API를 통해 등록
  const handleSubmit = async(event) => {

    // 버튼을 클릭하여 화면이 이동이 되는 기능을 방지
    event.preventDefault();

    // 게시물데이터를 폼데이터 형식으로 변경
    const formData = new FormData();
    formData.append('title', board.title);
    formData.append('content', board.content);

    // 게시물 등록 API 호출
    // 인자: 주소, 바디데이터 ,헤더
    const response = await axios.post(
      `${host}/board/register`,
      formData,
        {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzMxMTYzMTIsImV4cCI6MTczNTcwODMxMiwic3ViIjoidXNlcjEifQ.Yy6zWzGh26o8GBHX-j3H1xXEM_ZvSXkL0Cv0XjK7TFE'
        }
      }
    );

    // console.log(response);
    
    // 정상적으로 응답을 받았다면 리스트 화면으로 이동
    // 그렇지 않다면 에러 발생
    if(response.status === 201){
      navigate('/board/list');
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  }

  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 등록</h3>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="board.title">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" name="title" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3} name="content" onChange={handleChange}/>
        </Form.Group>
        <Button variant="secondary" type='submit'>등록</Button>
        </Form>
      </CustomContainer>
    </CustomCard>
  );
}

export default BoardRegister