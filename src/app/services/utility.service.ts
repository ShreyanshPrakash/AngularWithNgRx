import { Injectable } from '@angular/core';
import { apiEndpoints } from '../config/apiEndpoints.config';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  endpoints: { [key: string]: string };
  constructor() { }

  setApiEndpoints( env: string ): void {
    this.endpoints = apiEndpoints[ env ];
  }

  getApiEndpoints(): { [key: string]: string } {
    return this.endpoints;
  }


  
}
