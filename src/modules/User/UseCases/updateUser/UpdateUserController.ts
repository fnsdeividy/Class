import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { username, new_email, last_password, new_password } = request.body;
    if (!username) {
      return response.status(400).json({ ok: false, why: 'Username is missing!' });
    }

    const updateUserUseCase = new UpdateUserUseCase();

    const result = await updateUserUseCase.execute({
      username,
      new_email,
      last_password,
      new_password,
    });
    if (result === 'Not found data!' || result === 'passwords do not match') {
      return response.status(401).json({ ok: false, why: result });
    }

    return response.json(result);
  }
}
