import { classes } from '../../model/ClassModel';

interface IDeleteClass {
  name: string;
  
}

export class DeleteClassUseCase {
  async execute({
    name
  }: IDeleteClass) {
    const findDataUser = await classes.findOneAndDelete({name})

    console.log(findDataUser)
    
    if (!findDataUser) {
      return 'Not found data!';
    }
    
    const view = {
      ok:true,
      deleted:name
    }
    return view;
  }
}
