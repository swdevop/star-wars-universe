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
var hypermedia_util_service_1 = require("./hypermedia-util.service");
var PeopleService = (function () {
    function PeopleService(http, hu) {
        this.http = http;
        this.hu = hu;
        this.baseUrl = 'http://swapi.co/api';
    }
    PeopleService.prototype.getAll = function () {
        var _this = this;
        var people$ = this.http
            .get(this.baseUrl + "/people", { headers: this.getHeaders() })
            .map(function (x) { return _this.mapPersons(x); })
            .catch(handleError);
        return people$;
    };
    PeopleService.prototype.get = function (id) {
        var _this = this;
        var person$ = this.http
            .get(this.baseUrl + "/people/" + id, { headers: this.getHeaders() })
            .map(function (x) { return _this.mapPerson(x); });
        return person$;
    };
    PeopleService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    PeopleService.prototype.mapPerson = function (response) {
        // toPerson looks just like in the previous example
        return this.toPerson(response.json());
    };
    PeopleService.prototype.mapPersons = function (response) {
        // uncomment to simulate error:
        // throw new Error('ups! Force choke!');
        // The response of the API has a results
        // property with the actual results
        return response.json().results.map(this.toPerson.bind(this));
    };
    PeopleService.prototype.toPerson = function (r) {
        var person = ({
            id: extractId(r),
            url: r.url,
            name: r.name,
            weight: r.mass,
            height: r.height,
            hair: r.hair_color,
            skin: r.skin_color,
            eyes: r.eye_color,
            birth: r.birth_year,
            gender: r.gender,
            homeworld: this.hu.follow(r.homeworld),
            films: this.hu.follow(r.films),
            species: this.hu.follow(r.species),
            vehicles: this.hu.follow(r.vehicles),
            starships: this.hu.follow(r.starships),
        });
        console.log('Parsed person:', person);
        return person;
    };
    PeopleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, hypermedia_util_service_1.HypermediaUtilService])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData) {
    var extractedId = personData.url.replace('http://swapi.co/api/people/', '').replace('/', '');
    return parseInt(extractedId);
}
// this could also be a private method of the component class
function handleError(error) {
    // log error
    // could be something more sofisticated
    var errorMsg = error.message || "Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!";
    console.error(errorMsg);
    // throw an application level error
    return Rx_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=people.service.js.map