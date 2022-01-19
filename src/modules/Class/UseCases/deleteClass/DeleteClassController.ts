import { Request, Response } from 'express';
import { DeleteClassUseCase } from './DeleteClassUseCase';

export class DeleteClassController {
  async handle(request: Request, response: Response) {
    const id = request.params.id.toString();

    if (!id) {
      return response.status(400).json({ ok: false, why: 'Class is missing!' });
    }

    const deleteClassUseCase = new DeleteClassUseCase();

    const result = await deleteClassUseCase.execute({ id });
    if (result === 'Not found data!') {
      return response.status(400).json({ ok: false, why: result });
    }

    return response.json(result);
  }
}
