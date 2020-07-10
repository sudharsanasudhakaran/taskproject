import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{DayComponent} from "./day/day.component";

const routes: Routes = [
{
  path: "day",
  component: DayComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            NgModule],
  exports: [RouterModule],
  schemas : [CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA]
})

export class AppRoutingModule { }
