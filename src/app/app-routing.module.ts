import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParfumsComponent } from './parfums/parfums.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {
    path: "parfums", component: ParfumsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] }
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
