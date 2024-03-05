import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { HomeComponent } from './home/home/home.component';
import { PopularesComponent } from './home/populares/populares.component';
import { DescargadosComponent } from './home/descargados/descargados.component';
import { ProximamenteComponent } from './home/proximamente/proximamente.component';
import { AgregarComponent } from './home/agregar/agregar.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'home', component: HomeComponent,
        children: [
            {path: 'populares', component: PopularesComponent},
            {path: 'descargados', component: DescargadosComponent},
            {path: 'proximamente', component: ProximamenteComponent},
            {path: 'agregar', component: AgregarComponent},
            {path: '**', redirectTo:'populares', pathMatch:'full'},
        ],
    },
    {path: '', redirectTo:'/login', pathMatch: 'full'},

];




