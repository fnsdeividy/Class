import { Router } from 'express'
import { CreateClassController } from '../UseCases/createClass/CreateClassController'
import { ShowAllClassesController } from '../UseCases/showAllClasses/ShowAllClassesController'
import { checkAuth } from '../../middleware/check-auth'

const classRoutes = Router()

const createClassController = new CreateClassController()
const showAllClassesController = new ShowAllClassesController()


classRoutes.post('/', checkAuth, createClassController.handle)
classRoutes.get('/', checkAuth, showAllClassesController.handle)

export { classRoutes }