import { classes } from '../../model/ClassModel';

interface ICreateClass {
  name: string;
  description: string;
  video: string;
  date_init: Date;
  date_end: Date;
}

interface IShowClass {
  name: string;
  description: string;
}

export class ShowAllClassesUseCases {
  async execute() {
    let Task:Array<IShowClass> = []
    //verificar se existe no Banco
    const checkIfVideoAlreadyExists: Array<ICreateClass> = await classes.find();

    //Verificar se existe dados
    if (checkIfVideoAlreadyExists.length === 0) {
      return 'Not found class';
    }
    
    checkIfVideoAlreadyExists.forEach((item) => {
      Task.push({ name: item.name, description: item.description });
    })

    const view = {
      ok: true,
      classes:Task,
    };

    return view;
  }
}
