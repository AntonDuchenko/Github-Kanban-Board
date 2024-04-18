import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIssues } from "../api/issues";
import { Column, Issue } from "../types";

interface InitialState {
  columns: Column[];
  loading: boolean;
  error: string;
}

const initialState: InitialState = {
  columns: [],
  loading: false,
  error: "",
};

export const init = createAsyncThunk(
  "issues/fetch",
  ({ owner, repo }: { owner: string; repo: string }) => {
    return getIssues(owner, repo);
  },
);

const IssuesSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action) => {
      const openIssues: Issue[] = [];
      const progressIssues: Issue[] = [];
      const closedIssues: Issue[] = [];

      action.payload.forEach((issue: Issue) => {
        switch (issue.state) {
          case "open":
            if (issue.assignee === null) {
              openIssues.push(issue);
            } else {
              progressIssues.push(issue);
            }

            break;

          case "progress":
            progressIssues.push(issue);
            break;

          case "closed":
            closedIssues.push(issue);
            break;
        }
      });

      state.columns = [
        { id: "open", title: "To Do", issues: openIssues },
        { id: "progress", title: "In Progress", issues: progressIssues },
        { id: "closed", title: "Done", issues: closedIssues },
      ];
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
