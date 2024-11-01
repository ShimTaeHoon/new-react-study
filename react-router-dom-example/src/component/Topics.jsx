import { Routes, Route, NavLink } from "react-router-dom";
import Topic from "./Topic";
//중복코드 제거 (공유)
import data from './data.json';

// 데이터를  사용하여 컴포넌트를 자동으로 생성하기!

// 하위 메뉴 추가
function Topics() {

  // Link 목록을 저장할 배열

  let lis = [];

  for(let t of data){

    lis.push(
      <li key={t.id}><NavLink to={'/topics/' + t.id}>{t.title}</NavLink></li>
    );
  }

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        {lis}
      </ul>

      {/* 하위 라우터 추가 
          자식 라우터는 부모의 URL(경로)을 자동으로 포함
      */}

      {/* Route를 하나로 통합 */}
      {/* URL에 포함된 파라미터로 처리 */}
      {/* 예: /topics/1 => (topic_id = 1) */}
      <Routes>
        <Route path='/:topic_id' element={<Topic></Topic>}></Route>
      </Routes>

    </div>
  );
}

export default Topics;