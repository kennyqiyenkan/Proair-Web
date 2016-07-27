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
var AppComponent = (function () {
    function AppComponent() {
        this.isMobileSizedWidth = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isMobileSizedWidth = this.checkMobileSized();
    };
    AppComponent.prototype.onResize = function () {
        this.isMobileSizedWidth = this.checkMobileSized();
    };
    AppComponent.prototype.checkMobileSized = function () {
        if (window.innerWidth <= 680) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div (window:resize)=\"onResize($event)\"> <!-- Navigation Bar -->\n    <navbar class=navbar id=\"navBar\">\n      <ul>\n        <!-- test logo. replace with proair logo\u0095\u0095\u0095 -->\n        <a href=\"#Home\">\n          <img src=\"http://whitelions.org/wp-content/uploads/2013/08/1-Info-icon-logo-50x50.png\" alt=\"Proair\">\n        </a>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#Careers\">Careers</a></li>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#ContactUs\">Contact</a></li>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#Services\">Services</a></li>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#About\">About</a></li>\n        <li *ngIf=\"isMobileSizedWidth\"><button>\u2630</button></li>\n      </ul>\n    </navbar>\n  </div>\n\n  <div style=\"margin-top:-20px;\">\n    <section class=\"module parallax parallax-1\" name=\"Home\">\n      <div class=\"container\">\n        <h1>Proair</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>We Settle All Your Marine HVAC Needs</h2>\n        <p>Company introduction here. Please get contents from a file</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallax-2\" name=\"About\">\n      <div class=\"container\">\n        <h1>About</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>Who We Are</h2>\n        <p>Information about the company here. Please get contents from a file</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallax-3\" name=\"Services\">\n      <div class=\"container\">\n        <h1>Services</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>What We Do</h2>\n        <p>List of services here. Please get contents from a file</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallax-3\" name=\"Contact\">\n      <div class=\"container\">\n        <h1>Contact</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>Where We Are</h2>\n        <p>Contact information here. Please get contents from a file</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallax-3\" name=\"Careers\">\n      <div class=\"container\">\n        <h1>Careers</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>Want To Work Here?</h2>\n        <p>List of openings here. Please get contents from a file</p>\n      </div>\n    </section>\n  </div>\n  <div>\n    <footer class=\"footer\">\n      <p>Proair Sdn. Bhd.</p>\n    </footer>\n  </div>\n  ",
            styleUrls: [
                'app/assets/stylesheets/css/navbar.css',
                'app/assets/stylesheets/css/parallaxMain.css',
                'app/assets/stylesheets/css/footer.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map