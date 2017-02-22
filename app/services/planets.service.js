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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var PlanetsService = (function () {
    function PlanetsService(http) {
        this.http = http;
        this.baseUrl = 'http://swapi.co/api';
    }
    PlanetsService.prototype.getAll = function () {
        var planets$ = this.http
            .get(this.baseUrl + "/planets", { headers: this.getHeaders() })
            .map(mapPlanets)
            .catch(handleError);
        return planets$;
    };
    PlanetsService.prototype.get = function (id) {
        var planet$ = this.http
            .get(this.baseUrl + "/planets/" + id, { headers: this.getHeaders() })
            .map(mapPlanet);
        return planet$;
    };
    PlanetsService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    PlanetsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlanetsService);
    return PlanetsService;
}());
exports.PlanetsService = PlanetsService;
function mapPlanets(response) {
    return response.json().results.map(toPlanet);
}
function toPlanet(r) {
    var planet = ({
        id: extractId(r),
        url: r.url,
        name: r.name,
        rotation: r.rotation_period,
        orbit: r.orbital_period,
        diameter: r.diameter,
        climate: r.climate,
        gravity: r.gravity,
        terrain: r.terrain,
        surface_water: r.surface_water,
        population: r.population,
        residents: r.residents,
        films: r.films,
    });
    console.log('Parsed planet:', planet);
    return planet;
}
function extractId(planetData) {
    var extractId = planetData.url.replace('http://swapi.co/api/planets/', '').replace('/', '');
    return parseInt(extractId);
}
function mapPlanet(response) {
    return toPlanet(response.json());
}
function handleError(error) {
    var errorMsg = error.message || "Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!";
    console.error(errorMsg);
    return Rx_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=planets.service.js.map