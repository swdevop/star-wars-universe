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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HypermediaUtilService = (function () {
    function HypermediaUtilService(http) {
        this.http = http;
        this.verbose = false;
        //this.verbose = true;
    }
    HypermediaUtilService.prototype.follow = function (href, assignTo) {
        var _this = this;
        if (this.verbose) {
            console.log('follow| following link; href: %s', href);
        }
        assignTo = assignTo || {};
        this.http.get(href)
            .map(function (x) { return x.json(); })
            .subscribe(function (result) {
            Object.assign(assignTo, result);
            if (_this.verbose) {
                console.log('follow| done; href: %s, result:', href, assignTo);
            }
        }, function (error) {
            console.error('follow| failed; href: %s, error:', href, error);
            // TODO: handle errors
        });
        return assignTo;
    };
    HypermediaUtilService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HypermediaUtilService);
    return HypermediaUtilService;
}());
exports.HypermediaUtilService = HypermediaUtilService;
//# sourceMappingURL=hypermedia-util.service.js.map