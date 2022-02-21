import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{path:'',redirectTo:'main',pathMatch:"full"},{path:'home',component:HomeComponent},{path:'contact',component:ContactComponent},{path:'about',component:AboutComponent},
{path:'login',component:LoginComponent},{path:'main',component:MainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
