import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  
})
export class InputComponent implements OnInit {
  @Input() type:string=""
  @Input() placeholder:string=""
  @Input() icon:string="";
  hide:boolean=true
  constructor(){}
  ngOnInit(): void {
    console.log("hide",this.hide);

  }
  changeIcon(event:any):void{
    console.log("hide",this.hide);
    
  this.hide=!this.hide

 if (this.hide){this.icon="fa-eye-slash";
this.type="password"

}else {this.icon="fa fa-eye";
this.type="text";

}
  }

}
