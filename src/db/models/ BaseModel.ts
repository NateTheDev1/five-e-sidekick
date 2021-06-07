import { Model } from 'objection';
import Knex from 'knex';

import dbConfig from '../db-config';

const knex = Knex(dbConfig.development);

Model.knex(knex);

class BaseModel extends Model {}

export default BaseModel;
