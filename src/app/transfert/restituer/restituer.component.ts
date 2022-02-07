import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client/service/client.service';
import { CompteService } from 'src/app/service/compte.service';
import { TransfertService } from 'src/app/service/transfert.service';

@Component({
  selector: 'app-restituer',
  templateUrl: './restituer.component.html',
  styleUrls: ['./restituer.component.css']
})
export class RestituerComponent implements OnInit {

  rest = new FormGroup({
    
    refTrans: new FormControl(''),
    motiff: new FormControl(''),

  });
  idUsr:any
 date=new Date()
  compte: any;
  montant: any;
  transfert: any;
  addtransfert: any;
  solde: number;
  get refTrans() {
    return this.rest.get('refTrans');
  }
  
  

  get motiff() {
    return this.rest.get('motiff');
  }
  Transfert: any;
  Transfertt: any;
  idAgent:any;
  idClient:any;
  idBeneficaire:any;
  Beneficiaire:any;
  Client:any;
stat:any;
   edited:any
  constructor(     private router: Router,
    private route: Router,
    private transfertService: TransfertService,
    private compteService: CompteService,
    private clientService: ClientService,
    ) { }

  ngOnInit(): void {
    this.edited=false;
    this.idUsr=sessionStorage.getItem("id")
    console.log(this.idUsr)
  }
  search(){
    this.transfertService.findTransfertByCodeTransfert(this.refTrans.value).subscribe(
      (data) => {
        if(data==null){
          window.alert("La référence de transfert saisie est inexistante")
        }
        else{
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaa")

        this.Transfert = data;

        console.log( JSON.stringify(this.Transfert));

        console.log(this.Transfert.idClient);
        console.log(this.idAgent);
        console.log(this.Transfert.idBeneficiaire);
        this.edited=true;
        this.clientService.findClient(this.Transfert.idClient).subscribe(
          (data) => {
            this.Client = data.prenom +" "+ data.nom ;
            console.log(data)
          },
          (error) => console.log(error)
        );
      }
    },
      (error) => {
        console.log(error)

        }
      
    );
  }

restituer(){
  this.transfertService.findTransfertByCodeTransfert(this.Transfert.codeTransfert).subscribe(
    (data) => {
      this.Transfert = data;
    },
    (error) => {
      console.log(error)

    }
  );
  console.log(this.motiff.value)
  console.log("motif :" +this.Transfert.status)
  if(this.Transfert.status==='débloqué à servir' ||this.Transfert.status==='à servir'){
    if(this.motiff.value==='')window.alert("Veuillez entrer un motif de restitution");
    else{
      
        this.stat="restitué"
        this.transfertService.update(this.Transfert.codeTransfert,this.motiff.value,this.stat).subscribe(
          (data) => {
          console.log(data)
          this.update()
  
        },
        (error) => console.log(error)
      );
      }
  

    }

  
 else if(this.Transfert.status==='servi'){
  window.alert("Impossible de restituer le transfert car il est déjà payé");
 }
 else if(this.Transfert.status==='bloqué'){
  window.alert("Impossible de restituer le transfert car il est bloqué");
 }
 else {
  window.alert("Impossible de restituer le transfert vérifiez son status");
 }
}


update() {
  this.compteService.findCompteByAgent(this.idUsr).subscribe(
    (data) => {
      console.log(data)
      this.compte=data
      this.solde=this.compte.solde+this.Transfert.montant

      this.compteService.update(this.idUsr,this.solde).subscribe((result) =>
       this.router.navigate(['/transferts']));

},
(error) => {
  console.log(error)

})
      }
      






}