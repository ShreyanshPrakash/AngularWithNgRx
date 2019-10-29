import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private http: HttpClient ) { }

  get( url: string, headers?: HttpHeaders ){
    let commonHeaders = this.setCommonHeaders();
    // how to add the commonheaders and the haeders from the component.
    return this.http.get( url )
  }

  setCommonHeaders(){

  }

}
