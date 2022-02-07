import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../../model/client';
import { ClientService } from '../../service/client.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/patagee/components/confirmation-dialog/confirmation-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  constructor(private clientService: ClientService, public dialog: MatDialog,    private router: ActivatedRoute,private route:Router

    ) {

  }
  CLIENTS: Client[];
  id: string;

  dataSource = new MatTableDataSource<Client>();
  displayedColumns: string[] = [
    'clientId',
    'nom',
    'prenom',
    'email',
    'cin',
    'adress',
    'numGSM',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteClient(id: number) {
    this.clientService.delete(id).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();

      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    console.log('hello');
    this.clientService.allClients().subscribe(
      (data) => {
        console.log(data);
        this.CLIENTS = data;
        this.dataSource = new MatTableDataSource<Client>(this.CLIENTS);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
        this.dataSource = new MatTableDataSource<Client>(null);
      }
    );
  }

  openDialog(code: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Voulez vous supprimer le client ' + code + '?',
        codeSupp: code,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteClient(result.data.codeSupp);
      }
    });
  }
  goToClient(client: any) {
console.log(client.clientId)
this.route.navigate(['/updateClient/' + client.clientId]);

  }
  goToAccounts(id:string){
    this.route.navigate(['/client/'+id+'/accounts/' ]);

  }
}
