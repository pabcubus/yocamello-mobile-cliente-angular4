import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { app_routing } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { ProfileComponent } from './screens/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
