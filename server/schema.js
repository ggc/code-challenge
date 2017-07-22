import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} from 'graphql';
import db from './db';
import mongoose from 'mongoose';
var ObjectId = require('mongoose').Types.ObjectId;

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
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
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        // console.log('Total query',db.Article.find());
        return new Promise((resolve, reject) => {
          db.Article.find().exec((err, res) => {
            setTimeout( () => {
              err ? reject(err) : resolve(res);
            }, 2000)
          })
        });
      },
    },
    article: {
      type: new GraphQLList(articleType),
      args: {
        id: { type: GraphQLString }
      },
      resolve: function(_, {id}) {
        // console.log('Total query',db.Article.find());
        return new Promise((resolve, reject) => {
          db.Article.find({"_id": id}).exec((err, res) => {
            console.log('Result', res)
            err ? reject(err) : resolve(res);
          })
        });
      },
    }
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
