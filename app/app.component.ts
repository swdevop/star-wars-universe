import { Component } from '@angular/core';
import { PeopleService } from './services/people.service';
import { PlanetsService } from './services/planets.service';
import {HypermediaUtilService} from "./services/hypermedia-util.service";

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <nav>
    <a routerLink="/persons">People</a>
    <a routerLink="/planets">Planets</a>
    <a routerLink="/films">Films</a>
    <a routerLink="/species">Species</a>
    <a routerLink="/vehicles">Vehicles</a>
    <a routerLink="/starships">Starships</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  providers: [PeopleService, PlanetsService, HypermediaUtilService]
})
export class AppComponent {
  title:string = 'Star Wars Universe';
}
