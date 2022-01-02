import { makeRegisterUserController } from '@/main/facotories';
import { Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';

export default (router: Router) => {
  router.post('/register', adaptRoute(makeRegisterUserController()));
};
