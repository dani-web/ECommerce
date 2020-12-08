import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class ErrorInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(private router: Router, private toastr: ToastrService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<import('@angular/common/http').HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(error => {
        if (error) {
          if (error.status === 400) {
            this.toastr.error(error.error.message.error.error.statusCode);
          }
          if (error.status === 404) {
            this.router.navigateByUrl('/not-found');
          }
          if (error.status === 500) {
            const navigationExtras: NavigationExtras = {state: {error: error.error}};
            this.router.navigateByUrl('/server-error');
          }

        }
        return throwError(error);
      })
    );

    ;
  }

}
