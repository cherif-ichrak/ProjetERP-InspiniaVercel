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
import { AdversairesComponent } from './components/adversaires/adversaires.component';
import { InfoJoueurComponent } from './components/info-joueur/info-joueur.component';
import { BlessuresComponent } from './components/blessures/blessures.component';
import { SanctionsComponent } from './components/sanctions/sanctions.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { StaffComponent } from './components/staff/staff.component';
import { HttpClientModule } from '@angular/common/http';

import { ImprimerFichePresenceComponent } from './components/imprimer-fiche-presence/imprimer-fiche-presence.component';
import {
  NgbDatepickerModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ConvocationJoueurComponent } from './components/convocation-joueur/convocation-joueur.component';
import { AfficherEventComponent } from './components/afficher-event/afficher-event.component';

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
    AdversairesComponent,
    InfoJoueurComponent,
    BlessuresComponent,
    SanctionsComponent,
    CalendrierComponent,
    StaffComponent,
    ImprimerFichePresenceComponent,
    ConvocationJoueurComponent,
    AfficherEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbDatepickerModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
