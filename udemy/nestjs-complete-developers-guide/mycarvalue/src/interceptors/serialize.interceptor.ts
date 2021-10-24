import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

export class SerializeInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log(`Running before the handler`);

    return next.handle().pipe(
      map((data: any) => {
        // here
        console.log(data)
      })
    );
  }
  
}