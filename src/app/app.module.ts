import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout'
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FondService } from './fond/service/fond.service';
// import { ChambresModule } from './chambres/chambres.module';
import { FondModule } from './fond/fond.module';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ChaletComponent } from './chalet/chalet.component';
import { DiaporamaModule } from './diaporama/diaporama.module';
import { LanguesModule } from './langues/langues.module';
import { ChaletApiService } from './chalet/chalet.api.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilisateurApiService } from './utilisateur/utilisateur.api.service';
import { ReserverComponent } from './reserver/reserver.component';
import { ChambreComponent } from './chambres/chambre/chambre.component';
import { MosaiqueComponent } from './chambres/mosaique/mosaique.component';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChambresApiService } from './chambres/chambres.api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccueilComponent,
    ContactComponent,
    ChaletComponent,
    LoginComponent,
    ReserverComponent,
    MosaiqueComponent,
    ChambreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DeviceDetectorModule.forRoot(),
    LayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatGridListModule,
    MatRippleModule,
    ReactiveFormsModule,
    FondModule.forRoot(),
    DiaporamaModule,
    LanguesModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    FondService,
    ChaletApiService,
    ChambresApiService,
    UtilisateurApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
