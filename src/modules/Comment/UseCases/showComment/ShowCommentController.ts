import { Request, Response } from 'express';
import { ShowCommentUseCase } from './ShowCommentUseCase';

export class ShowCommentController {
  async handle(request: Request, response: Response) {
    const { pag } = request.query
   
    const page = pag || '1'
    const showCommentUseCase = new ShowCommentUseCase();

    const result = await showCommentUseCase.execute({ page });
    if (result === 'FAILED: Not create') {
      return response.status(400).json({ ok: false, result });
    }

    return response.json(result);
  }
}
