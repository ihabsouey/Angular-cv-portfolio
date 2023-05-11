"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var landing_page_component_1 = require("./landing-page/landing-page.component");
var form_component_1 = require("./form/form.component");
var header_component_1 = require("./header/header.component");
var forms_1 = require("@angular/forms");
var cv_model_component_1 = require("./cv-model/cv-model.component");
var experience_pro_component_1 = require("./experience-pro/experience-pro.component");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var one_experience_component_1 = require("./one-experience/one-experience.component");
var educatin_form_component_1 = require("./educatin-form/educatin-form.component");
var one_education_component_1 = require("./one-education/one-education.component");
var competence_form_component_1 = require("./competence-form/competence-form.component");
var form_field_1 = require("@angular/material/form-field");
var chips_1 = require("@angular/material/chips");
var keycodes_1 = require("@angular/cdk/keycodes");
var input_1 = require("@angular/material/input");
var icon_1 = require("@angular/material/icon");
var one_competence_component_1 = require("./one-competence/one-competence.component");
var langue_form_component_1 = require("./langue-form/langue-form.component");
var loisir_form_component_1 = require("./loisir-form/loisir-form.component");
var one_loisir_component_1 = require("./one-loisir/one-loisir.component");
var environment_1 = require("../environments/environment");
//firebase
var compat_1 = require("@angular/fire/compat");
var auth_1 = require("@angular/fire/compat/auth");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                landing_page_component_1.LandingPageComponent,
                form_component_1.FormComponent,
                header_component_1.HeaderComponent,
                cv_model_component_1.CvModelComponent,
                experience_pro_component_1.ExperienceProComponent,
                one_experience_component_1.OneExperienceComponent,
                educatin_form_component_1.EducatinFormComponent,
                one_education_component_1.OneEducationComponent,
                competence_form_component_1.CompetenceFormComponent,
                one_competence_component_1.OneCompetenceComponent,
                langue_form_component_1.LangueFormComponent,
                loisir_form_component_1.LoisirFormComponent,
                one_loisir_component_1.OneLoisirComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                slide_toggle_1.MatSlideToggleModule,
                form_field_1.MatFormFieldModule,
                chips_1.MatChipsModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                compat_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                auth_1.AngularFireAuthModule,
            ],
            providers: [
                {
                    provide: chips_1.MAT_CHIPS_DEFAULT_OPTIONS,
                    useValue: {
                        separatorKeyCodes: [keycodes_1.COMMA, keycodes_1.SPACE]
                    }
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
