import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from 'src/app/Model/compte';
import { Transfert } from 'src/app/Model/transfert';
import { CompteService } from 'src/app/service/compte.service';
import { TransfertService } from 'src/app/service/transfert.service';
import { AddTransfertComponent } from '../add-transfert/add-transfert.component';
@Component({
  selector: 'app-transfert-listt',
  templateUrl: './transfert-listt.component.html',
  styleUrls: ['./transfert-listt.component.css']
})
export class TransfertListtComponent implements OnInit {

  Transferts: any;
  id: string;
  id2: number;
  idd:any
  isReadOnly: boolean;
  compte:Compte;
  dataSource = new MatTableDataSource<Transfert>(this.Transferts);






  result: any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'codeTransfert',
    'idAgent',
    'idClient',
    'pi',
    'numGsm',
    'benef',
    'montant',
    'motifTransfert',
    'status',
    'motif'


  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private router: ActivatedRoute,
    public dialog: MatDialog,
    private route: Router,
    private transfertService: TransfertService,
    private compteService: CompteService
  ) {}

  ngOnInit(): void {
    this.isReadOnly=true
    this.idd=sessionStorage.getItem("id")
    console.log(this.idd)
    this.HandleChange();
    this.solde()
  }

  HandleChange(){
    console.log(this.Transferts)

    
    this.transfertService.findTransfertByIdAgent(this.idd).subscribe(
      (data) => {
        this.Transferts = data;
        this.dataSource = new MatTableDataSource<Transfert>(this.Transferts);
        this.dataSource.paginator = this.paginator;
        console.log("data login : " +JSON.stringify(data));
        console.log("alltransferts")

      },
      (error) => {
        this.dataSource = new MatTableDataSource<Transfert>(null);
        console.log(error)

      }
    );

  }
  goToForm() {
    this.route.navigate(['/Addtransfert']);

  }
  solde(){
    this.compteService.findCompteByAgent(this.idd).subscribe(
      (data) => {
        console.log(data)
        this.compte=data    
  
},   (error) => {
    console.log(error)

  });
  
  
}
}
