// test-utils.tsx
import { render as vitestRender } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import { List } from "@chakra-ui/react";
import { store } from "../app/store";
import React from "react";

const renderWithProviders = (
  ui: React.ReactElement,
  { droppableId = "1", ...options } = {},
) => {
  return vitestRender(
    <DragDropContext onDragEnd={() => {}}>
      <ChakraProvider>
        <Provider store={store}>
          <Droppable droppableId={droppableId}>
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
                {ui}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </Provider>
      </ChakraProvider>
    </DragDropContext>,
    options,
  );
};

export * from "@testing-library/react";
export { renderWithProviders };
