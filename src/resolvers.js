import Query from './resolvers/Query';
import Mutation from './resolvers/Mutations';
import IssueResolver from './resolvers/Issue';

const resolvers = {
  Query,
  Mutation,
  Issue: IssueResolver
}

export default resolvers;