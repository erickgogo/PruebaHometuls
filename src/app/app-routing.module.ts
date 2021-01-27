import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgoritmoComponent } from './pages/algoritmo/algoritmo.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'map', component: MapComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'home', component: HomeComponent },
  { path: 'algoritmo', component: AlgoritmoComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
