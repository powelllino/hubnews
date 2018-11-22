import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { FooterComponent } from './footer/footer.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { TopHeadersService } from './top-headers.service';
import { TopHeadersComponent } from './home-content/news/top-headers/top-headers.component';
import { MaisVistosComponent } from './home-content/news/mais-vistos/mais-vistos.component';
import { UltimasComponent } from './home-content/news/ultimas/ultimas.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    FooterComponent,
    HomeContentComponent,
    TopHeadersComponent,
    MaisVistosComponent,
    UltimasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ TopHeadersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
