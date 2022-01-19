import { CreateClassUseCase } from '../../src/modules/Class/UseCases/createClass/CreateClassUseCase';

describe('Create class', () => {
  it('should be able to create class', async () => {
    const createClassUseCase = new CreateClassUseCase();

    const session = await createClassUseCase.execute({
      name: 'test',
      description: 'Testing',
      video: 'https://www.urltest.com',
    });
    console.log(session)
    expect(session).toContain({
      ok: true
    });
  });
  //   it('should not be able to authenticate with unregistered user', async() => {
  //     const createClassUseCase =  new CreateClassUseCase()

  //     const session = await createClassUseCase.execute({
  //       username: "testerror",
  //       password: "1234568"
  //     })
  //     expect(session).toBe('Username or password invalid!')
  //   })
});
