import { Issue } from "./Issue";

export type Column = {
  id: string;
  title: string;
  issues: Issue[];
};
