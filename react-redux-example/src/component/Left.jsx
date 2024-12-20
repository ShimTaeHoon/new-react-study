import { useSelector } from "react-redux";

// useSelector: 컴포넌트에서 스토어를 조회하는 함수(스토어 안에 있는 state를 가져오는 함수)

export const Left1 = () => {

  console.log('Left1...');

  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}

const Left2 = () => {

  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );

}

const Left3 = () => {

  // redux 스토어의 state 중에서 num 가져오기
  // 리턴값: state 중에서 선택
  
  // const num = useSelector( (state)=>{
  //   return state.num;
  // } );
  
  // const f = state => {
  //   return state.num
  // }
  // const num = useSelector( f );
  
  // useSelector
  // redux 스토어의 state 중에서 num 꺼내기
  const num = useSelector(state=> {
    console.log(state);
    return state.num
  });

  return (
    <div>
      {/* 꺼낸 state 출력 */}
      <h1>Left3: {num}</h1>
    </div>
  );

}

// export default Left1;
