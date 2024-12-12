import { createSlice } from "@reduxjs/toolkit";

// 슬라이스란?
// 스토어를 기능별로 관리하는 단위

// 로그인 데이터를 관리하는 슬라이스를 생성
// 로그인/로그아웃

// state초기값 (인증토큰과 회원정보 저장)
const initialState = {
  token : null,
  user : null
}

// 인자: 슬라이스이름, state초기값, 리듀서함수
// 리듀서함수? state값을 변경하는 로직
export const memberSlice = createSlice(
  {
    name : "memberSlice",
    initialState,
    reducers: {
      // 현재 state값, 액션(이벤트)
      login: (state, action)=>{
        // console.log(action.payload.token);
        // console.log(action.payload.user);
        state.token = action.payload.token;
        state.user = action.payload.user;
      },
      logout: (state, action)=>{
        state.token = null;
        state.user = null;
      }
    } 
  }
);

// 액션함수란?
// 슬라이스의 리듀서 함수를 호출하는 기능
export const { login } = memberSlice.actions;