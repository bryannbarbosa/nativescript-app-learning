import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";

@Component({
    selector: "Signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html"
})
export class SignupComponent {

    public input: any;
 
    public constructor(private location: Location) {
        this.input = {
            "name": "",
            "email": "",
            "matriculation": "",
            "password": ""
        }
    }

    public register() {
        if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
            ApplicationSettings.setString("account", JSON.stringify(this.input));
            this.location.back();
        } else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }
 
    public goBack() {
        this.location.back();
    }
}