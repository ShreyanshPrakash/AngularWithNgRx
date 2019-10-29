import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { InitialStateModel } from 'src/app/models/initialState.model';
import { GetPageContentAction } from 'src/app/store/root.actions';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( 
    private store: Store<InitialStateModel>, 
    private router: Router,
    private utilityService: UtilityService
    ) { }

  ngOnInit() {
    this.store.pipe(
      select<any>('state')
    ).subscribe( ( state: InitialStateModel ) => console.log( state ) );

    this.store.dispatch( new GetPageContentAction( {
      url : this.utilityService.getApiEndpoints().getPageContent + "header.content.json"
    }))
  }

}
