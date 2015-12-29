var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var VersionService = (function () {
    function VersionService(http) {
        var _this = this;
        this.meta = null;
        this._promise = new Promise(function (resolve) {
            http.get('public/version.json').subscribe(function (res) {
                _this.meta = res.json();
                resolve();
            });
        });
    }
    VersionService.prototype.getMeta = function () {
        var _this = this;
        return this._promise.then(function () {
            return _this.meta;
        });
    };
    VersionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VersionService);
    return VersionService;
})();
exports.VersionService = VersionService;
//# sourceMappingURL=version.js.map