import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeLeftComponent } from './home/home-left/home-left.component';
import { HomeRightComponent } from './home/home-right/home-right.component';
import { HighlightDirective } from './highlight.directive';
import { UserComponent } from './user/user.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { ForloopComponent } from './forloop/forloop.component';
import { SwitchloopComponent } from './switchloop/switchloop.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserformComponent } from './userform/userform.component';


import { UsersService } from './users.service';
import {StudentService} from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeLeftComponent,
    HomeRightComponent,
    HighlightDirective,
    UserComponent,
    SampleFormComponent,
    ForloopComponent,
    SwitchloopComponent,
    UserNewComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UsersService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
