import { Request, Response } from 'express';
import { ListCommentsUseCase } from './ListCommentsUseCase';

export class ListCommentsController {
  async handle(request: Request, response: Response) {
    const { pag } = request.query;

    const page = String(pag || '1');

    const listCommentsUseCase = new ListCommentsUseCase();

    const result = await listCommentsUseCase.execute({ page });
    if (result === 'Not found data!') {
      return response.status(400).json({ ok: false, result });
    }

    return response.json(result);
  }
}
