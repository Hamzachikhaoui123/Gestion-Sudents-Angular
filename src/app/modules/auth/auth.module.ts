import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRouting } from './auth-routing.module';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRouting,
    FormsModule
  ]
})
export class AuthModule { }
