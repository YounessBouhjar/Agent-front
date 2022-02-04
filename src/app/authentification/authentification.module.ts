import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { PartageeModule } from '../patagee/partagee.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, PartageeModule],
  exports: [
    LoginComponent
  ]
})
export class AuthentificationModule {}
