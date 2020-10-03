import { Router } from 'express';
import sneakers from './sneakers';
const routes = Router();

routes.use([sneakers]);

export default routes;
