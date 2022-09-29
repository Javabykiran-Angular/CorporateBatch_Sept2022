import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:"",redirectTo:"/login",pathMatch:"full"
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:'home',component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'details/:id',component:DetailComponent,canActivate:[AuthGuard]
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
