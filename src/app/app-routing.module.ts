import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/pages-alumno/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./pages/pages-conductor/perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },
  {
    path: 'buscar-viajes',
    loadChildren: () => import('./pages/pages-alumno/buscar-viajes/buscar-viajes.module').then( m => m.BuscarViajesPageModule)
  },
  {
    path: 'mi-viajes',
    loadChildren: () => import('./pages/pages-alumno/mi-viajes/mi-viajes.module').then( m => m.MiViajesPageModule)
  },
  {
    path: 'listado-viajes',
    loadChildren: () => import('./pages/pages-alumno/listado-viajes/listado-viajes.module').then( m => m.ListadoViajesPageModule)
  },
  {
    path: 'metodos-pago',
    loadChildren: () => import('./pages/pages-alumno/metodos-pago/metodos-pago.module').then( m => m.MetodosPagoPageModule)
  },
  {
    path: 'buscar-viajes',
    loadChildren: () => import('./pages/pages-alumno/buscar-viajes/buscar-viajes.module').then( m => m.BuscarViajesPageModule)
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./pages/pages-conductor/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'listado-viajes-conductor',
    loadChildren: () => import('./pages/pages-conductor/listado-viajes-conductor/listado-viajes-conductor.module').then( m => m.ListadoViajesConductorPageModule)
  },
  {
    path: 'cartera',
    loadChildren: () => import('./pages/pages-conductor/cartera/cartera.module').then( m => m.CarteraPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
