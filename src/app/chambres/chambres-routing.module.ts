import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { MosaiqueComponent } from './mosaique/mosaique.component';
import { ChambreComponent } from './chambre/chambre.component';

const routes: Routes = [
  { path: 'mosaique', component: MosaiqueComponent },
  { path: 'chambre/:numero', component: ChambreComponent },
  { path: '', redirectTo: 'mosaique', pathMatch: 'full' },
  { path: '**', redirectTo: 'mosaique' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambresRoutingModule { }
