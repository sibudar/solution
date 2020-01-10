import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl: string = 'https://restcountries.eu/rest/v2/' ;

  constructor(private http: HttpClient) { }

  public getAllCountries() {
    return this.http.get(this.baseUrl + 'all')
  }


  /**
   * This function recieve a country code and returns Observable
   * @param alphaCode Country code  
   */
  public getCountry(alphaCode) {
    return this.http.get(this.baseUrl +"alpha/" + alphaCode )
  }
}
