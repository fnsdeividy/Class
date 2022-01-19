import { Router } from 'express';
import { CreateCommentController } from './UseCases/createComment/CreateCommentController';
import { ListCommentsController } from './UseCases/listComments/ListCommentsController';
import { DeleteCommentController } from './UseCases/deleteComment/DeleteCommentController';

import { checkAuth } from '../../middleware/check-auth';

const commentsRoutes = Router();

const createCommentController = new CreateCommentController();
const listCommentsController = new ListCommentsController();
const deleteCommentController = new DeleteCommentController();

commentsRoutes.post('/', checkAuth, createCommentController.handle);
commentsRoutes.get('/', checkAuth, listCommentsController.handle);
commentsRoutes.delete('/:id', checkAuth, deleteCommentController.handle);

export { commentsRoutes };
