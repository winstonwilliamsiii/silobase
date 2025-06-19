import fp from 'fastify-plugin';
import knex, { Knex } from 'knex';
import config  from '../config/indexConfig';

export default fp(async (fastify) => {
  const dbConfig: Knex.Config = {
    client: config.dbClient,
    connection: config.dbUrl,
    pool: {
      min: 2,
      max: 10,
    },
    useNullAsDefault: true,
  };

  const db:Knex = knex(dbConfig);
  fastify.decorate('db', db);
});