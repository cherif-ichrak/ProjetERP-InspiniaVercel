import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrageComponent } from './components/parametrage/parametrage.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';

const routes: Routes = [
  { path: 'Parametrage', component: ParametrageComponent },
  { path: 'Competition', component: CompetitionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
