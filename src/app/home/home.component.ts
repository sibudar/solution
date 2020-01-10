import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: any ; 
  constructor(private countryService: CountryService) { 

    this.countryService.getAllCountries().subscribe( (res) => {
      console.log(res)
      this.countries = res ;
    })
  }

  ngOnInit() {
  }

}
