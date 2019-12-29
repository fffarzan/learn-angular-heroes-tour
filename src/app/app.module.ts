import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- NgModel lives here!
import { HttpClientModule } from '@angular/common/http';  // Adding http module to using it in app.

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';  // For using 'In-Memory Web API'.
import { InMemoryDataService }  from './in-memory-data.service';  // For using 'In-Memory Web API'.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The forRoot() configuration method takes an InMemoryDataService 
    // class that primes the in-memory database. (???)
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
