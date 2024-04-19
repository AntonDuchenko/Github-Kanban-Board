import { useCallback } from "react";
import { DropResult } from "react-beautiful-dnd";
import { Column } from "../types";
import { actions } from "../features/issuesSlice";
import { AppDispatch, store } from "./store";
import { saveToSessionStorage } from "../utils/saveToSessionStorage/saveToSessionStorage";

export const useOnDragEnd = (columns: Column[], dispatch: AppDispatch) => {
  return useCallback(
    (result: DropResult) => {
      const { source, destination } = result;

      const sourceStatus = source.droppableId;
      const destinationStatus = destination?.droppableId;

      if (!destination) {
        return;
      }

      if (
        sourceStatus === destinationStatus &&
        source.index === destination.index
      ) {
        return;
      }

      if (
        sourceStatus === destinationStatus &&
        source.index !== destination.index
      ) {
        const foundColumnIndex = columns.findIndex(
          (col) => col.id === sourceStatus,
        );
        const foundColumn = columns[foundColumnIndex];
        const issues = Array.from(foundColumn.issues);
        const [removed] = issues.splice(source.index, 1);

        issues.splice(destination.index, 0, removed);

        const newColumns = Array.from(columns);

        newColumns[foundColumnIndex] = { ...foundColumn, issues };

        dispatch(actions.setColumns(newColumns));

        saveToSessionStorage("issues", () => store.getState().issues.columns);
      }

      if (sourceStatus !== destinationStatus) {
        const foundSourceColumnIndex = columns.findIndex(
          (col) => col.id === sourceStatus,
        );
        const foundDestinationColumnIndex = columns.findIndex(
          (col) => col.id === destinationStatus,
        );

        const foundSourceColumn = columns[foundSourceColumnIndex];
        const foundDestinationColumn = columns[foundDestinationColumnIndex];

        const sourceIssues = [...foundSourceColumn.issues];
        const destinationIssues = [...foundDestinationColumn.issues];

        const [removed] = sourceIssues.splice(source.index, 1);

        destinationIssues.splice(destination.index, 0, removed);

        const newColumns = [...columns];

        newColumns[foundSourceColumnIndex] = {
          ...foundSourceColumn,
          issues: sourceIssues,
        };

        newColumns[foundDestinationColumnIndex] = {
          ...foundDestinationColumn,
          issues: destinationIssues,
        };

        dispatch(actions.setColumns(newColumns));
      }

      saveToSessionStorage("issues", () => store.getState().issues.columns);
    },
    [columns, dispatch],
  );
};
