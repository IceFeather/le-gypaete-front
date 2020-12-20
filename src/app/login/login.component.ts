import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Utilisateur } from '../utilisateur/model/utilisateur';
import { UtilisateurApiService } from '../utilisateur/utilisateur.api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  motdepasse = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private _snackbar: MatSnackBar,
    private utilisateurApiService: UtilisateurApiService
  ) { }

  ngOnInit(): void {
  }

  onAnnuler() {
    this.dialogRef.close();
  }

  onValider() {
    if (this.email.valid && this.motdepasse.valid) {
      this.utilisateurApiService.connecter(this.email.value, this.motdepasse.value)
      .then((utilisateur: Utilisateur) => {
        console.log('bienvenue : ' + utilisateur.nom + ' ' + utilisateur.prenom);
        this.dialogRef.close();
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

}
