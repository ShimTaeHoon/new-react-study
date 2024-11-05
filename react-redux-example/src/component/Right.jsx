import { useDispatch } from "react-redux";

// useDispatch: 스토어에 있는 state를 변경하는 함수

export const Right1 = () => {

  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

const Right2 = () => {

  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );

}

// + 버튼을 클릭하면 num이 1 증가되도록 처리
const Right3 = () => {

  // redux 스토어에서 dispatch함수 가져오기
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={ ()=>{
        
        // 디스패치로 'PLUS' 액션을 전달
        // dispatch -> reducer
        dispatch({ type: 'PLUS' });

      }}></input>
    </div>
  );

}

// export default Left1;
