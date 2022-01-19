import { Request, Response } from 'express';
import { ListClassesUseCases } from './ListClassesUseCases';

export class ListClassesController {
  async handle(request: Request, response: Response) {
    const { pag } = request.query;

    const page = String(pag || '1');

    const listClassesUseCases = new ListClassesUseCases();

    const result = await listClassesUseCases.execute({ page });
    if (result === 'Not found data!') {
      return response.status(400).json({ ok: false, why: result });
    }

    return response.json(result);
  }
}
