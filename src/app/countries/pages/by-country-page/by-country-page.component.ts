import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  countries:Country[]=[];
  public initial:string='';


  constructor(private countriesService:CountriesService){
  }
  
  
  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCountry.countries;
   this.initial=this.countriesService.cacheStore.byCountry.term;
   console.log(this.initial);
   }

  searchByCountry(term:string):void{
    this.countriesService.searchCountry(term).subscribe(
      contries=>{
       this.countries=contries;
      }
    );
  }
}
