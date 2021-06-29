import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { AuthData } from '../../modals/auth-data.model';
import { AuthLoginData } from '../../modals/auth-data.model';
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private isAuthenticated = false;
  private token : any;
  private tokenTimer: any;
  private userId!: string;
  private role!: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getUserRole() {
    return this.role;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(email:string, password:string, name:string, role:string){
    const authData: AuthData = {email:email, password: password, name:name, role:role}
    this.httpClient.post(environment.apiUrl+ '/signup',authData)
    .subscribe(Response => {
        console.log(Response);
    })
  }

  login(email:string, password:string){
    const authData: AuthLoginData = {email:email, password: password}
    this.httpClient.post<{token: string; expiresIn: number; userId: string, role: string}>(environment.apiUrl+ '/login',authData)
    .subscribe( Response => {
      const token = Response.token;
      this.token = token;
      if (token) {
        const expiresInDuration = Response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.userId = Response.userId;
        this.role = Response.role;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + expiresInDuration * 1000
        );
        console.log(expirationDate);
        this.saveAuthData(token, expirationDate, this.userId, this.role);
        this.router.navigate(["/admin/product"]);
      }
    }, error => {
      this.authStatusListener.next(false);
    });
}

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = "";
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/admin"]);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, userRole: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);
    localStorage.setItem("userRole", userRole);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    };
  }

}
