import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MeteoService } from '../service/meteo.service';
import { Meteo } from '../module/meteo';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {


  lat: number;
  lon: number;
  meteoVariable: Meteo;
  

  constructor(private geolocation: Geolocation, private meteo: MeteoService) {}

  ngOnInit(): void {
  }

start(){

this.geolocation.getCurrentPosition().then((resp) => {
    this.lat =  Number(resp.coords.latitude);
    this.lon  =  Number(resp.coords.longitude);
    console.log('lat : ' + this.lat + ' lon : '  + this.lon + 'type : ' + isNaN(this.lat));  
    
   this.meteo.meteo(Number(this.lat), Number(this.lon)).subscribe((data:Meteo)=>{ this.meteoVariable = data; });
   }).catch((error) => {
     console.log('Error getting location', error);
   });



   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
   });

  }

  

}
