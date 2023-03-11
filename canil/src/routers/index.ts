import { Router} from "express";

import * as HomeControllers from '../controllers/HomeControllers'
import * as SearchControllers from '../controllers/SearchController'

const routes = Router()

routes.get('/',HomeControllers.Home)

routes.get('/dogs',HomeControllers.dogsPage)

routes.get('/cats',HomeControllers.catsPage)

routes.get('/fishs',HomeControllers.fishPage)

routes.get('/search',SearchControllers.search)

export default routes
