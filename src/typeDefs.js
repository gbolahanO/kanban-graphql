import { gql } from 'apollo-server';

const typeDefs = gql`

  scalar Datetime
  enum IssueType {
    task
    bug
    story
  }
  enum IssueStatus {
    backlog
    development
    progress
    done
  }
  enum Priority {
    highest
    high
    medium
    low
    lowest
  }

  type User {
    id: Int
    name: String
    email: String
    avatarUri: String
    createdAt: Datetime
    comments: [Comment!]
    issue: [Issue!]
  }

  type Issue {
    id: Int
    title: String
    type: IssueType
    status: IssueStatus
    priority: Priority
    description: String
    listPosition: Int
    reporter: User
    assignees: [User!]
    comments: [Comment!]
  }

  type Comment {
    id: Int
    body: String
    user: User!
    createdAt: Datetime
  }

  type Query {
    Issues(searchTerm: String): [Issue!]
    Issue(issueId: Int): Issue!
    getUserIssues(userId: Int): [Issue!]
  }

  type Mutation {
    createIssue(data: createIssueInput): Issue
    updateIssue(issueId: Int, data: updateIssueInput): Issue
    deleteIssue(issueId: Int): Issue
    createComment(data: createCommentInput): Comment
    updateComment(commentId: Int, data: createCommentInput): Comment
    deleteComment(commentId: Int): Comment
    assignIssue(data: assignIssueInput): Saved
  }

  input createIssueInput {
    title: String
    type: IssueType
    priority: Priority
    description: String
    reporter: Int
    assignee: [Int]
  }

  input updateIssueInput {
    title: String
    type: IssueType
    status: IssueStatus
    priority: Priority
    description: String
    reporter: Int
    assignee: [Int]
  }

  input createCommentInput {
    body: String!
    issueId: Int!
    userId: Int!
  }

  input assignIssueInput {
    userId: Int
    issueId: Int
  }

  type Saved {
    id: Int
    userId: Int
    issueId: Int
  }

`;

export default typeDefs;