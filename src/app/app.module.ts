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

@NgModule({
  declarations: [AppComponent, MenuComponent, FooterComponent, ParametrageComponent, UsersComponent, IdentificationComponent, GroupesComponent, CompetitionsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
