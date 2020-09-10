import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { EmailService } from './email/email.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ HeaderComponent, ModalComponent, LoginComponent ],
  imports: [ CommonModule, FormsModule ],
  exports: [ HeaderComponent, ModalComponent, LoginComponent ],
  providers: [ LoginService, EmailService ]
})
export class SharedModule { }
