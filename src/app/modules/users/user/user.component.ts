import { Component, Inject, OnInit, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../Entites/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
   auth = inject(UserService);
   users:Array<User>=[]
  ngOnInit(): void {
    this.getAllUser()
  }

  constructor(private toastrService:ToastrService,private router:Router){

  }

  getAllUser(){
    this.auth.allUser().subscribe(res=>this.users=res,
      error=>{this.toastrService.error("token expriess"),this.router.navigate(['auth/login'])}
    )
  }

}
