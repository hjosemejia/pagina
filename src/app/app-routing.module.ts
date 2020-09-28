import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUserComponent } from './components/user/form-user/form-user.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: 'full'
    
  },{
    path: 'user',
    component: FormUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
