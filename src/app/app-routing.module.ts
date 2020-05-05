import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MosaiqueComponent } from './chambres/mosaique/mosaique.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'chambres', component: MosaiqueComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
