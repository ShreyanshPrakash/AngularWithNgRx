import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Merchant';

  constructor( private utilityService: UtilityService){}

  ngOnInit(){
    // change this later to reflect the enepoints as per the environment
    this.utilityService.setApiEndpoints( 'dev' );
  }
}
