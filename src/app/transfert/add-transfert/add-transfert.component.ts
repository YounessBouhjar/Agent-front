import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client/service/client.service';
import { Notification } from 'src/app/Model/notification';
import { Transfert } from 'src/app/Model/transfert';
import { CompteService } from 'src/app/service/compte.service';
import { NotificationService } from 'src/app/service/notification.service';
import { TransfertService } from 'src/app/service/transfert.service';

@Component({
  selector: 'app-add-transfert',
  templateUrl: './add-transfert.component.html',
  styleUrls: ['./add-transfert.component.css']
})
export class AddTransfertComponent implements OnInit {

  solde: any;
  compte: any;
  idUsr:any
  transfert: Transfert;
  id: string;
  idClient: any;
  client: any;
  mont: any;
  notif:any
  codeTransfert: string;
  benef: string;
  a: number;
  addtransfert = new FormGroup({
    pi: new FormControl('', Validators.required),
    numGsm: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    // GsmBenef: new FormControl('', Validators.required),
    montant: new FormControl('', Validators.required),
    nomBenef: new FormControl('', Validators.required),
    prenomBenef: new FormControl('', Validators.required),
    motifTransfert: new FormControl('', Validators.required),
  });

  get pi() {
    return this.addtransfert.get('pi');
  }

  get numGsm() {
    return this.addtransfert.get('numGsm');
  }

  // get GsmBenef() {
  //   return this.addtransfert.get('GsmBenef');
  // }
  get montant() {
    return this.addtransfert.get('montant');
  }

  get motifTransfert() {
    return this.addtransfert.get('motifTransfert');
  }
  get nom() {
    return this.addtransfert.get('nom');
  }

  get prenom() {
    return this.addtransfert.get('prenom');
  }

  get prenomBenef() {
    return this.addtransfert.get('prenomBenef');
  }
  get nomBenef() {
    return this.addtransfert.get('nomBenef');
  }

  constructor(
    private compteService: CompteService,
    private router: Router,
    private transfertService: TransfertService,
    private clientService: ClientService,
    private notificationService: NotificationService,

  ) {}

  ngOnInit(): void {
    this.idUsr=sessionStorage.getItem("id")
  }
  onchange() {
    this.clientService.findClientCin(this.pi.value).subscribe(
      (data) => {
        console.log(data);

        this.client = data;
        this.idClient = data.clientId;

        this.addtransfert.get('numGsm').setValue(data.numGSM);
        this.addtransfert.get('nom').setValue(data.nom);
        this.addtransfert.get('prenom').setValue(data.prenom);
        console.log(this.motifTransfert.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSubmit() {
    this.compteService.findCompteByAgent(this.idUsr).subscribe(
      (data) => {
        console.log(data);
        this.compte = data;

        if (this.montant.value > 2000) {
          window.alert(
            'Vous ne pouvez pas d??passer 2000 MAD dans un seul transfert'
          );
        } else if (data.solde - this.montant.value < 0) {
          window.alert(
            'Solde insuffisable.\nVotre solde est: ' + data.solde + ' DH'
            );
        } else {
          this.transfert = this.addtransfert.value;
          this.transfert.idAgent = this.idUsr;
          this.transfert.idClient = this.idClient;

          this.transfertService.save(this.transfert).subscribe(
            (result) => {
              this.codeTransfert = result.codeTransfert;
              this.a = result.montant;
              this.benef = result.nomBenef + ' ' + result.prenomBenef;
              this.updateSolde();
              // this.sendSms();
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateSolde() {
    this.solde = this.compte.solde - this.montant.value;

    this.compteService
      .update(this.idUsr, this.solde)
      .subscribe((result) => {console.log(result)
      this.gotoTransfertList()}
      );
  }
//   sendSms() {

//     this.notif.message =
//       'Vous avez effectu?? un versement de montant : ' +
//       this.a +
//       ' ?? ' +
//       this.benef +
//       '.\n Votre code de transfert est :' +
//       this.codeTransfert;
//     this.notif.phoneNumber = this.transfert.numGsm;

//     this.notificationService.send(this.notif).subscribe(
//       (result) => {
//        window.location.reload()
// },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }

  gotoTransfertList() {
    this.router.navigate(['transferts']);
  }



  getErrorMessage() {
    if (
      this.pi.hasError('required') ||
      this.numGsm.hasError('required') ||
      this.montant.hasError('required') ||
      this.nom.hasError('required') ||
      this.prenom.hasError('required')
    )
      return 'You must enter a value';
  }


}
