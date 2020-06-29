import { Comment, IssueUsers } from '../models';

const Mutations = {
  createIssue: async (_, args, ctx, info) => {
    const Issue = await Issue.create({
      ...args.data
    });
    return Issue;
  },
  updateIssue: async (_, args, ctx, info) => {
    const Issue = await Issue.update({ ...args.data }, {
      where: {
        id: args.issueId
      },
    });
    return Issue;
  },
  deleteIssue: async (_, args, ctx, info) => {
    const Issue = await Issue.destroy({
      where: {
        id: args.issueId
      }
    });
    return issue;
  },
  createComment: async (_, args, ctx, info) => {
    const comment = await Comment.create({
      ...args.data
    });
    return comment;
  },
  updateComment: async (_, args, ctx, info) => {
    const comment = await Comment.update({ ...args.data }, {
      where: {
        id: args.commentId
      }
    });
    return comment;
  },
  deleteComment: async (_, args, ctx, info) => {
    const comment = await Comment.destroy({
      where: {
        id: args.commentId
      }
    });
    return comment;
  },
  assignIssue: async (_, args, ctx, info) => {
    const issueUser = await IssueUsers.create({
      ...args.data
    });
    return issueUser;
  }
}

export default Mutations;