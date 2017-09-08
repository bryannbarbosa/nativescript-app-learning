import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { HomeRoutingModule } from "./home-routing.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { HomeComponent } from "./home.component";
import { SignupComponent } from "./signup/signup.component";
import { CategoryComponent } from './categories/categories.component';

@NgModule({
    imports: [
        NativeScriptModule,
        HomeRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        HomeComponent,
        SignupComponent,
        CategoryComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
