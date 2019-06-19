
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders }
  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
      const httpReq = req.clone({
        //  setHeaders: {'Content-Type': 'application/json'}
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
             'Token': 'AJDHAHFSDF5F54S5DFS45FSF' 
        })

      });
      return next.handle(httpReq);
    }
}



