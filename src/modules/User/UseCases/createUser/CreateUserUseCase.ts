
interface ICreateUser {
  username: string;
  password: string;
  email: string;
}

export class CreateUserUseCase {
  async execute({ username,email, password }: ICreateUser) {
    console.log(username, password, email)
    


    
  }
}
