import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ResponseDTO } from './ResponseDTO';

export class GlobalResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        const dto = new ResponseDTO();
        if (typeof data === 'string') {
          dto.message = data;
        } else {
          dto.data = data;
        }
        return dto;
      }),
    );
  }
}
