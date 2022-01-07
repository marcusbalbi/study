import { RegisterUserAndSendEmailController } from '@/web-controllers/register-user-and-send-email-controller';
import { Request, Response } from 'express';
import { HttpRequest } from '@/web-controllers/ports';

export const adaptRoute = (controller: RegisterUserAndSendEmailController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
