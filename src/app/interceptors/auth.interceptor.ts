import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const clonedReq = req.clone({
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${this.authService.getToken()}`
            })
        });
        return next.handle(clonedReq).pipe(
            tap(
                (event : HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                            //Manejar la respuesta
                      }
                },
                (error : HttpErrorResponse ) => {
                    if (error.status == 401) {
                        this.authService.logout();
                        this.router.navigate(['/login']);
                    }
                }
            )
        )
    }
}
