import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../services/country.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  id: any;
  name: string = "sbudA" ; 
  constructor(private route: ActivatedRoute , private countryService: CountryService) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
     });


     this.countryService.getCountry(this.id).subscribe( (life) => {
       console.log(life)
     })

   }

  ngOnInit() {
  }

}
