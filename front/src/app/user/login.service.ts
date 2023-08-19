import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private uri = 'http://localhost:8080/api/user/login';

  private tokenKey = 'token';

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  async login(loginForm) {
    return this.httpClient
      .post(this.uri, loginForm)
      .toPromise()
      .then((resp) => {
        let token = resp['token'];
        let type = resp['type'];
        const tokenWithType = type + token;
        this.cookieService.set(this.tokenKey, tokenWithType);
      });
  }

  getToken(): string | null {
    return this.cookieService.get(this.tokenKey);
  }

  logout(): void {
    this.cookieService.delete(this.tokenKey);
  }
}
