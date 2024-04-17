import { Container } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Board, Header } from "./components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { actions } from "./features/issuesSlice";

function App() {
  const dispatch = useAppDispatch();

  const columns = useAppSelector((state) => state.issues.columns);

  const onDragEnd = (result: DropResult) => {
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
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container maxW="1200px" height="100vh" overflow="hidden">
        <Header />
        <Board />
      </Container>
    </DragDropContext>
  );
}

export default App;
