import { Comment, Issue, User } from '../models';

const Query = {
  Issues: async (_, args, ctx, info) => {
    const issues = await Issue.findAll({
      include: [
        {
          model: User,
          as: 'assignees',
          attributes: ['id', 'name', 'avatarUri', 'email', 'createdAt']
        }
      ]
    });
    return issues;
  },
  Issue: async (_, args, ctx, info) => {
    const issue = await Issue.findOne({
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
    return issue;
  },
  getUserIssues: async (_, args, ctx, info) => {
    const issue = await Issue.findAll({
      where: {
        userId: args.userId
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
  }
}

export default Query;