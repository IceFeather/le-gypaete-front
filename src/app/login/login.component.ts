import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
  ) { }

  ngOnInit(): void {
  }

  onAnnuler() {
    this.dialogRef.close();
  }

  onValider() {
    if (this.email.valid && this.motdepasse.valid) {

    }
  }

}
