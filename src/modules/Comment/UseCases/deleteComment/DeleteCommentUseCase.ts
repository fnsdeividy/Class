import { comments } from '../../model/CommentModel';

export class DeleteCommentUseCase {
  async execute({ id }: any) {
    const deleteComment = await comments.findOneAndDelete({ id });

    if (!deleteComment) {
      return 'Not found data';
    }
    const view = {
      ok: true,
      deleted: deleteComment,
    };
    return view;
  }
}
