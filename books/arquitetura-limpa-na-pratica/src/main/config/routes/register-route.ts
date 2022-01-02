import { makeRegisterUserController } from '@/main/facotories';
import { Router } from 'express';
import { adaptRoute } from '@/main/adapters/express-route-adapter';

export default (router: Router) => {
  router.post('/register', adaptRoute(makeRegisterUserController()));
};
