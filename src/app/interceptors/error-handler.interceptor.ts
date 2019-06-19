
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpErrorResponse }
  from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, delay, retryWhen, take, concat, tap, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes("123")) {
      return next.handle(req);
    }
    return next.handle(req).pipe(
      retry(2),
      catchError((error : HttpErrorResponse)=>this.errorHandler(error))
    );
    // return next.handle(req).pipe(
    //   retryWhen(error => error.pipe(
    //             delay(5000), 
    //             take(3),
    //             concat(throwError(error)))),
    //   catchError((error : HttpErrorResponse) => this.errorHandler(error))
    // );
  }


  errorHandler(error: HttpErrorResponse){
    this.toastr.error("Algo salio mal.!");
    return throwError("Errror personalizado");
  }
}



