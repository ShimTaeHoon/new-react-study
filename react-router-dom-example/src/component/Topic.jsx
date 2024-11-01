import { useParams } from 'react-router-dom';
import data from "./data.json"

// Topic 상세 화면을 반환하는 컴포넌트
function Topic(){

  // useParams를 사용하여 파라미터 추출
  let params = useParams();

  console.log(params.topic_id);

  // 배열의 find함수를 사용하여 id가 파라미터와 일치하는 topic 찾기
  // find 함수: 배열의 요소를 순회하다가 true 반환하는 요소를 추출
  let findTopic = data.find( (topic)=>{
    if(topic.id === Number(params.topic_id)){
      return true;
    }
  });

  // Topic을 찾지 못하는 경우에는 값을 초기화
  if(findTopic === undefined){
    findTopic = {
      title: 'Sorry',
      description: 'Not found'
    }
  }

  return (
    <div>
      <h3>{findTopic.title}</h3>
      {findTopic.description}
    </div>
  );

}

export default Topic;