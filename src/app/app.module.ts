import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/layouts/cabecera/cabecera.component';
import { MenuComponent } from './components/layouts/menu/menu.component';
import { PrincipalComponent } from './components/layouts/principal/principal.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FormUserComponent } from './components/user/form-user/form-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    PrincipalComponent,
    FooterComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
