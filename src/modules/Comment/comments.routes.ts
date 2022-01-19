import { Router } from 'express'
import { CreateCommentController } from './UseCases/createComment/CreateCommentController'
import { ShowCommentController } from './UseCases/showComment/ShowCommentController'

import { checkAuth } from '../../middleware/check-auth'

const commentsRoutes = Router()

const createCommentController = new CreateCommentController()
const showCommentController = new ShowCommentController()


commentsRoutes.post('/', checkAuth, createCommentController.handle)
commentsRoutes.get('/', checkAuth, showCommentController.handle)


export { commentsRoutes }