import { CreateUserUseCase } from '../../src/modules/User/UseCases/createUser/CreateUserUseCase'
import { AuthenticateUserUseCase } from '../../src/modules/User/UseCases/authenticateUser/AuthenticateUserUseCase'

describe('Authentication', () => {
  it('should be able to authenticate', async() => {
    const createUserUseCase =  new CreateUserUseCase()
    const authenticateUserUseCase =  new AuthenticateUserUseCase()

    await createUserUseCase.execute({
      username: "Test",
      email:"test@test.com",
      password: "123456"
    })
    const session = await authenticateUserUseCase.execute({
      username: "Test",
      password: "123456"
    })
    expect(session).toContain("")
  });
  it('should not be able to authenticate with unregistered user', async() => {
    const createUserUseCase =  new CreateUserUseCase()
    const authenticateUserUseCase =  new AuthenticateUserUseCase()

    await createUserUseCase.execute({
      username: "Test",
      email:"test@test.com",
      password: "123456"
    })
    const session = await authenticateUserUseCase.execute({
      username: "testerror",
      password: "1234568"
    })
    expect(session).toBe('Username or password invalid!')
  })
})