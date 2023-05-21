import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpHandlerFn
} from '@angular/common/http';
import { Observable, RetryConfig, retry } from 'rxjs';
import { RETRY_INTERCEPTOR_CONFIG } from './retry-interceptor-configure';

// https://itnext.io/create-configurable-angular-interceptors-%EF%B8%8F-985bbde8f99b
// @Injectable()
// export class RetryInterceptor implements HttpInterceptor {
//   // private retryConfig: RetryConfig = { count: 3, delay: 1000}

//   constructor(@Inject(RETRY_INTERCEPTOR_CONFIG) private retryConfig: RetryConfig) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(retry(this.retryConfig));
//   }
// }

// https://itnext.io/migrate-angular-interceptors-to-function-based-interceptors-90bd433e0c2a
export const retryInterceptor = (config: RetryConfig) => {
    const interceptor: HttpInterceptorFn = (req: HttpRequest<any>,next: HttpHandlerFn) => {
      return next(req).pipe(retry(config));
    };

    return interceptor;
}
