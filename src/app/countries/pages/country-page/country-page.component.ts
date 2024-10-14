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


  getValuesOf(object: Record<string, any>, key?: string): any[] {
    const getAllValues = (obj: Record<string, any>): any[] => {
      const values: any[] = [];
      for (const value of Object.values(obj)) {
        if (typeof value === 'object' && value !== null) {
          // Si el valor es un objeto, llama recursivamente
          values.push(...getAllValues(value));
        } else {
          // Si no es un objeto, añade el valor al arreglo
          values.push(value);
        }
      }
      return values;
    };
  
    // Verifica si el objeto es válido
    if (object) {
      // Si se proporciona una clave y existe en el objeto, retorna los valores correspondientes a esa clave
      if (key && key in object) {
        return getAllValues(object[key]);
      }
      // Si no se proporciona una clave, retorna los valores del objeto completo como un arreglo
      return getAllValues(object);
    }
    // Si el objeto no es válido, retorna un arreglo vacío
    return [];
  }
  
}
