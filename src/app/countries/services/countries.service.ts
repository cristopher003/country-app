import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environments';
import { cacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private URL:string="https://restcountries.com/v3.1";
  // private URL:string="https://countryapi.io/api/all";
  private API_KEY=environment.api_key;

  public cacheStore:cacheStore={
    byCapital:{term:'',countries:[]},
    byCountry:{term:'',countries:[]},
    byRegion:{region:'',countries:[]}
  }
  

  constructor(private httpClient:HttpClient ) {
    this.getLocalStoragr();
   }


  private getHttpRequest(url:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${url}`).
    pipe(
      catchError(error=> of())
    );
  }
  searchCapital(term:string):Observable<Country[]>{
    // return this.httpClient.get<Country>(`${this.URL}/capital/${term}?apikey=${this.API_KEY}`).
    const url=`${this.URL}/capital/${term}`;
    return this.getHttpRequest( url).
    pipe(
      tap(countries => this.cacheStore.byCapital={term,countries}),
      tap(()=>this.setLocalStorage())
    );
  } 


  searchCountry(term:string):Observable<Country[]>{
    const url=`${this.URL}/name/${term}?fullText=true`;
    return this.getHttpRequest( url).
    pipe(
      tap(countries => this.cacheStore.byCountry={term,countries}),
      tap(()=>this.setLocalStorage())
    );
  }


  searchRegion(term:Region):Observable<Country[]>{
    const url=`${this.URL}/region/${term}`;
    return this.getHttpRequest( url).
    pipe(
      tap(countries => this.cacheStore.byRegion={region:term,countries}),
      tap(()=>this.setLocalStorage())
    );
  }

  searchCountryByAlpha(code:string):Observable<Country|null>{
    return this.httpClient.get<Country[]>(`${this.URL}/alpha/${code}`).
    pipe(
      map(countries=> countries.length >0?countries[0]:null),
      catchError(error=> of(null))
    );
  }

  private setLocalStorage(){
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
  }

  getLocalStoragr(){
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore=JSON.parse(localStorage.getItem('cacheStore')!);
  }

}
