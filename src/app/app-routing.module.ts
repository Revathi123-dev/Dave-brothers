import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { SecurityComponent } from './security/security.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'information',component:InformationComponent},
  {path:'service',component:ServiceComponent},
  {path:'security',component:SecurityComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
