import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { SignupComponent } from "./signup/signup.component";
import { CategoryComponent } from "./categories/categories.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "signup", component: SignupComponent },
    { path: "categories", component: CategoryComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
