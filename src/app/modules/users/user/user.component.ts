import { Component, Inject, OnInit, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
   auth = inject(UserService);
  ngOnInit(): void {
    this.getAllUser()
  }

  constructor(){

  }

  getAllUser(){
    this.auth.allUser().subscribe(res=>console.log("res",res)
    )
  }

}
