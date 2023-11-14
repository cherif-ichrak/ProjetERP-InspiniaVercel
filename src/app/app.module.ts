import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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

import { ConvocationJoueurComponent } from './components/convocation-joueur/convocation-joueur.component';
import { AfficherEventComponent } from './components/afficher-event/afficher-event.component';
import { NgModule } from '@angular/core';
import { CaisseComponent } from './components/caisse/caisse.component';
import { EncaissementComponent } from './components/encaissement/encaissement.component';
import { DepenseComponent } from './components/depense/depense.component';
import { AfficherCaisseComponent } from './components/afficher-caisse/afficher-caisse.component';
import { ArbitreComponent } from './components/arbitre/arbitre.component';
import { FicheMatchComponent } from './components/fiche-match/fiche-match.component';
import { DetailleSanctionComponent } from './components/detaille-sanction/detaille-sanction.component';
import { ImprimerConvocationMatchComponent } from './components/imprimer-convocation-match/imprimer-convocation-match.component';
import { ImprimerContactsComponent } from './components/imprimer-contacts/imprimer-contacts.component';
import { ImprimerContratsComponent } from './components/imprimer-contrats/imprimer-contrats.component';
import { ImprimerRommingComponent } from './components/imprimer-romming/imprimer-romming.component';
import { ImprimerListePassComponent } from './components/imprimer-liste-pass/imprimer-liste-pass.component';
import { ImprimerCalendrierComponent } from './components/imprimer-calendrier/imprimer-calendrier.component';
import { ImprimerDateComponent } from './components/imprimer-date/imprimer-date.component';
import { ImprimerProgrammeMatchComponent } from './components/imprimer-programme-match/imprimer-programme-match.component';
import { FuilleMatchComponent } from './components/fuille-match/fuille-match.component';
import { EtatMatchComponent } from './components/etat-match/etat-match.component';
import { TdbComponent } from './components/tdb/tdb.component';
import { DetailsStaffComponent } from './components/details-staff/details-staff.component';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { AllNotiffComponent } from './components/all-notiff/all-notiff.component';
import { ComplexeComponent } from './components/complexe/complexe.component';
import { HebergementsComponent } from './components/hebergements/hebergements.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ImprimerEtatAbsenceComponent } from './components/imprimer-etat-absence/imprimer-etat-absence.component';
import { ImprimerCaissComponent } from './components/imprimer-caiss/imprimer-caiss.component';

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
    CaisseComponent,
    EncaissementComponent,
    DepenseComponent,
    AfficherCaisseComponent,
    ArbitreComponent,
    FicheMatchComponent,
    DetailleSanctionComponent,
    ImprimerConvocationMatchComponent,
    ImprimerContactsComponent,
    ImprimerContratsComponent,
    ImprimerRommingComponent,
    ImprimerListePassComponent,
    ImprimerCalendrierComponent,
    ImprimerDateComponent,
    ImprimerProgrammeMatchComponent,
    FuilleMatchComponent,
    EtatMatchComponent,
    TdbComponent,
    DetailsStaffComponent,
    AllMessagesComponent,
    AllNotiffComponent,
    ComplexeComponent,
    HebergementsComponent,
    ArchiveComponent,
    ImprimerEtatAbsenceComponent,
    ImprimerCaissComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
