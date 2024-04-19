import {
  Grid,
  GridItem,
  Skeleton,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useAppSelector } from "../../app/reduxHooks";
import { Droppable } from "react-beautiful-dnd";
import { Item } from "../Item/Item";

export const Board: React.FC = () => {
  const { loading: isLoading, columns } = useAppSelector(
    (state) => state.issues,
  );

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={6} role="grid">
      {columns.map((column) => (
        <GridItem colSpan={2} key={column.id}>
          <Skeleton isLoaded={!isLoading} height="80vh" width="100%">
            {columns.length > 0 && (
              <>
                <Text fontWeight="bold" fontSize="xx-large" textAlign="center">
                  {column.title}
                </Text>

                <Droppable key={column.id} droppableId={column.id}>
                  {(provided) => (
                    <div>
                      <UnorderedList
                        role="list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        boxSizing="border-box"
                        overflow="auto"
                        height="80vh"
                        display="flex"
                        flexDirection="column"
                        gap="10px"
                        bgColor="gray"
                        marginLeft="0"
                        listStyleType="none"
                        border="solid"
                        borderWidth="1px"
                        padding="20px"
                      >
                        {column.issues.map((issue, index) => (
                          <Item key={issue.id} issue={issue} index={index} />
                        ))}
                        {provided.placeholder}
                      </UnorderedList>
                    </div>
                  )}
                </Droppable>
              </>
            )}
          </Skeleton>
        </GridItem>
      ))}
    </Grid>
  );
};
