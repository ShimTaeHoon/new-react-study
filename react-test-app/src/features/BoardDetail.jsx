import { CustomCard, CustomContainer } from '../components/Styles';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

function BoardDetail() {

  // useParams: URL 주소에 포함된 파라미터를 추출하는 기능
  const params = useParams();

  console.log(params);
  
  // 가짜데이터 지우기
  // let board = {no:1, title:'1번', content:'1번입니다', writer:'둘리', regDate:'2024-11-08', modDate:'2024-11-08'}

  // 게시물 데이터를 state로 저장
  let [board, setBoard] = useState(null);

  // 컴포넌트가 생성될 때 한번만 API를 호출하여
  // 게시물 데이터를 출력
  useEffect(()=>{

// 상세 조회 API 호출
  // 비동기함수(axios) async, await < 응답 기다렸다가 그 결과값 저장
  const apicall = async () => {
    
    // 주소, 헤더
    const response = await axios.get(`http://localhost:8080/board/read?no=${params.no}`,
      {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5MzExMTEsImV4cCI6MTczMjUyMzExMSwic3ViIjoidXNlciJ9.EHky-YCdi307UYFCYUdmRxqPOQEnyNn8D4sYoHqiKD8',
        }
      }
    );

    // 요청에 실패했다면
    if(response.status !== 200){
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

    // API를 통해 응답받은 데이터를 state에 업데이트
    setBoard(response.data);

  }  

  apicall();

  }, []);

  const navigate = new useNavigate();

  return (
    <CustomCard>
        <CustomContainer>
          <h3>게시물 상세</h3>
          {
            board !==null &&
            <form>
              <Form.Group controlId="board.title">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" value={board.title} readOnly></Form.Control>
              </Form.Group>
              <Form.Group controlId="board.content">
                <Form.Label>내용</Form.Label>
                <Form.Control as="textarea" rows={3} value={board.content} readOnly/>
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
              <Button variant="primary" onClick={()=>{
                  navigate(`/board/modify/${board.no}`);
              }}>수정</Button>
            </form>
            }
        </CustomContainer>
    </CustomCard>
    );
  };

export default BoardDetail;