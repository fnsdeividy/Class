import { Router } from 'express'
import { userRoutes } from '../modules/User/users.routes'
import { classRoutes } from '../modules/Class/classes.routes'
import { commentsRoutes } from '../modules/Comment/comments.routes'

const routes = Router()

routes.use('/users', userRoutes);

routes.use('/classes', classRoutes)

routes.use('/comment', commentsRoutes)

export { routes }