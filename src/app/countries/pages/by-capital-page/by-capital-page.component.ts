import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries:Country[]=[];
  public isLoading:boolean=false; 
  public initial:string='';

  constructor(private countriesService:CountriesService){
  }

  ngOnInit(): void {
   this.countries=this.countriesService.cacheStore.byCapital.countries;
  this.initial=this.countriesService.cacheStore.byCapital.term;
  console.log(this.initial);
  }

  searchByCapital(term:string):void{
    this.isLoading=true;
    this.countriesService.searchCapital(term).subscribe(
      contries=>{
       this.countries=contries;
      this.isLoading=false;
      }
    );
  }
}
