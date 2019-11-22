import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PaginatorComponent } from './paginator/paginator.component';

import { PokemonService } from './pokemon/pokemon.service';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokemonComponent },
  { path: 'pokedex/page/:page', component: PokemonComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    NavBarComponent,
    PokemonComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
