import { Router } from 'express'
import { userRoutes } from '../modules/User/users.routes'
import { classRoutes } from '../modules/Class/classes.routes'

const routes = Router()

routes.use('/users', userRoutes);

routes.use('/classes', classRoutes)

export { routes }