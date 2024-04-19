import { store } from "../../app/store";
import { Column, Repo } from "../../types";

export const saveToSessionStorage = (
  key: string,
  getData: () => Column[] | Repo | null,
) => {
  const data = getData();
  const repo = store.getState().repo.repo;
  const owner = repo?.owner.login;
  const repoName = repo?.name;

  if (!owner || !repoName) {
    return;
  }

  sessionStorage.setItem(`${key}-${owner}-${repoName}`, JSON.stringify(data));
};
