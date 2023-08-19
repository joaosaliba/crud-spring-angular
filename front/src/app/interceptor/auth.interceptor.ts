import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.cookieService.get('token');
    if (!token) {
      this.router.navigate(['/']); // Redirect to login page if token doesn't exist
    }

    if (token) {
      const authReq = request.clone({
        setHeaders: {
          Authorization: `${token}`,
        },
      });
      return next.handle(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // Unauthorized, token is invalid
            this.router.navigate(['/']); // Redirect to login page
          }
          return throwError(error);
        })
      );
    }

    return next.handle(request);
  }
}
