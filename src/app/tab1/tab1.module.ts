
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HttpModule } from '@angular/http';
import { AuthService } from '../service/auth.service';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  providers: [AuthService],
  declarations: [Tab1Page]
})


export class Tab1PageModule {



 
}
