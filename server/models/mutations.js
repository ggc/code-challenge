import {
  GraphQLString
} from 'graphql';
import db from './db';
import mongoose from 'mongoose';
var ObjectId = require('mongoose').Types.ObjectId;

import { articleType, ArticleInputType } from './types.js';


export var MutationAdd = {
  type: articleType,
  description: 'Add new article',
  args: {
    article: {type: ArticleInputType}
  },
  resolve: (root, {article}) => {
    // Write on DB
    return new Promise((resolve, reject) => {
      let newArt = new db.Article({
        author: article.author,
        content: article.content,
        excerpt: article.excerpt,
        published: article.published,
        tags: article.tags,
        title: article.title
      });
      newArt.save( (err, written) => {
        if(err) {
          reject(err);
        } else {
          resolve(written);
        }
      });
    });
  }
};

export var MutationUpdate = {
  type: articleType,
  description: 'Update article',
  args: {
    article: {type: ArticleInputType}
  },
  resolve: (root, {article}) => {
    // Write on DB
    return new Promise((resolve, reject) => {
      db.Article.findById(article.id, function (err, newArticle) {
        if(err) {
          reject(err);
        } else {
          newArticle.author = article.author,
          newArticle.content = article.content,
          newArticle.excerpt = article.excerpt,
          newArticle.published = article.published,
          newArticle.tags = article.tags,
          newArticle.title = article.title
          newArticle.save( (err, articleCreated) => {
            if(err) {
              reject(err);
            } else {
              resolve(articleCreated);
            }
          })
        }
      });
    });
  }
};

export var MutationDelete = {
  type: articleType,
  description: 'Delete article',
  args: {
    id: {
      name: 'Article id',
      type: GraphQLString
    }
  },
  resolve: (root, {id}) => {
    // Write on DB
    return new Promise((resolve, reject) => {
      db.Article.remove({"_id": id}, function (err, article) {
        if (err) {
          reject(err)
        } else {
          resolve({id: id});
        }
      });
    });
  }
}
