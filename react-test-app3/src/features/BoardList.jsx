// rafce => 자동완성
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";

import { Context } from "../index";

// 아이템을 비율로 배치
// useNavigate: 다른 페이지로 이동하는 기능
const Row = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

const BoardList = () =>{

    // 컨텍스트에서 host 데이터 추출
    const { host } = useContext(Context);

    console.log(host);

    // state는 컴포넌트의 주기에 영향을 주기 때문에
    // 컴포넌트 밖에서 사용 불가

    // 게시물 데이터를 저장할 변수 선언
    let [data, setData] = useState([]);

    const navigate = new useNavigate();

    // API를 사용하여 데이터베이스에 있는 실제 데이터를 가져오기

    // 컴포넌트가 생성될 때 한번만 api를 호출하기 위해 사용
    // 인자: 처리할 함수, 주기(빈배열)
    useEffect(()=>{
        const apicall = async () => {

            // 조회는 get
            // 비동기함수는 요청을 보내고 응답이 돌아오면 다음 작업을 처리
            // 인자: 주소, 헤더(권한이 있다면 필요)
            // https로 구현하지 않았기 때문에 http://로..
            // 응답 메세지가 response로 저장
            const response = await axios.get(
                // 'http://localhost:8080/board/list',
                `${host}/board/list`,
                {
                    headers: {
                        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzMxMTYzMTIsImV4cCI6MTczNTcwODMxMiwic3ViIjoidXNlcjEifQ.Yy6zWzGh26o8GBHX-j3H1xXEM_ZvSXkL0Cv0XjK7TFE'
                    }
                }
            );
    
            // 응답을 성공적으로 받았다면 데이터를 저장
            // 그렇지 않다면 에러를 발생
            // 요청에 성공 했는지는 응답 코드로 비교
            if(response.status == 200) {
                // console.log(response);
                // console.log(response.data);
                // data = response.data;
                setData(response.data);
            } else {
                throw new Error(`api error: ${response.status} ${response.statusText}`);
            }
    
        }
    
        apicall();
    }, []);

    

    // 코드 처리 순서: jsx 생성 -> api 응답 -> data 저장
    // api 호출 -> state 변경 -> 컴포넌트 재생성 -> api 호출...

    return (
        <CustomCard>
            <CustomContainer>
                <Row>
                    <h3>게시물 목록</h3>
                    <Button variant="primary" onClick={()=>{
                        navigate('/board/register');
                    }}>게시물 등록</Button>
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
                        
            {/* data가 있는지 확인 */}
            {/* 논리곱 연산자는 첫번째항이 false면 두번째항을 사용하지 않는다 */}
            {/* 만약 data가 없는데 map함수를 호출하면 nullpoint 에러남 */}

            {/* map함수로 게시물데이터를 <tr> 행으로 생성 */}
                        {
                            data !== null && data.map((board)=>{
                                return <tr>
                                    <td><Link to={'/board/read/'+board.no }>{board.no}</Link></td>
                                    <td>{board.title}</td>
                                    <td>{board.writer}</td>
                                    <td>{board.regDate}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </CustomContainer>
        </CustomCard>
    );
}

export default BoardList;