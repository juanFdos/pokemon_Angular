import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PokemonComponent } from './pokemon/pokemon.component';

import { PokemonService } from './pokemon/pokemon.service';

const routes: Routes = [
  {path: '', redirectTo: '/pokedex', pathMatch: 'full'},
  {path: 'pokedex', component: PokemonComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    PokemonComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
