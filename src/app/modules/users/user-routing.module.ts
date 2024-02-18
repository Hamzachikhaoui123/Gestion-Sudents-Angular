import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../../auth.guard";

const routes:Routes=[
{path:"",component:UserComponent,    canActivate: [AuthGuard], // Utilisation du guard
}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class UserRouting {}