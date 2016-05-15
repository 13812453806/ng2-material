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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var MdMessage = (function () {
    function MdMessage() {
        this.okay = true;
    }
    __decorate([
        core_1.Input('md-message'), 
        __metadata('design:type', String)
    ], MdMessage.prototype, "errorKey", void 0);
    MdMessage = __decorate([
        core_1.Directive({
            selector: '[md-message]',
            host: {
                '[style.display]': 'okay ? "none" : "inherit"'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdMessage);
    return MdMessage;
}());
exports.MdMessage = MdMessage;
var MdMessages = (function () {
    function MdMessages(messages, form) {
        this.messages = messages;
        this.form = form;
        this._unsubscribe = null;
    }
    Object.defineProperty(MdMessages.prototype, "valid", {
        get: function () {
            if (this.property instanceof common_1.NgControlName) {
                var ctrl_1 = this.property;
                return !!ctrl_1.valid;
            }
            var prop = this.property;
            var group = this.form.control;
            var ctrl = group.controls[prop];
            return ctrl && ctrl.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMessages.prototype, "isTouched", {
        get: function () {
            if (this.property instanceof common_1.NgControlName) {
                return this.property.touched;
            }
            var prop = this.property;
            var group = this.form.control;
            var ctrl = group.controls[prop];
            return ctrl && ctrl.touched;
        },
        enumerable: true,
        configurable: true
    });
    MdMessages.prototype.ngOnInit = function () {
        if (this.property instanceof common_1.NgControlName) {
            var ctrl = this.property;
            this.form = ctrl.formDirective;
            this._unsubscribe = ctrl.update.subscribe(this._valueChanged.bind(this));
        }
        else {
            if (!this.form) {
                throw new Error('md-messages cannot bind to text property without a parent NgFormModel');
            }
            var prop = this.property;
            var group = this.form.control;
            if (!group) {
                throw new Error('md-messages cannot bind to text property without a ControlGroup');
            }
            var ctrl = group.controls[prop];
            if (!ctrl) {
                throw new Error("md-messages cannot find property(" + prop + ") in ControlGroup!");
            }
            this._unsubscribe = ctrl.statusChanges.subscribe(this._valueChanged.bind(this));
        }
    };
    MdMessages.prototype.ngOnDestroy = function () {
        this._unsubscribe.unsubscribe();
    };
    MdMessages.prototype._valueChanged = function () {
        var errors = null;
        if (this.property instanceof common_1.NgControlName) {
            var ctrl = this.property;
            errors = ctrl.errors;
        }
        else {
            var prop = this.property;
            var group = this.form.control;
            var ctrl = group.controls[prop];
            errors = ctrl.errors;
        }
        if (errors) {
            this.messages.toArray().forEach(function (m) {
                m.okay = !m.errorKey ? !errors : !errors.hasOwnProperty(m.errorKey);
            });
        }
        else {
            this.messages.toArray().forEach(function (m) {
                m.okay = true;
            });
        }
    };
    __decorate([
        core_1.Input('md-messages'), 
        __metadata('design:type', Object)
    ], MdMessages.prototype, "property", void 0);
    MdMessages = __decorate([
        core_1.Directive({
            selector: '[md-messages]',
            host: {
                'md-messages': '',
                '[style.display]': '(valid || !isTouched) ? "none" : "inherit"',
                '[class.md-valid]': 'valid && isTouched',
                '[class.md-invalid]': '!valid && isTouched'
            }
        }),
        __param(0, core_1.Query(MdMessage)),
        __param(1, core_1.Optional()),
        __param(1, core_1.SkipSelf()),
        __param(1, core_1.Host()), 
        __metadata('design:paramtypes', [core_1.QueryList, common_1.NgFormModel])
    ], MdMessages);
    return MdMessages;
}());
exports.MdMessages = MdMessages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL21lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBd0UsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRixxQkFBOEYsZUFBZSxDQUFDLENBQUE7QUFnQjlHO0lBQUE7UUFHRSxTQUFJLEdBQVksSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFIQztRQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7OytDQUFBO0lBUHRCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLElBQUksRUFBRTtnQkFDSixpQkFBaUIsRUFBRSwyQkFBMkI7YUFDL0M7U0FDRixDQUFDOztpQkFBQTtJQUtGLGdCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxpQkFBUyxZQUlyQixDQUFBO0FBWUQ7SUEyQkUsb0JBQ21CLFFBQThCLEVBRTlCLElBQWlCO1FBRmpCLGFBQVEsR0FBUixRQUFRLENBQXNCO1FBRTlCLFNBQUksR0FBSixJQUFJLENBQWE7UUFRNUIsaUJBQVksR0FBUSxJQUFJLENBQUM7SUFQakMsQ0FBQztJQTFCRCxzQkFBSSw2QkFBSzthQUFUO1lBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsWUFBWSxzQkFBYSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxNQUFJLEdBQWtCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBSSxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDO1lBQ0QsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFD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