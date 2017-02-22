import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './people/people-list.component';
import { PersonDetailsComponent } from './people/person-details.component';
import { PlanetsListComponent } from './planets/planets-list.component';
import { PlanetDetailsComponent } from './planets/planet-details.component';

// Route config let's you map routes to components
const routes: Routes = [
  //map '/dashboard'
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent
  // },
  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // },
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
  {
    path: 'planets',
    component: PlanetsListComponent,
  },
  {
    path: 'planets/:id',
    component: PlanetDetailsComponent
  },
  {
    path: '',
    redirectTo: '/planets',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
