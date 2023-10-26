import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrageComponent } from './components/parametrage/parametrage.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ParametragePwdComponent } from './components/parametrage-pwd/parametrage-pwd.component';
import { JoueursComponent } from './components/joueurs/joueurs.component';
import { BiblioComponent } from './components/biblio/biblio.component';
import { MobiliteComponent } from './components/mobilite/mobilite.component';
import { EvenementsComponent } from './components/evenements/evenements.component';
import { ConfigurerGroupeComponent } from './components/configurer-groupe/configurer-groupe.component';
import { AdversairesComponent } from './components/adversaires/adversaires.component';
import { DetaileJoueurComponent } from './components/detaile-joueur/detaile-joueur.component';
import { BlessuresComponent } from './components/blessures/blessures.component';
import { SanctionsComponent } from './components/sanctions/sanctions.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { StaffComponent } from './components/staff/staff.component';
import { ImprimerFichePresenceComponent } from './components/imprimer-fiche-presence/imprimer-fiche-presence.component';
import { ConvocationJoueurComponent } from './components/convocation-joueur/convocation-joueur.component';
import { AfficherEventComponent } from './components/afficher-event/afficher-event.component';

const routes: Routes = [
  { path: 'Parametrage', component: ParametrageComponent },
  { path: 'ParametragePwd', component: ParametragePwdComponent },
  {
    path: 'Parametrage/ConfigurerGroupe',
    component: ConfigurerGroupeComponent,
  },

  { path: 'Competition', component: CompetitionsComponent },
  { path: 'Matches', component: MatchesComponent },
  { path: 'Joueurs', component: JoueursComponent },
  { path: 'Biblio', component: BiblioComponent },
  { path: 'Mobilite', component: MobiliteComponent },
  { path: 'Evenement', component: EvenementsComponent },
  { path: 'Adversaire', component: AdversairesComponent },
  { path: 'Joueurs/DetaileJoueur', component: DetaileJoueurComponent },
  { path: 'belssures', component: BlessuresComponent },
  { path: 'sanctions', component: SanctionsComponent },
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'Staff', component: StaffComponent },
  { path: 'FichePresence', component: ImprimerFichePresenceComponent },
  { path: 'Convocation', component: ConvocationJoueurComponent },
  { path: 'AfficherEvent', component: AfficherEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
