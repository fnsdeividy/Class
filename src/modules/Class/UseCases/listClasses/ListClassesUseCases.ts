import { classes } from '../../model/ClassModel';
import {} from 'express';

interface IListClasses {
  page: string;
}
export class ListClassesUseCases {
  async execute({ page }: IListClasses) {
    const parsedPage = parseInt(page);
    const numberPages = 50;
    const lastIndexComment = parsedPage * numberPages;
    let firstIndexComment = lastIndexComment - numberPages;

    const findClasses = await classes
      .find()
      .skip(firstIndexComment)
      .limit(numberPages);

    if (findClasses.length === 0) {
      return 'Not found data!';
    }

    return findClasses;
  }
}
