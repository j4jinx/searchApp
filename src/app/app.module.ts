import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home/homePage.component';
//import { SearchPageComponent } from './pages/search/searchPage.component';
import { HistoryPageComponent } from './pages/history/historyPage.component';
import { ErrorPageComponent } from './pages/error/errorPage.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    //SearchPageComponent,
    HistoryPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
