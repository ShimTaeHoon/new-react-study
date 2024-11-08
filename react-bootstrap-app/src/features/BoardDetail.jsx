import { CustomCard, CustomContainer } from '../components/Styles';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

// 게시물 상세화면: 게시물의 모든 정보를 출력

function BoardDetail() {

  const navigate = new useNavigate();
  
  // 게시물 데이터 생성
  let board = {no:1, title:'1번', content:'1번입니다', writer:'둘리', regDate:'2024-11-08', modDate:'2024-11-08'}

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