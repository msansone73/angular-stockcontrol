import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { ConsolidadoCarteiraComponent } from './componentes/consolidado-carteira/consolidado-carteira.component';
import { DividendosMesComponent } from './componentes/dividendos-mes/dividendos-mes.component';
import { StockListComponent } from './componentes/stock/stock-list/stock-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StockCrudComponent } from './componentes/stock/stock-crud/stock-crud.component';
import { StockFormComponent } from './componentes/stock/stock-form/stock-form.component';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegisterComponent } from './componentes/user/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    SobreComponent,
    ConsolidadoCarteiraComponent,
    DividendosMesComponent,
    StockListComponent,
    StockCrudComponent,
    StockFormComponent,
    LoginComponent,
    PrincipalComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
