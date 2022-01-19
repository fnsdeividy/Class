import { classes } from '../../model/ClassModel';
import { comments } from '../../../Comment/model/CommentModel';

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
    const last_3_comments = await comments.find({class_id:ClassDetail._id}).limit(3)

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
