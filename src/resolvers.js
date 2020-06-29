import Query from './resolvers/Query';
import Mutations from './resolvers/Mutations';
import IssueResolver from './resolvers/Issue';

const resolvers = {
  Query,
  Mutations,
  Issue: IssueResolver
}

export default resolvers;