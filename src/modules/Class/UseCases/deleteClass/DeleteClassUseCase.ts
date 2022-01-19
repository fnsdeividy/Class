import { classes } from '../../model/ClassModel';

interface IDeleteClass {
  id: string;
}

export class DeleteClassUseCase {
  async execute({ id }: IDeleteClass) {
    const findDataUser = await classes.findOneAndDelete({ id });

    if (!findDataUser) {
      return 'Not found data!';
    }

    const view = {
      ok: true,
      deleted: findDataUser,
    };
    return view;
  }
}
