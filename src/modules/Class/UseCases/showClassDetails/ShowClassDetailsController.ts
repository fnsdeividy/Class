import { Request, Response } from 'express';
import { ShowClassDetailsUseCases } from './ShowClassDetailsUseCases';

export class ShowClassDetailsController {
  async handle(request: Request, response: Response) {
    const id = request.params.id.toString();
    const showClassDetailsUseCases = new ShowClassDetailsUseCases();

    const result = await showClassDetailsUseCases.execute({ id });
    if (result === 'Not found class' || result === 'Invalid id') {
      return response.status(400).json({ ok: false, why: result });
    }

    return response.json(result);
  }
}
