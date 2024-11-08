import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

// useNavigate: 다른 페이지로 이동하는 기능

// 게시물 목록 표시 -> <table> 태그 사용

// 게시물 리스트 (데이터베이스 대신)
const data = [
  { no:1, title: '1번', content:'1번입니다', writer:'둘리', regDate:'2024-11-08', modDate:'2024-11-08' },
  { no:2, title: '2번', content:'2번입니다', writer:'또치', regDate:'2024-11-09', modDate:'2024-11-09' },
  { no:3, title: '3번', content:'3번입니다', writer:'도우너', regDate:'2024-11-10', modDate:'2024-11-10' }
];

const BoardList = () => {
  
  // navigate함수 생성
  const navigate = useNavigate();

  return (
    <CustomCard>
      <CustomContainer>
          {/* 목록은 모든 데이터를 표시할 필요가 없음 */}
          {/* 게시물 데이터 중 선택하여 표시 */}
        <Row>
          <Col sm={8}><h3>게시물 리스트</h3></Col>
          <Col sm={4}>
            <Button variant="secondary" onClick={() => {
              
              // 게시물등록 페이지로 이동
              navigate('/board/register');
            }}>게시물등록</Button>
          </Col>
        </Row>

          <Table striped bordered hover>
            {/* 제목 - 고정*/}
            <thead>
              <tr>
                <th>#</th>
                <th>제목</th>
                <th>작성자</th>
                <th>등록일</th>
              </tr>
            </thead>
            {/* 데이터 - 유동적 */}
            <tbody>

              {/* data가 있는지 확인 */}
              {/* 논리곱 연산자는 첫번째항이 false면 두번째항을 사용하지 않는다 */}
              {/* 만약 data가 없는데 map함수를 호출하면 nullpoint 에러남. */}
              
              {/* map함수로 게시물 데이터를 <tr> 행으로 생성 */}
              {
                data !== null && data.map( (board)=>{ 

                  console.log(board);

                  // jsx를 동적으로 생성할때는 key값을 삽입해야함
                  return (
                    <tr key={board.no}>
                      {/* 상세화면 URL 예시: /board/read/1 */}
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
