import { Request, Response } from 'express';
import { UpdateClassUseCase } from './UpdateClassUseCase';

export class UpdateClassController {
  async handle(request: Request, response: Response) {
    const { name, description, video, date_init, date_end } = request.body;

    if (!name) {
      return response.status(400).json({ ok: false, why: 'Classname is missing!' });
    }

    const updateClassUseCase = new UpdateClassUseCase();

    const result = await updateClassUseCase.execute({ name, description, video, date_init, date_end });
    if (result == 'Not found data!') {
      return response.status(400).json({ ok: false, why: result });
    }

    return response.json(result);
  }
}
