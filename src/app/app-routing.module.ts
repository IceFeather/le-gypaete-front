import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MosaiqueComponent } from './chambres/mosaique/mosaique.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'chambres', loadChildren: () => import('./chambres/chambres.module').then(m => m.ChambresModule) },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
