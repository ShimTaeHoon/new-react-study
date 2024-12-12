import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const BoardList = () => {
  
  console.log("BoardList.....")

  const navigate = useNavigate();

  // 리스트를 state로 생성
  let [data, setData] = useState([]);

  useEffect( ()=>{
// 게시물 목록 요청 API
  const getData = async () => {

  // 인자(주소, 헤더)
  // 192.168.0.67 < 서버 잘 안될때 (선생님컴)
  const response = await axios.get('http://localhost:8080/board/list', {
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5MzExMTEsImV4cCI6MTczMjUyMzExMSwic3ViIjoidXNlciJ9.EHky-YCdi307UYFCYUdmRxqPOQEnyNn8D4sYoHqiKD8',
    }
  });
  
  // 요청에 실패했을 경우
  // 200이 아닐경우 응답이 실패라.. 에러 만들어주기
  // status : 코드, statusText : 메세지
  if(response.status != 200){
    throw new Error(`api error ${response.status} ${response.statusText}`)
  }

  // console.log(response);
  // return response.data;

  // state변경 => 컴포넌트가 다시 렌더링
  setData(response.data); // state값을 업데이트

  }

  getData();

  }, [] );
  // ★useEeffect: 컴포넌트가 생성될때 한번만 코드를 실행하기 위해 사용★


  // api 호출 -> state 변경 -> 컴포넌트 다시 렌더링
  // -> api 호출 -> state 변경 ... 무한루프

  // data.map is not a function
  // data가 빈값이다
  // axios는 비동기 함수이기 때문에 화면이 로드가 된 후에
  // 응답이 온다
  // 따라서 화면이 생성되는 시점에 값을 출력할 수 없다!

  return (
    <CustomCard>
      <CustomContainer>
        <Row>
          <Col sm={8}><h3>게시물 리스트</h3></Col>
          <Col sm={4}>
            <Button variant="secondary" onClick={() => {
              
              navigate('/board/register');
            }}>게시물등록</Button>
          </Col>
        </Row>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>제목</th>
                <th>작성자</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>

              {
                data !== null && data.map( (board)=>{ 

                  console.log(board);

                  return (
                    <tr key={board.no}>
                      <td><Link to={ '/board/read/' + board.no }>{board.no}</Link></td>
                      <td>{board.title}</td>
                      <td>{board.writer}</td>
                      <td>{board.regDate}</td>
                    </tr>
                  );
                })
              }
             
            </tbody>
          </Table>
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardList
