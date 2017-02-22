"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var people_service_1 = require('./services/people.service');
var planets_service_1 = require('./services/planets.service');
var hypermedia_util_service_1 = require("./services/hypermedia-util.service");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Star Wars Universe';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1> {{title}} </h1>\n  <nav>\n    <a routerLink=\"/persons\">People</a>\n    <a routerLink=\"/planets\">Planets</a>\n    <a routerLink=\"/films\">Films</a>\n    <a routerLink=\"/species\">Species</a>\n    <a routerLink=\"/vehicles\">Vehicles</a>\n    <a routerLink=\"/starships\">Starships</a>\n  </nav>\n  <router-outlet></router-outlet>\n  ",
            providers: [people_service_1.PeopleService, planets_service_1.PlanetsService, hypermedia_util_service_1.HypermediaUtilService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map