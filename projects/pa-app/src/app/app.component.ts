import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {Router} from "@angular/router";
import {AuthService} from "./core/auth/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }
  ngOnInit() {
    console.log('AppComponent: ' + environment.production);
  }
}
