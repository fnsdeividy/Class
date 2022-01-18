import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, password, email } = request.body;

    if (!username || !password || !email) {
      return response.status(400).json({ ok: false, why: 'Data missing!' });
    }

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      username,
      password,
      email,
    });
    if (result === 'Email already Exists' || result === 'Username already') {
      return response.status(400).json({ ok: false, why: result });
    }

    return response.json(result);
  }
}
