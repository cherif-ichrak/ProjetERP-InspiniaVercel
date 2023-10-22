import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParametrageComponent } from './components/parametrage/parametrage.component';
import { UsersComponent } from './components/users/users.component';
import { IdentificationComponent } from './components/identification/identification.component';
import { GroupesComponent } from './components/groupes/groupes.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ParametragePwdComponent } from './components/parametrage-pwd/parametrage-pwd.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { JoueursComponent } from './components/joueurs/joueurs.component';
import { BiblioComponent } from './components/biblio/biblio.component';
import { MobiliteComponent } from './components/mobilite/mobilite.component';
import { EvenementsComponent } from './components/evenements/evenements.component';
import { DetaileJoueurComponent } from './components/detaile-joueur/detaile-joueur.component';
import { ConfigurerGroupeComponent } from './components/configurer-groupe/configurer-groupe.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ParametrageComponent,
    UsersComponent,
    IdentificationComponent,
    GroupesComponent,
    CompetitionsComponent,
    MatchesComponent,
    ParametragePwdComponent,
    ContactsComponent,
    JoueursComponent,
    BiblioComponent,
    MobiliteComponent,
    EvenementsComponent,
    DetaileJoueurComponent,
    ConfigurerGroupeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
