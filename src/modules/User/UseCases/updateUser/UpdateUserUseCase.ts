import { users } from '../../model/UserModel';
import { hash, compare } from 'bcrypt';

interface ICreateUser {
  username: string;
  last_password: string;
  new_password: string;
  new_email: string;
}

export class UpdateUserUseCase {
  async execute({
    username,
    new_email,
    last_password,
    new_password,
  }: ICreateUser) {
    // em caso de troca de senha verificar se coincide antes de alterar
    if (new_password) {
      const findDataUser = await users.findOne({ username });
      if (!findDataUser) {
        return 'Not found data!'
      }
      const comparePassword = await compare(
        last_password,
        findDataUser.password
      );
      if (comparePassword) {
        const hashPassword = await hash(new_password, 8);

        await users.updateOne(findDataUser, { password: hashPassword });
      } else if (!comparePassword) {
        return 'passwords do not match'
      }
    }

    //trocar email do usuário
    const find = { username };
    const update = {
      email: new_email,
      updated_at: Date.now().toString(),
    };
    const findDataUser = await users.findOneAndUpdate(find, update);

    if(!findDataUser) {
      return 'Not found data!'
    }
    //retornar sem a senha por segurança
    const view = {
      ok: true,
      new_email,
    };

    return view;
  }
}
