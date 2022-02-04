import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { OperationFormComponent } from './components/operation-form/operation-form.component';
import { OperationListComponent } from './components/operation-list/operation-list.component';
import { PartageeModule } from '../patagee/partagee.module';

@NgModule({
    declarations: [OperationFormComponent, OperationListComponent],
    imports: [CommonModule, OperationRoutingModule, PartageeModule],
  exports: [
    OperationFormComponent,
    OperationListComponent
  ]
})
export class OperationModule {}
