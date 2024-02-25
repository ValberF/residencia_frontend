import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ModelosComponent } from './modelos/modelos.component';
import { ButtonComponent } from './button/button.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    CaracteristicasComponent,
    CategoriasComponent,
    ModelosComponent,
    ButtonComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
