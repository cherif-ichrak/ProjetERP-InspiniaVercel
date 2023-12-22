import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrageComponent } from './components/parametrage/parametrage.component';

import { ParametragePwdComponent } from './components/parametrage-pwd/parametrage-pwd.component';
import { BiblioComponent } from './components/biblio/biblio.component';

import { TdbComponent } from './components/tdb/tdb.component';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { AllNotiffComponent } from './components/all-notiff/all-notiff.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AnnexesComponent } from './components/annexes/annexes.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { JournauxComponent } from './components/journaux/journaux.component';
import { PlanComptableComponent } from './components/plan-comptable/plan-comptable.component';
import { PlanTiersComponent } from './components/plan-tiers/plan-tiers.component';
import { ImporterComptabiliteComponent } from './components/importer-comptabilite/importer-comptabilite.component';
import { AffectationComponent } from './components/affectation/affectation.component';
import { ClientComptabiliteComponent } from './components/client-comptabilite/client-comptabilite.component';
import { ClientComponent } from './components/client/client.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { AjouterClientExploitationsComponent } from './components/ajouter-client-exploitations/ajouter-client-exploitations.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FamilleArticleComponent } from './components/famille-article/famille-article.component';
import { DocumentAchatComponent } from './components/document-achat/document-achat.component';
import { DocumentVentsComponent } from './components/document-vents/document-vents.component';
import { ModifierFournisseursComponent } from './components/modifier-fournisseurs/modifier-fournisseurs.component';
import { AjouterArticleComponent } from './components/ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './components/modifier-article/modifier-article.component';
import { AjouterFamilleArticleComponent } from './components/ajouter-famille-article/ajouter-famille-article.component';
import { ModifierFamilleArticleComponent } from './components/modifier-famille-article/modifier-famille-article.component';
import { AjouterDocumentAchatComponent } from './components/ajouter-document-achat/ajouter-document-achat.component';
import { AfficherDocumentAchatsComponent } from './components/afficher-document-achats/afficher-document-achats.component';
import { RegrouperAchatsComponent } from './components/regrouper-achats/regrouper-achats.component';
import { ModifierDocumentAchatsComponent } from './components/modifier-document-achats/modifier-document-achats.component';
import { AjouterDocVentesComponent } from './components/ajouter-doc-ventes/ajouter-doc-ventes.component';
import { ModifierDocVenteComponent } from './components/modifier-doc-vente/modifier-doc-vente.component';
import { RegrouperDocVentesComponent } from './components/regrouper-doc-ventes/regrouper-doc-ventes.component';
import { ContratDomTraitmentComponent } from './components/contrat-dom-traitment/contrat-dom-traitment.component';
import { ConventionTraitComponent } from './components/convention-trait/convention-trait.component';
import { TiketsSupportComponent } from './components/tikets-support/tikets-support.component';
import { FicheTicketsComponent } from './components/fiche-tickets/fiche-tickets.component';
import { FicheInterventionComponent } from './components/fiche-intervention/fiche-intervention.component';
import { FicheDetailsInterventionComponent } from './components/fiche-details-intervention/fiche-details-intervention.component';
import { CloturerTicketComponent } from './components/cloturer-ticket/cloturer-ticket.component';
import { ImprimerFicheInterventionComponent } from './components/imprimer-fiche-intervention/imprimer-fiche-intervention.component';
import { RepertoireComponent } from './components/repertoire/repertoire.component';
import { InfoJuridiqueComponent } from './components/info-juridique/info-juridique.component';
import { InfoJuridiquePvComponent } from './components/info-juridique-pv/info-juridique-pv.component';
import { ConsultationSocComponent } from './components/consultation-soc/consultation-soc.component';
import { PvTratiementComponent } from './components/pv-tratiement/pv-tratiement.component';
import { CessionComponent } from './components/cession/cession.component';
import { InfoConstitutionComponent } from './components/info-constitution/info-constitution.component';
import { ModifierConstitutionComponent } from './components/modifier-constitution/modifier-constitution.component';
import { ContratsCessionsComponent } from './components/contrats-cessions/contrats-cessions.component';
import { InfoAbonneComponent } from './components/info-abonne/info-abonne.component';

