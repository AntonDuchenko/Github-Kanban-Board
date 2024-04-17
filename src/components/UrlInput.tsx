import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useAppDispatch } from "../app/hooks";
import * as issuesSlice from "../features/issuesSlice";
import * as repoSlice from "../features/repoSlice";

interface Props {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

export const UrlInput: React.FC<Props> = ({ url, setUrl }) => {
  const owner = url.split("/")[1];
  const repo = url.split("/")[2];
  const dispatch = useAppDispatch();

  const handlerOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sessionStorage.getItem(`issues-${owner}-${repo}`)) {
      dispatch(
        issuesSlice.actions.setColumns(
          JSON.parse(sessionStorage.getItem(`issues-${owner}-${repo}`)!),
        ),
      );
    } else {
      dispatch(issuesSlice.init({ owner, repo }));
    }

    if (sessionStorage.getItem(`repo-${owner}-${repo}`)) {
      dispatch(
        repoSlice.actions.setRepo(
          JSON.parse(sessionStorage.getItem(`repo-${owner}-${repo}`)!),
        ),
      );
    } else {
      dispatch(repoSlice.init({ owner, repo }));
    }
  };

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <form onSubmit={handlerOnSubmit}>
      <FormControl>
        <InputGroup size="lg" paddingTop="10px" marginBottom="20px">
          <InputLeftAddon>https://</InputLeftAddon>
          <Input
            value={url}
            placeholder="Enter repo URL"
            marginRight="10px"
            onChange={handlerOnChange}
          />
          <Button colorScheme="gray" inlineSize="150px" type="submit">
            Load issues
          </Button>
        </InputGroup>
      </FormControl>
    </form>
  );
};
