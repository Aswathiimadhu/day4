import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [

{
  path:'',component: HomeComponent
},
{
     path:'about',component: AboutComponent
},
{
    path:'contact',component: ContactComponent
},
{
    path:'districts',component: DistrictsComponent
},
{
    path:'districts/:id',component: SingleComponent
}






];
