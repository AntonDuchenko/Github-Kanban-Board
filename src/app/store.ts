import { configureStore } from "@reduxjs/toolkit";
import issuesReducer from "../features/issuesSlice";
import repoSlice from "../features/repoSlice";

export const store = configureStore({
  reducer: {
    issues: issuesReducer,
    repo: repoSlice,
  },
});

const saveIssuesToSessionsStorage = () => {
  const issues = store.getState().issues.columns;
  const repo = store.getState().repo.repo;
  const owner = repo?.owner.login;
  const repoName = repo?.name;

  if (!owner || !repoName) {
    return;
  }

  sessionStorage.setItem(`issues-${owner}-${repoName}`, JSON.stringify(issues));
};

const saveRepoToSessionsStorage = () => {
  const repo = store.getState().repo.repo;
  const owner = repo?.owner.login;
  const repoName = repo?.name;

  if (!owner || !repoName) {
    return;
  }

  sessionStorage.setItem(`repo-${owner}-${repoName}`, JSON.stringify(repo));
};

store.subscribe(() => {
  saveIssuesToSessionsStorage();
  saveRepoToSessionsStorage();
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
