import { classes } from '../../model/ClassModel';

interface IUpdateClass {
  name: string;
  description: string;
  video: string;
  date_init: Date;
  date_end: Date;
}

export class UpdateClassUseCase {
  async execute({
    name,
    date_end,
    date_init,
    description,
    video,
  }: IUpdateClass) {
    const find = { name };
    const update = {
      date_end,
      date_init,
      description,
      video,
      updated_at: Date.now().toString(),
    };
    const findDataClass = await classes.findOneAndUpdate(find, update);

    if (!findDataClass) {
      return 'Not found data!';
    }else {
       
      const view = {
        ok:true,
        name,
        video,
        description,
        date_init,
        date_end,
      }
      return view;
    }
   
  }
}
