import { comments } from '../../model/CommentModel';
import { classes } from '../../../Class/model/ClassModel';

interface ICreateComment {
  comment: string;
  class_id: string;
}

export class CreateCommentUseCase {
  async execute({ comment, class_id }: ICreateComment) {
    const findClass = await classes.findById({ _id: class_id });
    const Totalcomments = findClass.total_comments;
    const update = {
      total_comments: Totalcomments + 1,
    };

    const commentEntity = await comments.insertMany({
      class_id,
      comment,
      date_create: Date.now().toString(),
    });

    if (!commentEntity) {
      return 'FAILED: Not create';
    }

    await classes.updateOne(findClass, update);

    return commentEntity;
  }
}
