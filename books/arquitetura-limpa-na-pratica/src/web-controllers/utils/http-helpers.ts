import { HttpResponse } from '../ports';

export const created = (data: any = undefined): HttpResponse => response(201, data);
export const ok = (data: any = undefined): HttpResponse => response(200, data);

export const badRequest = (data: any = undefined): HttpResponse => response(400, data);

export const response = (statusCode: number, data: any = undefined): HttpResponse => {
  return {
    statusCode,
    body: data || undefined,
  };
};
