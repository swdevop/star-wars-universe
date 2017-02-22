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
var router_1 = require('@angular/router');
var planets_service_1 = require('../services/planets.service');
var PlanetDetailsComponent = (function () {
    function PlanetDetailsComponent(planetsService, route, router) {
        this.planetsService = planetsService;
        this.route = route;
        this.router = router;
    }
    PlanetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            console.log('getting planet with id: ', id);
            _this.planetsService
                .get(id)
                .subscribe(function (p) { return _this.planet = p; });
        });
    };
    PlanetDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlanetDetailsComponent.prototype.gotoPlanetsList = function () {
        var link = ['/planets'];
        this.router.navigate(link);
    };
    PlanetDetailsComponent = __decorate([
        core_1.Component({
            selector: 'planet-details',
            templateUrl: './app/planets/planet-details.component.html'
        }), 
        __metadata('design:paramtypes', [planets_service_1.PlanetsService, router_1.ActivatedRoute, router_1.Router])
    ], PlanetDetailsComponent);
    return PlanetDetailsComponent;
}());
exports.PlanetDetailsComponent = PlanetDetailsComponent;
//# sourceMappingURL=planet-details.component.js.map