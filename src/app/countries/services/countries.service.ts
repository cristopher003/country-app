import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private URL:string="https://restcountries.com/v3.1";
  // private URL:string="https://countryapi.io/api/all";
  private API_KEY=environment.api_key;

  constructor(private httpClient:HttpClient ) {
    console.log(this.API_KEY);
   }

  searchCapital(term:string):Observable<Country[]>{
    // return this.httpClient.get<Country>(`${this.URL}/capital/${term}?apikey=${this.API_KEY}`).
    return this.httpClient.get<Country[]>(`${this.URL}/capital/${term}`).
    pipe(
      catchError(error=> of())
    );
  } 


  searchCountry(term:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.URL}/name/${term}?fullText=true`).
    pipe(
      catchError(error=> of([]))
    );
  }


  searchRegion(term:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.URL}/region/${term}`).
    pipe(
      catchError(error=> of([]))
    );
  }

  searchCountryByAlpha(code:string):Observable<Country|null>{
    return this.httpClient.get<Country[]>(`${this.URL}/alpha/${code}`).
    pipe(
      map(countries=> countries.length >0?countries[0]:null),
      catchError(error=> of(null))
    );
  }

}
