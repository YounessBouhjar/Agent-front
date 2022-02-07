import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { PartageeModule } from '../patagee/partagee.module';

@NgModule({
    declarations: [ClientListComponent, ClientFormComponent, ClientUpdateComponent],
    imports: [CommonModule, ClientRoutingModule, PartageeModule],
  exports: [
    ClientFormComponent,
    ClientListComponent
  ]
})
export class ClientModule {}
