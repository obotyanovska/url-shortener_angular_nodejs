import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector ) { }

  public intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<any>> {
    let updateReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    return next.handle(updateReq)
  }
}