var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var base_1 = require('../../base');
var SwitchBasicUsage = (function () {
    function SwitchBasicUsage() {
        this.data = {
            cb1: true,
            cb4: true,
            cb5: false
        };
        this.message = 'false';
    }
    SwitchBasicUsage.prototype.onChange = function (cbState) {
        this.message = cbState;
    };
    ;
    SwitchBasicUsage = __decorate([
        core_1.Component({ selector: 'switch-basic-usage' }),
        core_1.View({ templateUrl: 'examples/components/switch/basic_usage.html', directives: [base_1.MATERIAL_DIRECTIVES] }), 
        __metadata('design:paramtypes', [])
    ], SwitchBasicUsage);
    return SwitchBasicUsage;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SwitchBasicUsage;
//# sourceMappingURL=basic_usage.js.map