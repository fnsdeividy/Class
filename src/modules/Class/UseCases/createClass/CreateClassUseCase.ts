import { classes } from '../../model/ClassModel';

interface ICreateClass {
  name: string;
  description: string;
  video: string;
  date_init: Date;
  date_end: Date;
}

export class CreateClassUseCase {
  async execute({
    name,
    description,
    video,
    date_init,
    date_end,
  }: ICreateClass) {
    //verificar se existe no Banco
    const checkIfVideoAlreadyExists = await classes.findOne({ video });
    const checkIfClassNameAlreadyExists = await classes.findOne({ name });

    if (checkIfVideoAlreadyExists || checkIfClassNameAlreadyExists) {
      return 'Class already Exists';
    }

    //inserir no banco
    await classes.insertMany({
      name,
      description,
      video,
      total_comments:0,
      date_init,
      date_end,
      date_create:Date.now().toString(),
    });

    //retornar sem a senha por segurança
    const view = {
      ok: true,
      name,
      description,
      video,
      date_init,
      date_end,
    };

    return view;
  }
}
