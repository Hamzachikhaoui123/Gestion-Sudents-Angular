import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "", component: AppComponent,

    children: [
      { path: 'auth', loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule) },
      {path:"user",loadChildren:()=>import('../app/modules/users/users.module').then(m=>m.UsersModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
