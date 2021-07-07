import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { LigaComponent } from './components/liga/liga.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SuspendersComponent } from './components/suspenders/suspenders.component';
import { ToregisterComponent } from './components/toregister/toregister.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "toregister", component: ToregisterComponent},
  {path: "suspenders", component: SuspendersComponent},
  {path: "users", component: UsersComponent},
  {path: "equipment", component: EquipmentComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "editarperfil", component: EditarusuarioComponent},
  {path: "ligas", component: LigaComponent},
  {path: "**", component: LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
