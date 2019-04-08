import { Injectable } from '@angular/core';
import { Auth } from '../module/auth';
import { BehaviorSubject } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

const user = new Auth("","");

@Injectable(
  {
    providedIn: 'root',
  }
)



export class AuthService implements  CanActivate {

  
    private auth: Auth ; 
    private authValid = new Auth("yohanan","231081");
    protected authSubject  = new BehaviorSubject(user);
    currentAuth = this.authSubject.asObservable();

  constructor(private router: Router) { 
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    
    this.currentAuth.subscribe(auth => this.auth = auth); 
    if (!this.valid()) {
      this.router.navigate(['/']);
    }
    return true;
  }


  setAuth(auth:Auth)
  {
    this.auth = auth; 
    return this.auth;
  }

  getAuth(): void {
     if(this.auth === null){
         console.log("il n'y a pas d'utilisateur connu dans le service ");
     }else{
         console.log("logging : " + this.auth.getLogging()) ;
     }
  }
  
  public valid()
  {
      if((this.authValid.getLogging() === this.auth.getLogging())&&(this.auth.getMdp() === this.authValid.getMdp()))
      {
          return true; 
      }else{
          return false; 
      }
  }

 
  
 public change(auth: Auth)
 {
   this.authSubject.next(auth);
   return auth;
 }

 public destroy()
 {
   this.authSubject.next(null);
   this.authSubject.complete();
 }

 public getAuthObservable()
 {
   return this.authSubject; 
 }
    
}
