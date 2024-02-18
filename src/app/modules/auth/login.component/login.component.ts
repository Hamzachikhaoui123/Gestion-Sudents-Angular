import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, FormsModule, HttpClientModule]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService,private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.minLength(6)]
    })
  }

  ngOnInit(): void {

  }

  get f() {
    return this.loginForm.controls
  }
  login() {
    this.authService.login({ email: this.f['email'].value, password: this.f['password'].value }).subscribe(
      res => {

        localStorage.setItem('Token',res?.access_token        )
         this.toastrService.success("Login avec success"),this.router.navigate(['user']) }, err => this.toastrService.error("email or password not correct")


    )

  }
}
