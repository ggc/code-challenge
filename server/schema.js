import {
  GraphQLNonNull,
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

const Query = new GraphQLObjectType({
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

var MutationAdd = {
  type: articleType,
  description: 'Add new article',
  args: {
    author: {
      name: 'author',
      type: GraphQLString
    },
    excerpt: {
      name: 'excerpt',
      type: GraphQLString
    },
    content: {
      name: 'content',
      type: GraphQLString
    },
    title: {
      name: 'title',
      type: GraphQLString
    },
    published: {
      name: 'published',
      type: GraphQLBoolean
    },
    tags: {
      name: 'tags',
      type: new GraphQLList(GraphQLString)
    }
  },
  resolve: (root, {author, excerpt, content, title, published, tags}) => {
    // Write on DB
    return new Promise((resolve, reject) => {
      let newArt = new db.Article({
        author,
        content,
        excerpt,
        published,
        tags,
        title
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
}

var MutationUpdate = {
  type: articleType,
  description: 'Update article',
  args: {
    id: {
      name: 'id',
      type: GraphQLString
    },
    author: {
      name: 'author',
      type: GraphQLString
    },
    excerpt: {
      name: 'excerpt',
      type: GraphQLString
    },
    content: {
      name: 'content',
      type: GraphQLString
    },
    title: {
      name: 'title',
      type: GraphQLString
    },
    published: {
      name: 'published',
      type: GraphQLBoolean
    },
    tags: {
      name: 'tags',
      type: new GraphQLList(GraphQLString)
    }
  },
  resolve: (root, {id, author, excerpt, content, title, published, tags}) => {
    // Write on DB
    return new Promise((resolve, reject) => {
      db.Article.findById(id, function (err, article) {
        if(err) {
          reject(err);
        } else {
          article.author = author,
          article.content = content,
          article.excerpt = excerpt,
          article.published = published,
          article.tags = tags,
          article.title = title
          article.save( (err, newArticle) => {
            if(err) {
              reject(err);
            } else {
              resolve(newArticle);
            }
          })
        }
      });
    });
  }
}

var MutationDelete = {
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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addArt: MutationAdd,
    updateArt: MutationUpdate,
    deleteArt: MutationDelete
  }
})

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
