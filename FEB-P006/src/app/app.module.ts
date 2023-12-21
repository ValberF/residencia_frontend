import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';
import { ResultsComponent } from './results/results.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    NewsComponent,
    MenuComponent,
    ServicesComponent,
    ResultsComponent,
    HighlightsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
