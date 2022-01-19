import { comments } from '../../model/CommentModel';

interface IListClasses {
  page: string;
}

export class ListCommentsUseCase {
  async execute({ page }: IListClasses) {
    const parsedPage = parseInt(page);
    const numberPages = 50;
    const lastIndexComment = parsedPage * numberPages;
    let firstIndexComment = lastIndexComment - numberPages;

    const findComments = await comments
      .find()
      .skip(firstIndexComment)
      .limit(numberPages);

    if (findComments.length === 0) {
      return 'Not found data!';
    }

    return findComments;
  }
}
