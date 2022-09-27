import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { EventBinding2Component } from './event-binding2/event-binding2.component';
import { Eventbinding3Component } from './eventbinding3/eventbinding3.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child3Component } from './child3/child3.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child4Component } from './child4/child4.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SummaryPipe } from './utitilty/summary.pipe';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';
import { NotdoundComponent } from './notdound/notdound.component';
import { ProductComponent } from './product/product.component';
import { MyFollowerComponent } from './my-follower/my-follower.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { TelevisionComponent } from './product/television/television.component';
import { LaptopComponent } from './product/laptop/laptop.component';

@NgModule({
  declarations: [
    AppComponent,
    StylebindingComponent,
    ClassbindingComponent,
    Eventbinding1Component,
    EventBinding2Component,
    Eventbinding3Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Parent1Component,
    Child3Component,
    Parent3Component,
    Child4Component,
    InbuildPipeComponent,
    CustomPipeComponent,
    SummaryPipe,
    CourseComponent,
    PostComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    FollowerComponent,
    QueryparameterComponent,
    NotdoundComponent,
    ProductComponent,
    MyFollowerComponent,
    MobileComponent,
    TelevisionComponent,
    LaptopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
