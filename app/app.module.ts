import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './people/people-list.component';
import { PersonDetailsComponent } from './people/person-details.component';
import { PlanetDetailsComponent } from './planets/planet-details.component';
import { PlanetsListComponent } from './planets/planets-list.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    PlanetDetailsComponent,
    PlanetsListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
