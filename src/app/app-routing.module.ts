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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
