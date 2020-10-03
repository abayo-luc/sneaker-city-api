import { Router } from 'express';
import * as controller from './controllers';

const routes = Router();

routes.get('/sneakers', controller.getAll);
routes.get('/sneakers/:id', controller.getOne);

export default routes;
