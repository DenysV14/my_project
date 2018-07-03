import Router from 'koa-router';
import mainController from '../controllers/mainController'


let router = new Router();

router.get('/test', mainController.test)

export default router;