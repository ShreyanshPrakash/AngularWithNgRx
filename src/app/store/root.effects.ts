import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { ActionTypes, GetPageContentAction, ApiCallSuccessAction, ApiCallFailedAction } from './root.actions';
import { HttpClientService } from '../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class RootEffects {

  constructor( private actions$: Actions, private http: HttpClientService ){}

  @Effect()
  pageContent = this.actions$.pipe(
    ofType( ActionTypes.GET_PAGE_CONTENT ),
    switchMap( ( action: GetPageContentAction ) => this.http.get( action.payload.url )
    .pipe(
      map( ( res: HttpResponse<any> ) => new ApiCallSuccessAction( res ) ),
      catchError( ( err: HttpErrorResponse ) => of( new ApiCallFailedAction( err ) ) )
    )))

  
}
