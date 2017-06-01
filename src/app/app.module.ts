import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProducterComponent } from './producter/producter.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchComponent,
    StarsComponent,
    NavbarComponent,
    ProducterComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
