import { Router } from 'express'
import { CreateCommentController } from './UseCases/createComment/CreateCommentController'

import { checkAuth } from '../../middleware/check-auth'

const commentsRoutes = Router()

const createCommentController = new CreateCommentController()


commentsRoutes.post('/', checkAuth, createCommentController.handle)


export { commentsRoutes }