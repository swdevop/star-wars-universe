"use strict";
var router_1 = require('@angular/router');
var people_list_component_1 = require('./people/people-list.component');
var person_details_component_1 = require('./people/person-details.component');
var planets_list_component_1 = require('./planets/planets-list.component');
var planet_details_component_1 = require('./planets/planet-details.component');
// Route config let's you map routes to components
var routes = [
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
        component: people_list_component_1.PeopleListComponent,
    },
    // map '/persons/:id' to person details component
    {
        path: 'persons/:id',
        component: person_details_component_1.PersonDetailsComponent
    },
    // map '/' to '/persons' as our default route
    {
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
    },
    {
        path: 'planets',
        component: planets_list_component_1.PlanetsListComponent,
    },
    {
        path: 'planets/:id',
        component: planet_details_component_1.PlanetDetailsComponent
    },
    {
        path: '',
        redirectTo: '/planets',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map