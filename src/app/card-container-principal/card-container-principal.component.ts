import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-card-container-principal',
  templateUrl: './card-container-principal.component.html',
  styleUrls: ['./card-container-principal.component.less']
})
export class CardContainerPrincipalComponent implements OnInit {

  constructor(private weather: WeatherService) { }

  NombreCiudad: string = 'london'
  weath: any;


  ngOnInit(): void {
    this.cargaWeather()
    
  }

  cargaWeather() {
    this.weather.getWeather(this.NombreCiudad).subscribe(
      res => {
        console.log(res);
        this.weath=res
      },      
      err => console.log(err)
    )
    return 
  }

}