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
        console.log('Total query',db.Article.find());
        return new Promise((resolve, reject) => {
          db.Article.find().exec((err, res) => {
            console.log('Result', res)
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
        let art = new db.Article({
          author: 'Rick',
          content: 'I dont know M<burrrrp>orty',
          excerpt: 'It seems ff<burrrrp>ake',
          published: true,
          tags: ['Rick','Morty'],
          title: 'Ricks thoughts',
        })
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
      type: GraphQLString
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
        author: author,
        content: content,
        excerpt: excerpt,
        published: published,
        tags: tags,
        title: title
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
          console.log('Deleted document', article)
          resolve({id: id});
          // removed!
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
      type: GraphQLString
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
