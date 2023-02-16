import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/storeCart";

// 스토어 생성
export const store = configureStore({
  reducer: {
    // name값을 키로 사용
    cart: cartReducer,
  },
});

export default store;
