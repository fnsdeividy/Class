import { Request, Response } from 'express';
import { ShowAllClassesUseCases } from './ShowAllClassesUseCases'

export class ShowAllClassesController {
  async handle(request: Request, response: Response) {
    const { pag } = request.query

    const page = pag || '1'

    const showAllClassesUseCases = new ShowAllClassesUseCases();

    const result = await showAllClassesUseCases.execute({page});
    if (result === 'Not found class') {
      return response.status(400).json({ ok: false, why: result });
    }

    return response.json(result);
  }
  }

