import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Auth } from '../module/auth';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers:  [ AuthService ]
})
export class Tab1Page implements OnInit, OnDestroy{

  prenom = "yohanan";
  
  reponse: string; 
  nom:string;
  
  auth:Auth;

  constructor(private authService:AuthService, private authVAriable: AuthGuard){
    this.auth = new Auth("","");
 
  }

  // declaration du formulaire 

 authForm = new FormGroup({
    logging: new FormControl(''),
    mdp: new FormControl(''),
  });

  ngOnInit(){
    this.auth.toString();
    this.authService.currentAuth.subscribe(auth => this.auth = auth);  
  }

  // function submit 

          onSubmit() {
            // TODO: Use EventEmitter with form value
           
            this.auth.setLogging(this.authForm.value.logging); 
            this.auth.setMdp(this.authForm.value.mdp); 
            
            this.authService.setAuth(this.auth);

            this.authService.change(this.auth);
            console.log(this.auth.toString());
            if(this.authService.valid())
            {
             
                this.reponse = "vos identifiants sont valide "; 
                
            }else{
              this.reponse = " vos identifiants sont invalide";
            }
          }

          ngOnDestroy() {
            console.log("au revoir!")
         }
}
