import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { AccountItemComponent } from './components/account-item/account-item.component';
import { PartageeModule } from '../patagee/partagee.module';

@NgModule({
    declarations: [
        AccountListComponent,
        AccountFormComponent,
        AccountItemComponent,
    ],
    imports: [CommonModule, AccountRoutingModule, PartageeModule],
  exports: [
    AccountFormComponent,
    AccountItemComponent,
    AccountListComponent
  ]
})
export class AccountModule {}
