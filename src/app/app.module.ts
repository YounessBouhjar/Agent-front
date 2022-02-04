import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperateurModule } from './operateur/operateur.module';
import { OperationModule } from './operation/operation.module';
import { ClientModule } from './client/client.module';
import { AccountModule } from './account/account.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHttpInterceptorService } from './authentification/services/basic-auth-http-interceptor.service';
import { PartageeModule } from './patagee/partagee.module';
import { ConfirmationDialogComponent } from './patagee/components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OperateurModule,
    OperationModule,
    ClientModule,
    AccountModule,
    AuthentificationModule,
    PartageeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent],
})
export class AppModule {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Amane Bank');
  }
}
