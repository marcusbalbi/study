import { HttpResponse } from '../ports';

export const created = (data: any): HttpResponse => response(201, data);
export const ok = (data: any): HttpResponse => response(200, data);

export const response = (statusCode: number, data: any): HttpResponse => {
  return {
    statusCode,
    body: data,
  };
};
