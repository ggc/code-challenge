import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';
import mongoose from 'mongoose';
var ObjectId = require('mongoose').Types.ObjectId;

import db from './db';
import { Query } from './queries.js';
import { MutationAdd, MutationUpdate, MutationDelete } from './mutations.js';

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
