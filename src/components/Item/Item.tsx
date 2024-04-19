import { Heading, ListItem, Text } from "@chakra-ui/react";
import { Issue } from "../../types/Issue";
import { Draggable } from "react-beautiful-dnd";
import { calculateDays } from "../../utils/calculateDays/calculateDays";

interface Props {
  issue: Issue;
  index: number;
}

export const Item: React.FC<Props> = ({ issue, index }) => {
  const { id, title, number, user, comments, created_at: createdAt } = issue;

  return (
    <Draggable draggableId={id.toString()} index={index}>
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
            {title}
          </Heading>

          <Text color="gray">
            #{number} opened{" "}
            {calculateDays(createdAt) > 0
              ? `${calculateDays(createdAt)} days ago`
              : "today"}
          </Text>

          <Text color="gray">
            {user.type} | Comments: {comments}
          </Text>
        </ListItem>
      )}
    </Draggable>
  );
};
