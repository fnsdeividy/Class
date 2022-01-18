import { Request, Response } from 'express';
import { ShowAllClassesUseCases } from './ShowAllClassesUseCases'

export class ShowAllClassesController {
  async handle(request: Request, response: Response) {

    const showAllClassesUseCases = new ShowAllClassesUseCases();

    const result = await showAllClassesUseCases.execute();
    if (result === 'Not found class') {
      return response.status(400).json({ ok: false, why: result });
    }

    return response.json(result);
  }
  }

