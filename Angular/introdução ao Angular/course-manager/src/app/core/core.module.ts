import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorComponent } from "./component/Error404/Error.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
  declarations:[
    NavBarComponent,
    ErrorComponent
  ],
  imports:[
    RouterModule.forChild([
      {
        path: '**',component: ErrorComponent
      }
    ])
  ],
  exports:[
    NavBarComponent,
    ErrorComponent   
  ]
})

export class CoreModule{

}