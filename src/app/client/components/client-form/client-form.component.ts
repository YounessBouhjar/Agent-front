import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Client } from '../../model/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  client: Client;
  clients: Client[];
  clientForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    cin: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
    numGSM: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  get prenom() {
    return this.clientForm.get('prenom');
  }

  get nom() {
    return this.clientForm.get('nom');
  }

  get cin() {
    return this.clientForm.get('cin');
  }

  get adress() {
    return this.clientForm.get('adress');
  }
  get numGSM() {
    return this.clientForm.get('numGSM');
  }

  get password() {
    return this.clientForm.get('password');
  }

  get email() {
    return this.clientForm.get('email');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.client = this.clientForm.value;
    console.log(this.client);
    this.clientService
      .save(this.client)
      .subscribe((result) => this.gotoClientList());
  }

  gotoClientList() {
    this.router.navigate(['/client']);
  }

  reset() {
    this.clientForm.reset();
  }

getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }
  return this.email.hasError('email') ? 'Not a valid email' : '';
}
getErrorMessages(){
  if (this.nom.hasError('required')||this.prenom.hasError('required')||this.password.hasError('required')) 
  return 'You must enter a value';
}
}