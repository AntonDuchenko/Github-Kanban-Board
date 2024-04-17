import { Heading, ListItem, Text } from "@chakra-ui/react";
import { Issue } from "../types/Issue";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  issue: Issue;
  index: number;
}

export const Item: React.FC<Props> = ({ issue, index }) => {
  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
      {(provided) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          bgColor="white"
          border="solid"
          borderRadius="10px"
          borderWidth="1px"
          padding="10px"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          gap="8px"
          position="relative"
        >
          <Heading as="h3" size="sm">
            {issue.title}
          </Heading>
          <Text color="gray">#{issue.number}</Text>
          <Text color="gray">
            {issue.user.type} | Comments: {issue.comments}
          </Text>
        </ListItem>
      )}
    </Draggable>
  );
};
