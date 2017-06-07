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
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const routeConfig: Routes = [
  {path: '', component: HomeComponent },
  {path: 'product/:prodTitle', component: ProductDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchComponent,
    StarsComponent,
    NavbarComponent,
    ProducterComponent,
    CarouselComponent,
    ProductDetailComponent,
    HomeComponent,

  ],
  imports: [
    RouterModule.forRoot(routeConfig),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
