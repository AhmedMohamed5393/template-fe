import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.cookieService.get('token');
        const request = req.clone({ withCredentials: true, setHeaders: { authorization: token } });
        return next.handle(request);
    }
}
