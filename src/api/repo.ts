import axios from "axios";
import { Repo } from "../types";

export const getRepo = async (owner: string, repo: string) => {
  const response = await axios.get<Repo>(
    `https://api.github.com/repos/${owner}/${repo}`,
  );

  return response.data;
};
