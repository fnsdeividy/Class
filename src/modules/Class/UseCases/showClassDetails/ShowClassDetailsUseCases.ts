import { classes } from '../../model/ClassModel';
import { comments } from '../../../Comment/model/CommentModel';

interface IShowClassDetails {
  id: string;
  description?: string;
  video?: string;
  date_init?: Date;
  date_end?: Date;
}

export class ShowClassDetailsUseCases {
  async execute({ id }: IShowClassDetails) {
    //verificar hash do mongo
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return 'Invalid id';
    }
    // Buscar
    const ClassDetail = await classes.findById({ _id: id });

    if (!ClassDetail) {
      return 'Not found class';
    }
    const last_3_comments = await comments
      .find({ class_id: ClassDetail._id })
      .limit(3);

    const view = {
      name: ClassDetail.name,
      description: ClassDetail.description,
      date_init: ClassDetail.date_init,
      date_end: ClassDetail.date_end,
      comments: last_3_comments,
    };

    return view;
  }
}
