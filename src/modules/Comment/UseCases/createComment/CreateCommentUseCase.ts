import { comments } from '../../model/CommentModel';

interface ICreateComment {
  comment: string;
  class_id: string;
}

export class CreateCommentUseCase {
  async execute({
    comment,
    class_id
  }: ICreateComment) {


    const commentEntity = await comments.insertMany({
      class_id,
      comment,
      date_create:Date.now().toString()
    });

   

    return commentEntity;
  }
}
