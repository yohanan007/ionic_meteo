import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { coordonnee } from '../module/coordonnee';
import { Meteo } from '../module/meteo';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { error } from 'util';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  static key = '2b01dfb20bca7f835bcb96d06f6c1823';
  coordonne: coordonnee;
  temperature: Meteo;
  adresseMeteo = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient)
   {
   }


   public getKey(): string
   {
    return MeteoService.key;
   }

   public meteo(latitude: number, longitude: number )
   {
    console.log('latitude : ' + latitude);
    console.log('longitude : '  + longitude);
   this.coordonne = new coordonnee(longitude,latitude); 

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};

      console.log('latitude : ' + this.coordonne.getLatitude());
    console.log('hhtpoption'  + httpOptions);
    console.log('adresse  ' + this.adresseMeteo);

    return  this.http.get(this.adresseMeteo + "?lat=" + this.coordonne.getLatitude() + "&lon=" 
    + this.coordonne.getLongitude() + "&APPID=" + MeteoService.key)/*.subscribe((response: Meteo) => { console.log('reponse: ' + response);
    for (let item in response)
    {
        console.log( 'item'  + item);
    }
    this.temperature =  response;
    console.log("recherche de la temperature : " + this.temperature.name);
    console.log(this.temperature.weather[0].main);
    console.log("temperature maximale "  + this.temperature.main.temp_max);
  })*/;
    }
}
