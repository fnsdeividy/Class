import { classes } from '../../model/ClassModel';

interface IShowClassDetails {
  name: string;
  description?: string;
  video?: string;
  date_init?: Date;
  date_end?: Date;
}

export class ShowClassDetailsUseCases {
  async execute({ name }: IShowClassDetails) {
    const ClassDetail = await classes.findOne({ name });

    if (!ClassDetail) {
      return 'Not found class';
    }

    const view = {
      namer: ClassDetail.name,
      description: ClassDetail.description,
      date_init: ClassDetail.date_init,
      date_end: ClassDetail.date_end,
    };

    return view;
  }
}
