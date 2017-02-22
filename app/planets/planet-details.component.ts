import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Planet } from './planet';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'planet-details',
  templateUrl: './app/planets/planet-details.component.html'
})
export class PlanetDetailsComponent implements OnInit, OnDestroy {
  planet: Planet;
  sub: any;

  constructor(private planetsService: PlanetsService,
              private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting planet with id: ', id);
      this.planetsService
        .get(id)
        .subscribe(p => this.planet = p);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  gotoPlanetsList(){
    let link = ['/planets'];
    this.router.navigate(link);
  }

}
