import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";

@Component({
    selector: "Category",
    moduleId: module.id,
    templateUrl: "./categories.component.html"
})
export class CategoryComponent implements OnInit {
  public constructor(private router: RouterExtensions) { }
 
    public ngOnInit() {
        if(!ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/home"], { clearHistory: true });
        }
    }
 
    public logout() {
        ApplicationSettings.remove("authenticated");
        this.router.navigate(["/home"], { clearHistory: true });
    }
}