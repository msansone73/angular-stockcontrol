import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { StockCrudComponent } from './componentes/stock/stock-crud/stock-crud.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [


  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'', component:PrincipalComponent, canActivate:[AuthGuard],
   children: [
    {path:'', component:HomepageComponent},
    {path:'sobre', component:SobreComponent},
    {path:'stock', component:StockCrudComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
