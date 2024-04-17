import axios from "axios";
import { Issue } from "../types";

export const getIssues = async (owner: string, repo: string) => {
  const response = await axios.get<Issue[]>(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
  );

  return response.data;
};
