import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Aula6Component } from './aula6/aula6.component';
import { Aula7Component } from './aula7/aula7.component';
import { Aula8Component } from './aula8/aula8.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { MenuComponent } from './menu/menu.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { NewsComponent } from './news/news.component';
import { ResultsComponent } from './results/results.component';
import { ServicesComponent } from './services/services.component';
import { ButtonComponent } from './button/button.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ModelosComponent } from './modelos/modelos.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BoldPipe } from './bold.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Aula6Component,
    Aula7Component,
    Aula8Component,
    FooterComponent,
    HighlightsComponent,
    MenuComponent,
    MyHeaderComponent,
    NewsComponent,
    ResultsComponent,
    ServicesComponent,
    ButtonComponent,
    CaracteristicasComponent,
    CategoriasComponent,
    ModelosComponent,
    SearchResultsComponent,
    SearchBarComponent,
    BoldPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
