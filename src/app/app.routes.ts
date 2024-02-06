import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateComponent} from "../components/create/Create";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'create', component:  CreateComponent},
];