const routes: Routes = [
  { path: 'Parametrage', component: ParametrageComponent },
  { path: 'ParametragePwd', component: ParametragePwdComponent },
  { path: 'Client', component: ClientComponent },
  { path: 'Articles', component: ArticlesComponent },
  {
    path: 'Articles/AjouterArticles',
    component: AjouterArticleComponent,
  },
  {
    path: 'Articles/ModifierArticles',
    component: ModifierArticleComponent,
  },
  { path: 'FamilleArticle', component: FamilleArticleComponent },
  {
    path: 'FamilleArticle/AjouterFamilleArticle',
    component: AjouterFamilleArticleComponent,
  },
  {
    path: 'FamilleArticle/ModifierFamilleArticle',
    component: ModifierFamilleArticleComponent,
  },

  { path: 'DocAchats', component: DocumentAchatComponent },
  { path: 'DocAchats/AjouterDoc', component: AjouterDocumentAchatComponent },
  { path: 'DocAchats/ModifierDoc', component: ModifierDocumentAchatsComponent },
  {
    path: 'DocAchats/ModifierDoc/AfficherDocAchats',
    component: AfficherDocumentAchatsComponent,
  },

  { path: 'DocAchats/Regrouper', component: RegrouperAchatsComponent },
  {
    path: 'DocAchats/Regrouper/AfficherDocAchats',
    component: AfficherDocumentAchatsComponent,
  },
  {
    path: 'DocAchats/AjouterDoc/AfficherDocAchats',
    component: AfficherDocumentAchatsComponent,
  },

  { path: 'DocVentes', component: DocumentVentsComponent },
  { path: 'DocVentes/Regrouper', component: RegrouperDocVentesComponent },
  {
    path: 'DocVentes/Regrouper/AfficherDocAchats',
    component: AfficherDocumentAchatsComponent,
  },

  { path: 'DocVentes/ModifierVente', component: ModifierDocVenteComponent },
  {
    path: 'DocVentes/ModifierVente/AfficherDocVente',
    component: AfficherDocumentAchatsComponent,
  },

  { path: 'DocVentes/AjouterDocVente', component: AjouterDocVentesComponent },
  {
    path: 'DocVentes/AjouterDocVente/AfficherDocVente',
    component: AfficherDocumentAchatsComponent,
  },

  {
    path: 'Client/AjouterClient',
    component: AjouterClientExploitationsComponent,
  },
  {
    path: 'Client/ModifierClient',
    component: AjouterClientExploitationsComponent,
  },
  {
    path: 'Fournisseurs/Ajouterfournisseur',
    component: AjouterFournisseurComponent,
  },
  {
    path: 'Fournisseurs/ModifierFournisseur',
    component: ModifierFournisseursComponent,
  },
  { path: 'ContratDomiciliation', component: ContratDomTraitmentComponent },
  { path: 'Convention', component: ConventionTraitComponent },

  { path: 'Fournisseurs', component: FournisseursComponent },
  { path: 'Annexes', component: AnnexesComponent },
  { path: 'Biblio', component: BiblioComponent },
  { path: 'Annexes', component: AnnexesComponent },
  { path: 'Importer', component: ImporterComptabiliteComponent },
  { path: 'Affectation', component: AffectationComponent },
  { path: 'ClientComtabilite', component: ClientComptabiliteComponent },
  { path: 'Exercices', component: ExercicesComponent },
  { path: 'CodeJournaux', component: JournauxComponent },
  { path: 'PlanComptable', component: PlanComptableComponent },
  { path: 'PlanTiers', component: PlanTiersComponent },
  { path: 'tdb', component: TdbComponent },

  { path: 'AllMessages', component: AllMessagesComponent },
  { path: 'AllNotif', component: AllNotiffComponent },
  { path: 'Repertoire', component: RepertoireComponent },
  { path: 'JuridiqueClients', component: InfoJuridiqueComponent },
  { path: 'PV', component: InfoJuridiquePvComponent },
  { path: 'Constitution', component: ConsultationSocComponent },
  { path: 'Constitution/Ajouter', component: InfoConstitutionComponent },
  { path: 'Constitution/Modifier', component: ModifierConstitutionComponent },

  { path: 'ProcesVerbalTrait', component: PvTratiementComponent },
  { path: 'Cession', component: ContratsCessionsComponent },
  { path: 'Profile', component: InfoAbonneComponent },
  { path: 'Archive', component: ArchiveComponent },
  { path: 'TicketSupport', component: TiketsSupportComponent },
  { path: 'TicketSupport/ConsulterFiche', component: FicheTicketsComponent },
  {
    path: 'TicketSupport/ConsulterFiche/Cloturer',
    component: CloturerTicketComponent,
  },
  {
    path: 'TicketSupport/ConsulterFiche/Cloturer/Imprimer',
    component: ImprimerFicheInterventionComponent,
  },

  { path: 'FicheIntervention', component: FicheInterventionComponent },

  {
    path: 'FicheIntervention/ConsulterFicheIntervention',
    component: FicheDetailsInterventionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
