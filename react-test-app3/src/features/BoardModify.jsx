import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Context } from '../index';
import { useContext } from 'react';
import axios from 'axios';

const BoardModify = () => {
  
  // 선택한 게시물 데이터를 state에 저장
  // API를 통해 게시물 조회 -> state에 저장 -> 화면에 다시 출력
  const [ board, setBoard ] = useState(null);

  // URL 주소에 포함된 파라미터 꺼내기
  const params = useParams();

  // console.log(params.no);

  // API 주소
  const { host } = useContext(Context);

  // 컴포넌트가 생성될 때 한번만 API를 호출
  // 인자: 처리할 함수, 주기(한번만)
  useEffect(( )=>{

    // 게시물 상세 조회 API 호출
    const apicall = async () => {

      const response = await axios.get(
      `${host}/board/read?no=${params.no}`,
        {
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzMxMTYzMTIsImV4cCI6MTczNTcwODMxMiwic3ViIjoidXNlcjEifQ.Yy6zWzGh26o8GBHX-j3H1xXEM_ZvSXkL0Cv0XjK7TFE'
          }
        }
      );

      // 정상적으로 응답을 받았다면 200
      // 아니라면 에러
      if(response.status === 200){
        setBoard(response.data);
      } else {
        throw new Error(`api error: ${response.status} ${response.statusText}`)
      }

    }

    apicall();

  },[]);

  // 입력필드의 이벤트 함수
  const handleChange = (event) => {

    // 이벤트가 발생한 엘리먼트에서 필요한 데이터 추출
    const { name, value } = event.target;

    console.log(name, value);

    // 사용자가 수정한 데이터를 state에 업데이트
    // 필드에 수정된 데이터가 출력 됨!

    const newBoard = { ...board };

    newBoard[name] = value;

    setBoard(newBoard);

  }

  const navigate = useNavigate();

  // 폼 이벤트 함수
  const handleSubmit = async (event) => {

    // 버튼 클릭시 이동 방지(submit은 방지해야하지만 버튼은 ㄱㅊ)
    event.preventDefault();

    // 수정 API 호출
    // 인자: 주소, 바디데이터, 헤더
    const response = await axios.put(
      `${host}/board/modify`,
      board,
      {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzMxMTYzMTIsImV4cCI6MTczNTcwODMxMiwic3ViIjoidXNlcjEifQ.Yy6zWzGh26o8GBHX-j3H1xXEM_ZvSXkL0Cv0XjK7TFE'
        }
      }
    );

    // 요청에 성공했다면 상세화면으로 이동
    // 그렇지 않다면 에러 발생
    if(response.status === 204) {
      navigate(`/board/read/${params.no}`);
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  }

  // console.log(host);

  // 삭제 이벤트 함수
  const handleRemove = async () => {
    
    // 게시물 삭제 API 호출
    // 인자: 주소, 헤더
    const response = await axios.delete(
      `${host}/board/remove?no=${board.no}`,
        {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzMxMTYzMTIsImV4cCI6MTczNTcwODMxMiwic3ViIjoidXNlcjEifQ.Yy6zWzGh26o8GBHX-j3H1xXEM_ZvSXkL0Cv0XjK7TFE'
        }
      }
    );

    // 삭제에 성공했으면 리스트로 이동
    // 그렇지 않으면 에러 발생
    if(response.status === 204) {
      navigate('/board/list');
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);  
    }

  }

  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 수정</h3>
        {
          board!==null && 
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="board.title">
            <Form.Label>번호</Form.Label>
            <Form.Control type="text" value={board.no} ></Form.Control>
          </Form.Group>
          <Form.Group controlId="board.title">
            <Form.Label>제목</Form.Label>
            <Form.Control type="text" value={board.title} onChange={handleChange} name='title'></Form.Control>
          </Form.Group>
          {/*  */}
          <Form.Group controlId="board.content">
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" rows={3} value={board.content} onChange={handleChange} name='content'/>
          </Form.Group>
          <Form.Group controlId="board.content">
            <Form.Label>작성자</Form.Label>
            <Form.Control type="text" value={board.writer} readOnly></Form.Control>
          </Form.Group>
          <Form.Group controlId="board.content">
            <Form.Label>등록일</Form.Label>
            <Form.Control type="text" value={board.regDate} readOnly></Form.Control>
          </Form.Group>
          <Form.Group controlId="board.content">
            <Form.Label>수정일</Form.Label>
            <Form.Control type="text" value={board.modDate} readOnly></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            저장
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            삭제
          </Button>
        </Form>
        }
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardModify