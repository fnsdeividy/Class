import { Router } from 'express'
import { CreateCommentController } from './UseCases/createComment/CreateCommentController'
import { ShowCommentController } from './UseCases/showComment/ShowCommentController'
import { DeleteCommentController } from './UseCases/deleteComment/DeleteCommentController'

import { checkAuth } from '../../middleware/check-auth'

const commentsRoutes = Router()

const createCommentController = new CreateCommentController()
const showCommentController = new ShowCommentController()
const deleteCommentController = new DeleteCommentController()


commentsRoutes.post('/', checkAuth, createCommentController.handle)
commentsRoutes.get('/', checkAuth, showCommentController.handle)
commentsRoutes.delete('/:id', checkAuth, deleteCommentController.handle)


export { commentsRoutes }