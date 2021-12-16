import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MemeberDatailComponent } from './mainComponents/memeber-datail/memeber-datail.component';
import { MemeberListComponent } from './mainComponents/memeber-list/memeber-list.component';
import {ListComponent } from './mainComponents/list/list.component'
import { MassagesComponent } from './mainComponents/massages/massages.component';
import {HomepageComponent} from './frontDeSIGN/homepage/homepage.component'


const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'members',component: MemeberListComponent},
  {path:'members/:id',component:MemeberDatailComponent},
  {path:'lists',component:ListComponent},
  {path:'massages',component:MassagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
