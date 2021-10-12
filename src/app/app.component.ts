import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  teams = [{name: 'Team Name', description: 'Team Size'}];
  bestTeam = [{name: 'Team Name 2', description: 'Team Size 2'}];

  onClick(item) {
    console.log('clicked', item);
  }
}
