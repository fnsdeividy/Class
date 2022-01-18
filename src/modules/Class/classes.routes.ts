import { Router } from 'express'
import { CreateClassController } from '../UseCases/createClass/CreateClassController'
import { checkAuth } from '../../middleware/check-auth'

const classRoutes = Router()

const createClassController = new CreateClassController()


classRoutes.post('/', checkAuth, createClassController.handle)

export { classRoutes }