import { Request, Response } from 'express';
import { DeleteCommentUseCase } from './DeleteCommentUseCase';

export class DeleteCommentController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;

    const deleteCommentUseCase = new DeleteCommentUseCase();

    const result = await deleteCommentUseCase.execute({ id });
    if (result === 'Not found data') {
      return response.status(400).json({ ok: false, result });
    }

    return response.json(result);
  }
}
