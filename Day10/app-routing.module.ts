import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowerComponent } from './follower/follower.component';
import { HomeComponent } from './home/home.component';
import { MyFollowerComponent } from './my-follower/my-follower.component';
import { NotdoundComponent } from './notdound/notdound.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { TelevisionComponent } from './product/television/television.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';

const routes: Routes = [
    {
      path:"",component:HomeComponent
    },
    {
      path:'Page1',component:Page1Component
    },
    {
      path:'Page2/:id',component:Page2Component
    },
    {
      path:'Page3',component:Page3Component
    },
    {
      path:'Follower',component:FollowerComponent
    },
    {
      path:'Myfollower',component:MyFollowerComponent
    },
    {
      path:'QueryParameter',component:QueryparameterComponent
    },
    {
      path:'products',children:[
          {
            path:"",component:ProductComponent
          },
          {
            path:'laptop',component:LaptopComponent
          },
          {
            path:'mobile',component:MobileComponent
          },
          {
            path:'tv',component:TelevisionComponent
          }
      ]
    },
    {
      path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
    },
    {
      path:"**",component:NotdoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
