import { Container } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "./app/reduxHooks";
import { Board, Header } from "./components";
import { DragDropContext } from "react-beautiful-dnd";
import { useOnDragEnd } from "./app/hooks";
import React from "react";

function App() {
  const dispatch = useAppDispatch();

  const columns = useAppSelector((state) => state.issues.columns);

  const onDragEnd = useOnDragEnd(columns, dispatch);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <React.StrictMode>
        <Container maxW="1200px" height="100vh" overflow="hidden">
          <Header />
          <Board />
        </Container>
      </React.StrictMode>
    </DragDropContext>
  );
}

export default App;
