import { Router } from 'express'
import { userRoutes } from '../modules/User/users.routes'

const routes = Router()

routes.use('/users', userRoutes)