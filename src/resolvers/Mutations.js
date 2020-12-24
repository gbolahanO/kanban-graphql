import { Comment, IssueUsers, Issue, User } from '../models';

const Mutation = {
  createIssue: async (_, args, ctx, info) => {
    const findIssues = await Issue.findAll({});

    let listPosition;
    let listPositions = []
    findIssues.map(issue => listPositions.push(issue.listPosition));
    if (listPositions.length > 0) {
      listPosition = Math.max(...listPositions) + 1;
    } else {
      listPosition = 1;
    }

    const newIssue = await Issue.create({
      ...args.data,
      userId: args.data.reporter,
      listPosition
    });

    if (args.data.assignee) {
      const assignees = args.data.assignee;
      delete args.data.assignee;
      const assigneesData = assignees.map(a => ({userId: a, issueId: newIssue.id}));
      await IssueUsers.bulkCreate(assigneesData);
    }

    const issue = await Issue.findOne({
      where: {
        id: newIssue.id
      },
      include: [
        {
          model: User,
          as: 'assignees',
          attributes: ['id', 'name', 'avatarUri', 'email', 'createdAt']
        }
      ]
    });

    return issue;
  },
  updateIssue: async (_, args, ctx, info) => {
    if (args.data.reporter) {
      await Issue.update({
        ...args.data, userId: args.data.reporter }, {
        where: {
          id: args.issueId
        },
      });
    } else {
      await Issue.update({ ...args.data }, {
        where: {
          id: args.issueId
        },
      });
    }

    if (args.data.assignee) {
      await IssueUsers.destroy({where: {
        issueId: args.issueId
      }});
      const assignees = args.data.assignee;
      const assigneesData = assignees.map(a => ({userId: a, issueId: args.issueId}));
      await IssueUsers.bulkCreate(assigneesData);
    }

    const updatedIssue = await Issue.findOne({
      where: {
        id: args.issueId
      },
      include: [
        {
          model: User,
          as: 'assignees',
          attributes: ['id', 'name', 'avatarUri', 'email', 'createdAt']
        }
      ]
    });
    return updatedIssue;
  },
  deleteIssue: async (_, args, ctx, info) => {
    const deletedIssue = await Issue.destroy({
      where: {
        id: args.issueId
      }
    });
    return deletedIssue;
  },
  createComment: async (_, args, ctx, info) => {
    const createComment = await Comment.create({
      ...args.data
    });
    return createComment;
  },
  updateComment: async (_, args, ctx, info) => {
    const updateComment = await Comment.update({ ...args.data }, {
      where: {
        id: args.commentId
      }
    });
    return updateComment;
  },
  deleteComment: async (_, args, ctx, info) => {
    const deleteComment = await Comment.destroy({
      where: {
        id: args.commentId
      }
    });
    return deleteComment;
  },
  assignIssue: async (_, args, ctx, info) => {
    const issueUser = await IssueUsers.create({
      ...args.data
    });
    return issueUser;
  }
}

export default Mutation;