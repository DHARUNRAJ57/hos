import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HostelComponent } from './hostel/hostel.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'register', component: HomeComponent },
  { path: 'hostel', component: HostelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
