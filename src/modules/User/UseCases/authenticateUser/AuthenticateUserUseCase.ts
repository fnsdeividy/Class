import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { users } from '../../model/UserModel';

interface IAuthenticateUser {
  username: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ username, password }: IAuthenticateUser) {
    // Receber username, password
    const user:any = await users.findOne({username})

    if (!user) {
      return 'Username or password invalid!'
    }
    // Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return 'Username or password invalid!';
    }
    // Gerar o token
    const token = sign({ username }, '1gef20ce0cad89a33gjkltyb35t1t4ns', {
      subject: user.username,
      expiresIn: '1d',
    });
    return token;
  }
}