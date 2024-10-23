import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error.status === 401 || error.status === 503 || error.status === 0) {
          this.router.navigate(['/unavailable-service']);
        } else if (error.status === 404 || error.status === 400) {
            this.router.navigate(['/not-found']);
        } else if (error.status === 403) {
            this.router.navigate(['/forbidden']);
        }
        // todo: other error responses
        return of(error);
      })
    );
  }
}
