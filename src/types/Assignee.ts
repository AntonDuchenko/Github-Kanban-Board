export interface Assignee {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string; // NOTE: This URL contains a placeholder for other_user
  gists_url: string; // NOTE: This URL contains a placeholder for gist_id
  starred_url: string; // NOTE: This URL contains placeholders for owner and repo
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string; // NOTE: This URL contains a placeholder for privacy
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
