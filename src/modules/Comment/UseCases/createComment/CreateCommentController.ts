import { Request, Response } from 'express';
import { CreateCommentUseCase } from './CreateCommentUseCase';

export class CreateCommentController {
  async handle(request: Request, response: Response) {
    const { comment, class_id } = request.body;

    if (!comment) {
      return response.status(400).json({ ok: false, why: 'Missing data!' });
    }
    if (!class_id) {
      return response.status(400).json({ ok: false, why: 'Missing data!' });
    }

    const createCommentUseCase = new CreateCommentUseCase();

    const result = await createCommentUseCase.execute({
      comment,
      class_id
    });

    return response.json(result);
  }
}
