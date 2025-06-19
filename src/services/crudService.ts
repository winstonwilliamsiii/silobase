import { FastifyInstance } from 'fastify'
import { GenericResponse } from '../types/responseType'

export const createRecord = async (
  app: FastifyInstance,
  table: string,
  data: any
): Promise<GenericResponse<any[] | null>> => {
  try {
    const result = await app.db(table).insert(data).returning('*')

    return {
      status: 'success',
      data: result,
      code: 200,
    }
  } catch (error: any) {
    app.log.error(error)
    return {
      status: 'error',
      code: 400,
      error: error.message || 'An error occurred while creating the record',
    }
  }
}
