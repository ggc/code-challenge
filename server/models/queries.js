import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';
import db from './db';
import mongoose from 'mongoose';
var ObjectId = require('mongoose').Types.ObjectId;

import { articleType, ArticleInputType } from './types.js';


export const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return new Promise((resolve, reject) => {
          db.Article.find({published: true}).sort({"_id": -1}).exec((err, res) => {
            err ? reject(err) : resolve(res);
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
        return new Promise((resolve, reject) => {
          db.Article.find({"_id": id}).exec((err, res) => {
            err ? reject(err) : resolve(res);
          })
        });
      },
    }
  }),
});