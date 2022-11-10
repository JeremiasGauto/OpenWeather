import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI: String = '';
  ApiKey: String = 'fabfc24d07e220970bc3361cb4030d8e';
  
  constructor(private httpcliente: HttpClient) {
    this.URI=`https://api.openweathermap.org/data/2.5/weather?appid=${this.ApiKey}&q=`
    
  }
  
  getWeather(cityName:string) {
    return this.httpcliente.get(`${this.URI}${cityName}`)
  }


}
