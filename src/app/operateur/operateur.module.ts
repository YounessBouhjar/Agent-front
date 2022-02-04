import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperateurRoutingModule } from './operateur-routing.module';
import { OperateurListComponent } from './components/operateur-list/operateur-list.component';
import { OperateurFormComponent } from './components/operateur-form/operateur-form.component';
import { OperateurItemComponent } from './components/operateur-item/operateur-item.component';
import { PartageeModule } from '../patagee/partagee.module';

@NgModule({
    declarations: [
        OperateurListComponent,
        OperateurFormComponent,
        OperateurItemComponent,
    ],
    imports: [CommonModule, OperateurRoutingModule, PartageeModule],
  exports: [
    OperateurFormComponent,
    OperateurItemComponent,
    OperateurListComponent
  ]
})
export class OperateurModule {}
