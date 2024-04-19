import { Item } from "./Item";
import { Issue } from "../../types";
import { renderWithProviders, screen } from "../../utils/test-utils";

const mockIssue: Issue = {
  url: "https://api.github.com/repos/octocat/Hello-World/issues/1347",
  repository_url: "https://api.github.com/repos/octocat/Hello-World",
  labels_url:
    "https://api.github.com/repos/octocat" +
    "/Hello-World/issues/1347/labels{/name}",
  comments_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
  events_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
  html_url: "https://github.com/octocat/Hello-World/issues/1347",
  id: 1,
  node_id: "MDU6SXNzdWUxMzQ3",
  number: 1347,
  title: "Found a bug",
  user: {
    login: "octocat",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://github.com/images/error/octocat_happy.gif",
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url:
      "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    site_admin: false,
  },
  labels: [
    {
      id: 208045946,
      node_id: "MDU6TGFiZWwyMDgwNDU5NDY=",
      url: "https://api.github.com/repos/octocat/Hello-World/labels/bug",
      name: "bug",
      color: "f29513",
      default: true,
      description: "Something isn't working",
    },
  ],
  state: "open",
  locked: false,
  assignee: null,
  assignees: [],
  milestone: null,
  comments: 0,
  created_at: "2011-04-22T13:33:48Z",
  updated_at: "2011-04-22T13:33:48Z",
  closed_at: null,
  author_association: "OWNER",
  active_lock_reason: null,
  draft: false,
  pull_request: {
    url: "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
    html_url: "https://github.com/octocat/Hello-World/pull/1347",
    diff_url: "https://github.com/octocat/Hello-World/pull/1347.diff",
    patch_url: "https://github.com/octocat/Hello-World/pull/1347.patch",
    merged_at: null,
  },
  body: "I'm having a problem with this.",
  reactions: {
    url:
      "https://api.github.com/repos/octocat" +
      "/Hello-World/issues/1347/reactions",
    total_count: 0,
    "+1": 0,
    "-1": 0,
    laugh: 0,
    hooray: 0,
    confused: 0,
    heart: 0,
    rocket: 0,
    eyes: 0,
  },
  timeline_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/1347/timeline",
  performed_via_github_app: null,
  state_reason: null,
};

describe("Item", () => {
  it("Should render the title", () => {
    renderWithProviders(<Item issue={mockIssue} index={0} />);

    expect(screen.getByText("Found a bug")).toBeInTheDocument();
  });

  it("Should render the number", () => {
    renderWithProviders(<Item issue={mockIssue} index={0} />);

    expect(screen.getByText(/#1347/)).toBeInTheDocument();
  });

  it("Should render the user type and comments", () => {
    renderWithProviders(<Item issue={mockIssue} index={0} />);

    expect(screen.getByText("User | Comments: 0")).toBeInTheDocument();
  });
});
