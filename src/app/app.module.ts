import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ParametrageComponent } from './components/parametrage/parametrage.component';
import { UsersComponent } from './components/users/users.component';

import { ParametragePwdComponent } from './components/parametrage-pwd/parametrage-pwd.component';

import { BiblioComponent } from './components/biblio/biblio.component';

import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { TdbComponent } from './components/tdb/tdb.component';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { AllNotiffComponent } from './components/all-notiff/all-notiff.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AnnexesComponent } from './components/annexes/annexes.component';
import { ProvisionsClientsComponent } from './components/provisions-clients/provisions-clients.component';
import { ProvisionsStocksComponent } from './components/provisions-stocks/provisions-stocks.component';
import { ProvisionsTitresComponent } from './components/provisions-titres/provisions-titres.component';
import { DonsSubComponent } from './components/dons-sub/dons-sub.component';
import { EngagementHorsComponent } from './components/engagement-hors/engagement-hors.component';
import { DetCreanceComponent } from './components/det-creance/det-creance.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { JournauxComponent } from './components/journaux/journaux.component';
import { PlanComptableComponent } from './components/plan-comptable/plan-comptable.component';
import { PlanTiersComponent } from './components/plan-tiers/plan-tiers.component';
import { ImporterComptabiliteComponent } from './components/importer-comptabilite/importer-comptabilite.component';
import { EcritureComptableComponent } from './components/ecriture-comptable/ecriture-comptable.component';
import { BalanceComponent } from './components/balance/balance.component';
import { BalanceTiersComponent } from './components/balance-tiers/balance-tiers.component';
import { AffectationComponent } from './components/affectation/affectation.component';
import { BalanceGenererAuditComponent } from './components/balance-generer-audit/balance-generer-audit.component';
import { BalanceTierGenererAuditComponent } from './components/balance-tier-generer-audit/balance-tier-generer-audit.component';
import { ContactsClientComponent } from './components/contacts-client/contacts-client.component';
import { GeneraleClientComponent } from './components/generale-client/generale-client.component';
import { ButtonAjouterAnnulerComponent } from './components/button-ajouter-annuler/button-ajouter-annuler.component';
import { GCComponent } from './components/gc/gc.component';
import { ClientComptabiliteComponent } from './components/client-comptabilite/client-comptabilite.component';
import { InterrogationClientComponent } from './components/interrogation-client/interrogation-client.component';
import { ComplementsClientsComponent } from './components/complements-clients/complements-clients.component';
import { ClientComponent } from './components/client/client.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { AjouterClientExploitationsComponent } from './components/ajouter-client-exploitations/ajouter-client-exploitations.component';
import { AlertesClientsComponent } from './components/alertes-clients/alertes-clients.component';
import { ModifierClientComponent } from './components/modifier-client/modifier-client.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { ComplementsFournisseurComponent } from './components/complements-fournisseur/complements-fournisseur.component';
import { AlertesFournisseursComponent } from './components/alertes-fournisseurs/alertes-fournisseurs.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FamilleArticleComponent } from './components/famille-article/famille-article.component';
import { DocumentAchatComponent } from './components/document-achat/document-achat.component';
import { DocumentVentsComponent } from './components/document-vents/document-vents.component';
import { BondeCommandeVenteComponent } from './components/bonde-commande-vente/bonde-commande-vente.component';
import { IdentificationClientComponent } from './components/identification-client/identification-client.component';
import { ModifierFournisseursComponent } from './components/modifier-fournisseurs/modifier-fournisseurs.component';
import { AjouterArticleComponent } from './components/ajouter-article/ajouter-article.component';
import { ComplementArticleComponent } from './components/complement-article/complement-article.component';
import { InfoArticleStructureComponent } from './components/info-article-structure/info-article-structure.component';
import { SuiteArticleComponent } from './components/suite-article/suite-article.component';
import { ParametrageArticleComponent } from './components/parametrage-article/parametrage-article.component';
import { ModifierArticleComponent } from './components/modifier-article/modifier-article.component';
import { AjouterFamilleArticleComponent } from './components/ajouter-famille-article/ajouter-famille-article.component';
import { ModifierFamilleArticleComponent } from './components/modifier-famille-article/modifier-famille-article.component';
import { AjouterDocumentAchatComponent } from './components/ajouter-document-achat/ajouter-document-achat.component';
import { BondeComamndeComponent } from './components/bonde-comamnde/bonde-comamnde.component';
import { AfficherDocumentAchatsComponent } from './components/afficher-document-achats/afficher-document-achats.component';
import { RegrouperAchatsComponent } from './components/regrouper-achats/regrouper-achats.component';
import { ModifierDocumentAchatsComponent } from './components/modifier-document-achats/modifier-document-achats.component';
import { AjouterDocVentesComponent } from './components/ajouter-doc-ventes/ajouter-doc-ventes.component';
import { ModifierDocVenteComponent } from './components/modifier-doc-vente/modifier-doc-vente.component';
import { RegrouperDocVentesComponent } from './components/regrouper-doc-ventes/regrouper-doc-ventes.component';
import { ContratDomTraitmentComponent } from './components/contrat-dom-traitment/contrat-dom-traitment.component';
import { ConventionTraitComponent } from './components/convention-trait/convention-trait.component';
import { CreerConventionComponent } from './components/creer-convention/creer-convention.component';
import { TiketsSupportComponent } from './components/tikets-support/tikets-support.component';
import { FicheTicketsComponent } from './components/fiche-tickets/fiche-tickets.component';
import { FicheInterventionComponent } from './components/fiche-intervention/fiche-intervention.component';
import { FicheDetailsInterventionComponent } from './components/fiche-details-intervention/fiche-details-intervention.component';
import { CloturerTicketComponent } from './components/cloturer-ticket/cloturer-ticket.component';
import { ImprimerFicheInterventionComponent } from './components/imprimer-fiche-intervention/imprimer-fiche-intervention.component';
import { RepertoireComponent } from './components/repertoire/repertoire.component';
import { CessionComponent } from './components/cession/cession.component';
import { InfoJuridiqueComponent } from './components/info-juridique/info-juridique.component';
import { InfoJuridiquePvComponent } from './components/info-juridique-pv/info-juridique-pv.component';
import { PvTratiementComponent } from './components/pv-tratiement/pv-tratiement.component';
import { ConsultationSocComponent } from './components/consultation-soc/consultation-soc.component';
import { JuridiqueClientstructureComponent } from './components/juridique-clientstructure/juridique-clientstructure.component';
import { AssociesComponent } from './components/associes/associes.component';
import { RepreLegalJuridiqueComponent } from './components/repre-legal-juridique/repre-legal-juridique.component';
import { ModelsImpJuridiqueClientsComponent } from './components/models-imp-juridique-clients/models-imp-juridique-clients.component';
import { AlertesJuridiqueClientComponent } from './components/alertes-juridique-client/alertes-juridique-client.component';
import { OrdreComponent } from './components/ordre/ordre.component';
import { ResolutionsComponent } from './components/resolutions/resolutions.component';
import { ContratCessionComponent } from './components/contrat-cession/contrat-cession.component';
import { InfoConstitutionComponent } from './components/info-constitution/info-constitution.component';
import { ModifierConstitutionComponent } from './components/modifier-constitution/modifier-constitution.component';
import { ContratPvComponent } from './components/contrat-pv/contrat-pv.component';
import { ContratsCessionsComponent } from './components/contrats-cessions/contrats-cessions.component';
import { InfoAbonneComponent } from './components/info-abonne/info-abonne.component';
import { InfoExploitationAbonneComponent } from './components/info-exploitation-abonne/info-exploitation-abonne.component';
import { InfoFinanceAbonneComponent } from './components/info-finance-abonne/info-finance-abonne.component';
import { ModelsImprimesClientComponent } from './components/models-imprimes-client/models-imprimes-client.component';
import { DepotComponent } from './components/depot/depot.component';
import { RubriqueAbonneComponent } from './components/rubrique-abonne/rubrique-abonne.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { GroupesComponent } from './components/groupes/groupes.component';
import { InfoRhParametrageComponent } from './components/info-rh-parametrage/info-rh-parametrage.component';
import { InfoSectionAuditComponent } from './components/info-section-audit/info-section-audit.component';
import { StructureCaisseComponent } from './components/structure-caisse/structure-caisse.component';
import { IdetificationAbonneComponent } from './components/idetification-abonne/idetification-abonne.component';
import { RhGroupeComponent } from './components/rh-groupe/rh-groupe.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnnexesComponent,
    ProvisionsStocksComponent,
    ProvisionsClientsComponent,
    ProvisionsTitresComponent,
    DonsSubComponent,
    DocumentAchatComponent,
    BondeCommandeVenteComponent,
    DocumentVentsComponent,
    EngagementHorsComponent,
    DetCreanceComponent,
    ParametrageComponent,
    UsersComponent,
    ArticlesComponent,
    FamilleArticleComponent,
    ClientComponent,
    AlertesFournisseursComponent,
    ComplementsFournisseurComponent,
    FournisseursComponent,
    ExercicesComponent,
    JournauxComponent,
    InfoArticleStructureComponent,
    AlertesClientsComponent,
    PlanComptableComponent,
    PlanTiersComponent,
    ContactsClientComponent,
    ParametragePwdComponent,
    EcritureComptableComponent,
    BalanceComponent,
    BalanceTiersComponent,
    BiblioComponent,
    BalanceGenererAuditComponent,
    BalanceTierGenererAuditComponent,
    TdbComponent,
    ParametrageArticleComponent,
    SuiteArticleComponent,
    AllMessagesComponent,
    AllNotiffComponent,
    ContactsClientComponent,
    ClientComptabiliteComponent,
    CessionComponent,
    InfoJuridiqueComponent,
    InfoJuridiquePvComponent,
    PvTratiementComponent,
    OrdreComponent,
    ContratPvComponent,
    ResolutionsComponent,
    ConsultationSocComponent,
    JuridiqueClientstructureComponent,
    AssociesComponent,
    ContratCessionComponent,
    RepreLegalJuridiqueComponent,
    ModelsImpJuridiqueClientsComponent,
    AlertesJuridiqueClientComponent,
    GeneraleClientComponent,
    InterrogationClientComponent,
    ComplementsClientsComponent,
    ButtonAjouterAnnulerComponent,
    GCComponent,
    ArchiveComponent,
    ImporterComptabiliteComponent,
    AffectationComponent,
    AjouterClientExploitationsComponent,
    ModifierClientComponent,
    IdetificationAbonneComponent,
    InfoSectionAuditComponent,
    AjouterFournisseurComponent,
    IdentificationClientComponent,
    StructureCaisseComponent,
    ModifierFournisseursComponent,
    AjouterArticleComponent,
    ContratDomTraitmentComponent,
    ComplementArticleComponent,
    ModifierArticleComponent,
    InfoAbonneComponent,
    RhGroupeComponent,
    InfoExploitationAbonneComponent,
    InfoFinanceAbonneComponent,
    ModelsImprimesClientComponent,
    DepotComponent,
    InfoRhParametrageComponent,
    RubriqueAbonneComponent,
    AjouterFamilleArticleComponent,
    ModifierFamilleArticleComponent,
    AjouterDocumentAchatComponent,
    BondeComamndeComponent,
    AfficherDocumentAchatsComponent,
    RegrouperAchatsComponent,
    UtilisateurComponent,
    GroupesComponent,
    ModifierDocumentAchatsComponent,
    AjouterDocVentesComponent,
    ModifierDocVenteComponent,
    RegrouperDocVentesComponent,
    ConventionTraitComponent,
    CreerConventionComponent,
    TiketsSupportComponent,
    FicheTicketsComponent,
    FicheInterventionComponent,
    FicheDetailsInterventionComponent,
    CloturerTicketComponent,
    ImprimerFicheInterventionComponent,
    RepertoireComponent,
    InfoConstitutionComponent,
    ModifierConstitutionComponent,
    ContratsCessionsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
