import { Comment, Issue, User } from '../models';

const IssueResolver = {
  comments: async (_, args, ctx, info) => {
    const comments = await Comment.findAll({
      where: {
        issueId: _.id
      },
      include: [{
        model: User,
        as: 'user'
      }]
    });
    return comments;
  },
  reporter: async (_, args, ctx, info) => {
    const reporter = await User.findOne({
      where: {
        id: _.userId
      }
    });
    return reporter;
  }
}

export default IssueResolver;