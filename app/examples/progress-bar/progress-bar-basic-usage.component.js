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
var progress_bar_1 = require('@angular2-material/progress-bar');
var ProgressBarBasicUsageComponent = (function () {
    function ProgressBarBasicUsageComponent() {
        var _this = this;
        this.determinateValue = 30;
        this.determinateValue2 = 30;
        // Iterate every 100ms, non-stop
        setInterval(function () {
            _this.determinateValue += 1;
            _this.determinateValue2 += 1.5;
            if (_this.determinateValue > 100) {
                _this.determinateValue = 30;
            }
            if (_this.determinateValue2 > 100) {
                _this.determinateValue2 = 30;
            }
        }, 100, 0, true);
    }
    ProgressBarBasicUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'progress-bar-basic-usage',
            templateUrl: 'progress-bar-basic-usage.component.html',
            styleUrls: ['progress-bar-basic-usage.component.css'],
            directives: [progress_bar_1.MdProgressBar]
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressBarBasicUsageComponent);
    return ProgressBarBasicUsageComponent;
}());
exports.ProgressBarBasicUsageComponent = ProgressBarBasicUsageComponent;
//# sourceMappingURL=progress-bar-basic-usage.component.js.map