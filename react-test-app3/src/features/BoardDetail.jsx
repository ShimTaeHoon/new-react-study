// rafce => 자동완성
import { CustomCard, CustomContainer } from '../components/Styles';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useContext } from 'react';
import { Context } from '../index';

// 전달받은 파라미터를 사용하여
// 특정 게시물 조회

function BoardDetail() {

 // 먼저 객체를 생성하고 사용
 const params = useParams();

 console.log(params.no);

 // let board = {no:1, title:'1번', content:'1번입니다', writer:'둘리', regDate:'11', modDate:'22'}
 const [board, setBoard] = useState(null);

  const navigate = new useNavigate();

  // API 주소 가져오기
  const { host } = useContext(Context);

  // 게시물 조회 API 호출
  // 인자: 함수, 주기
  useEffect(()=>{
    
    const apiCall = async () => {

      const response = await axios.get(
        `${host}/board/read?no=${params.no}`,
          {
            headers: {
              Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzMxMTYzMTIsImV4cCI6MTczNTcwODMxMiwic3ViIjoidXNlcjEifQ.Yy6zWzGh26o8GBHX-j3H1xXEM_ZvSXkL0Cv0XjK7TFE'
          }
        }
      );

      // console.log(response);

      // API 요청에 성공했다면 게시물 데이터를 저장
      // 그렇지 않다면 에러를 발생
      if(response.status == 200) {
        
        // console.log(response.data);
        setBoard(response.data);

      } else {
        throw new Error(`api error: ${response.status} ${response.statusText}`)
      }

    }

    apiCall();

  }, []);

  return (
            <CustomCard>
            <CustomContainer>
                <h3>게시물 상세</h3>
                {
                  board !==null &&
                  <div>
                    <Form.Group className="mb-3" controlId="board.no">
                      <Form.Label>번호</Form.Label>
                      <Form.Control type="text" value={board.no} readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="board.title">
                      <Form.Label>제목</Form.Label>
                      <Form.Control type="text" value={board.title} readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="board.content">
                      <Form.Label>내용</Form.Label>
                      <Form.Control as="textarea" rows={3} value={board.content} readOnly/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="board.content">
                      <Form.Label>작성자</Form.Label>
                      <Form.Control type="text" value={board.writer} readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="board.content">
                      <Form.Label>등록일</Form.Label>
                      <Form.Control type="text" value={board.regDate} readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="board.content">
                      <Form.Label>수정일</Form.Label>
                      <Form.Control type="text" value={board.modDate} readOnly></Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={()=>{
                        navigate(`/board/modify/${board.no}`);
                    }}>수정</Button>
                  </div>          
                }
            </CustomContainer>
        </CustomCard>
    );
  };

export default BoardDetail;