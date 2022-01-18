import { Request, Response } from 'express';
import { DeleteClassUseCase } from './DeleteClassUseCase';

export class DeleteClassController {
  async handle(request: Request, response: Response) {
    const param = request.params.id;
    const name = param.toString();

    if (!name) {
      return response.status(400).json({ ok: false, why: 'Classname is missing!' });
    }

    const deleteClassUseCase = new DeleteClassUseCase();

    const result = await deleteClassUseCase.execute({ name });
    if (result === 'Not found data!') {
      return response.status(400).json({ ok: false, why: result });
    }

    return response.json(result);
  }
}
