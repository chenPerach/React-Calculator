import { configureStore } from "@reduxjs/toolkit";
import { calculatorSlice } from "./features/calculator/CalculatorSlice";

export const store =  configureStore({
    reducer: {
        calculator: calculatorSlice.reducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type CalculatorDispatch = typeof store.dispatch