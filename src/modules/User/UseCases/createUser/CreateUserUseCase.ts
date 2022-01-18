import { users } from '../../model/UserModel';
import { hash } from 'bcrypt';

interface ICreateUser {
  username: string;
  password: string;
  email: string;
}

export class CreateUserUseCase {
  async execute({ username, email, password }: ICreateUser) {
    //verificar se existe no Banco
    const checkIfEmailAlreadyExists = await users.findOne({ email });
    const checkIfUsernameAlreadyExists = await users.findOne({ username });
    
    if (checkIfEmailAlreadyExists) {
      return 'Email already Exists';
    }
    if (checkIfUsernameAlreadyExists) {
      return 'Username already';
    }

    //hashear a senha
    const hashPassword = await hash(password, 8);

    //inserir no banco
    await users.insertMany({
      username,
      email,
      password: hashPassword,
      created_at: Date.now().toString(),
    });

    //retornar sem a senha por segurança
    const view = {
      ok: true,
      username,
      email,
    };

    return view;
  }
}
