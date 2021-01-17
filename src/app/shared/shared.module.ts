import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { EmailService } from './email/email.service';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ContentTypeInterceptor } from './interceptors/contenttype.interceptor';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { UserTokenService } from './services/user.token.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackButtonComponent } from './controls/back-button.control';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    LoginComponent,
    NotfoundComponent,
    SpinnerComponent,
    BackButtonComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,
    FormsModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    LoginComponent,
    SpinnerComponent,
    BackButtonComponent,
    RegisterComponent
  ],
  providers: [ ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        LoginService,
        RegisterService,
        EmailService,
        SpinnerService,
        UserTokenService,
        { provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }
      ]
    }
  }

}
