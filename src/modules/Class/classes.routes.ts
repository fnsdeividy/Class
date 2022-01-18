import { Router } from 'express'
import { CreateClassController } from './UseCases/createClass/CreateClassController'
import { ShowAllClassesController } from './UseCases/showAllClasses/ShowAllClassesController'
import { ShowClassDetailsController } from './UseCases/showClassDetails/ShowClassDetailsController'
import { checkAuth } from '../../middleware/check-auth'

const classRoutes = Router()

const createClassController = new CreateClassController()
const showAllClassesController = new ShowAllClassesController()
const showClassDetailsController = new ShowClassDetailsController()


classRoutes.post('/', checkAuth, createClassController.handle)
classRoutes.get('/', checkAuth, showAllClassesController.handle)
classRoutes.get('/:id', checkAuth, showClassDetailsController.handle)

export { classRoutes }