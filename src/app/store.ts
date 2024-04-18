import { configureStore } from "@reduxjs/toolkit";
import issuesReducer from "../features/issuesSlice";
import repoSlice from "../features/repoSlice";

export const store = configureStore({
  reducer: {
    issues: issuesReducer,
    repo: repoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
