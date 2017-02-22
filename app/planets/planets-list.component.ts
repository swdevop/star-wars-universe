import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'planets-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let planet of planets">
            <a href="#" [routerLink]="['/planets', planet.id]">
          {{planet.name}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})

export class PlanetsListComponent implements OnInit{
  planets: Planet[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private planetsService : PlanetsService) { }

  ngOnInit(){
    this.planetsService
      .getAll()
      .subscribe(
        /* happy path */ p => this.planets = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);
  }
}
