import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?:Country;

    constructor(
      private activatedRoute:ActivatedRoute,
      private countriesService:CountriesService,
      private router:Router
    ){

    }

  ngOnInit(): void {
   this.activatedRoute.params.pipe(
    switchMap(({id})=>this.countriesService.searchCountryByAlpha(id)),
   ).subscribe((country)=>{
    if(!country){
      return this.router.navigateByUrl('');
    }
    return this.country=country;   
   });
  }


  getValuesOf(object: Record<string, any>, key: string): any[] {
    // Verifica si el objeto tiene la clave especificada
    if (object && key in object) {
      // Retorna los valores del objeto correspondiente a la clave
      return Object.values(object[key]);
    }
    // Si la clave no existe, retorna un arreglo vacío
    return [];
  }
}
