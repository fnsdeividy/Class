import { Request, Response } from 'express';
import { CreateClassUseCase } from './CreateClassUseCase';

export class CreateClassController {
  async handle(request: Request, response: Response) {
    const { name, description, video, date_init, date_end } = request.body;

    if (!name || !description || !video || !date_init || !date_end) {
      return response.status(400).json({ ok: false, why: 'Missing data!' });
    }

    const createClassUseCase = new CreateClassUseCase();

    const result = await createClassUseCase.execute({
      name,
      description,
      video,
      date_init,
      date_end,
    });
    if (result === 'Class already Exists') {
      return response.status(400).json({ ok: false, why: result });
    }

    return response.json(result);
  }
}
