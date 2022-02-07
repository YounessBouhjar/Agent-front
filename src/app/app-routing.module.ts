import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client/components/client-list/client-list.component';
import { LoginComponent } from './authentification/components/login/login.component';
import { ClientFormComponent } from './client/components/client-form/client-form.component';
import { AccountListComponent } from './account/components/account-list/account-list.component';
import { AuthGuardService } from './authentification/services/auth-guard.service';
import { ClientUpdateComponent } from './client/components/client-update/client-update.component';
import { TransfertListtComponent } from './transfert/transfert-listt/transfert-listt.component';
import { AddTransfertComponent } from './transfert/add-transfert/add-transfert.component';
import { RestituerComponent } from './transfert/restituer/restituer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  
  {
    path: 'client',
    component: ClientListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'clientForm',
    component: ClientFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updateClient/:clientId',
    component: ClientUpdateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'client/:id/accounts',
    component: AccountListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'transferts',
    component: TransfertListtComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Addtransfert',
    component: AddTransfertComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Restituertransfert',
    component: RestituerComponent,
    canActivate: [AuthGuardService],
  },

  // {
  //   path: 'operators',
  //   component: OperateurListComponent,
  //   canActivate: [AuthGuardService],
  // },
  // {
  //   path: 'operatorForm',
  //   component: OperateurFormComponent,
  //   canActivate: [AuthGuardService],
  // },
  // {
  //   path: 'client/:id/account/:id2/operations',
  //   component: OperationListComponent,
  //   canActivate: [AuthGuardService],
  // },
  // {
  //   path: 'client/:id/account/:id2/operationForm',
  //   component: OperationFormComponent,
  //   canActivate: [AuthGuardService],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
