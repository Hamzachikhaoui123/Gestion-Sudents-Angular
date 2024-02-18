import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component/auth.component";
import { LoginComponent } from "./login.component/login.component";

const routes:Routes=[
    {
        path:'',component:AuthComponent,
        children:[
            {
                path:"login",component:LoginComponent
            }
        ]
    }

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AuthRouting {}