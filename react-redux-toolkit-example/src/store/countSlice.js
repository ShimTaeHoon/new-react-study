import { createSlice } from "@reduxjs/toolkit";

// 1. 카운터 슬라이스 생성 (작은 스토어)
// 카운트 슬라이스 내보내기
// 인자: {} 슬라이스 이름, 상태 초기값, 리듀서함수
export const countSlice = createSlice( {
  name: 'counterSlice',
  initialState: { num: 0 } ,
  // 액션타입별로 리듀서 함수 정의
  // 액션타입: 함수
  reducers: {
    up: (state, action) => {
      console.log(action);
      // step만큼 num의 값을 증가시키기
      state.num = state.num + action.payload;
    }
  }
} );
