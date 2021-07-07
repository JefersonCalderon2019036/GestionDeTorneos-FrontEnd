import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ToregisterComponent } from './components/toregister/toregister.component';
import { SuspendersComponent } from './components/suspenders/suspenders.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';
import { LigaComponent } from './components/liga/liga.component';
import { ChartsModule } from '@rinminase/ng-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToregisterComponent,
    SuspendersComponent,
    EquipmentComponent,
    UsersComponent,
    NavbarComponent,
    PrincipalComponent,
    PerfilComponent,
    EditarusuarioComponent,
    LigaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
