import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Auth } from '../module/auth';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:  [ AuthService ]
})

export class Tab2Page implements OnInit, OnDestroy {

 
 auth:Auth; 
 logging : string; 


  constructor(private authService:AuthService, private router: Router){
     
  }

  ngOnInit(){
    this.authService.currentAuth.subscribe(auth => this.auth = auth);
    this.logging = this.auth.getLogging();
  }


  ngOnDestroy(){

  }
  
}
