/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRepo } from "../api/repo";
import { Repo } from "../types";

interface InitialState {
  repo: Repo | null;
  loading: boolean;
  error: string;
}

const initialState: InitialState = {
  repo: null,
  loading: false,
  error: "",
};

const IssuesSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setRepo: (state, action) => {
      state.repo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action) => {
      state.repo = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = "error";
    });
  },
});

export const { actions } = IssuesSlice;
export default IssuesSlice.reducer;

export const init = createAsyncThunk(
  "repo/fetch",
  ({ owner, repo }: { owner: string; repo: string }) => {
    return getRepo(owner, repo);
  },
);
