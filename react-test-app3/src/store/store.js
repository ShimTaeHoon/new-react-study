import { configureStore } from "@reduxjs/toolkit";
import { memberSlice } from "./memberSlice";

// 슬라이스를 모아서 스토어 생성
// 슬라이스이름: 리듀서함수
export const store = configureStore({
  reducer: {
    member: memberSlice.reducer,
  }
});


// export default store;
// default로 export를 한 경우: "import 변수명 자유롭게 선언" {} 없어도 됨