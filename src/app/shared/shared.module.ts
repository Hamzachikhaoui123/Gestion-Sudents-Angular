import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { NavbarComponent } from './navbar.component/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    InputComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
