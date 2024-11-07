import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "./countSlice";

// 리듀서의 변화
// - 이전코드는 조건문을 사용했으나 슬라이스는 액션타입만 쓰면됨
// - 이전코드는 state를 복제하고 변경된 state를 반환했지만
//    슬라이스는 state를 그대로 사용하면됨

// 2. 슬라이스를 모아서 스토어 생성

// 인자: {} 각 슬라이스의 리듀서 넣기
export const store = configureStore( {
  reducer: {
    // 각 슬라이스의 리듀서가 들어가는 위치
    // 슬라이스 이름: 리듀서 함수
    counter: countSlice.reducer
  }
} );