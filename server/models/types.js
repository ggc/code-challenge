import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} from 'graphql';
import db from './db';

export const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
  }),
});

export const ArticleInputType = new GraphQLInputObjectType({
  name: 'ArticleInput',
  fields: () => ({
    id: {name: 'id',type: GraphQLString    },
    author: {name: 'author',type: GraphQLString    },
    excerpt: {name: 'excerpt',type: GraphQLString    },
    content: {name: 'content',type: GraphQLString    },
    title: {name: 'title',type: GraphQLString    },
    published: {name: 'published',type: GraphQLBoolean    },
    tags: {name: 'tags',type: new GraphQLList(GraphQLString)    }
  })
});