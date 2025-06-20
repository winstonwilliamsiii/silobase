import * as CrudService from '../services/crudService';
import { FastifyPluginAsync } from 'fastify';


const crudRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.post('/:table', async (request, reply) => {
        if (!['write', 'full'].includes(request.permission!)) {
            return reply.code(403).send({ error: 'Forbidden: Write access required' })
        }
        const { table } = request.params as { table: string };
        const data = request.body;
        const result: any = await CrudService.createRecord(fastify, table, data);
        reply.status(result?.code).send(result);
    });
    fastify.get('/:table', async (request, reply) => {
        if (!['read', 'full'].includes(request.permission!)) {
            return reply.code(403).send({ error: 'Forbidden: Read access required' })
        }
        const { table } = request.params as { table: string };
        const query = request.query as Record<string, string>;
        const result: any = await CrudService.readRecords(fastify, table, query);
        reply.status(result?.code).send(result);
    });
}

export default crudRoutes;