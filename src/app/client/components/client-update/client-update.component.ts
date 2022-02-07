import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogModel ,ConfirmDialogComponent} from 'src/app/confirm-dialog/confirm-dialog.component';
import { Client } from '../../model/client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  client: Client;
  id2: number;
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
    private clientService: ClientService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.id2 = this.route.snapshot.params['clientId'];
    console.log(this.id2);
    
    this.clientService.findClient(this.id2).subscribe(
      
      (data) => {
        console.log(data)

        this.client = data;

        console.log('testest')

        this.nom.setValue(this.client.nom);

        this.prenom.setValue(this.client.prenom);
        this.email.setValue(this.client.email);
        this.numGSM.setValue(this.client.numGSM);
        this.adress.setValue(this.client.adress)
        this.cin.setValue(this.client.cin)
        console.log("data  : " +JSON.stringify(data));

      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
  
        this.client = this.clientForm.value;
        this.client.clientId=this.id2
        console.log(this.client)
        this.clientService
          .update(this.client)
          .subscribe((result) => this.router.navigate(['/client']));
      }
   

  goBack() {
    this.router.navigate(['/client']);
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



