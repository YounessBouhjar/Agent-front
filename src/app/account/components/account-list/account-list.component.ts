import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationDialogComponent } from 'src/app/patagee/components/confirmation-dialog/confirmation-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AccountService } from '../../service/account.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../model/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  ACCOUNTS: Account[];
  codeId: string;
  account:Account
  id:any
  dataSource = new MatTableDataSource<Account>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'id',
    'numCompte',
    'solde',
    'typeCompte',
    'createAt',
    'idClient',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
  ) {

  }

  deleteAccount(id: number) {
    // this.accountService.delete(id).subscribe(
    //   (data) => {
    //     console.log(data);

    //     this.accountService.findAll(this.codeId).subscribe(
    //       (data) => {
    //         this.ACCOUNTS = data;
    //         this.dataSource = new MatTableDataSource<Account>(this.ACCOUNTS);
    //       },
    //       (error) => {
    //         this.dataSource = new MatTableDataSource<Account>(null);
    //       }
    //     );
    //   },
    //   (error) => console.log(error)
    // );
  }

  ngOnInit(): void {
    this.account=new Account()
    this.account.idClient = this.route.snapshot.params['id'];
    this.accountService.findAccountByIdClient(this.account.idClient).subscribe(
      (data) => {
        this.ACCOUNTS = data;
        this.dataSource = new MatTableDataSource<Account>(this.ACCOUNTS);
        this.dataSource.paginator = this.paginator;
        console.log("data accounts : " +JSON.stringify(data));
 

      },
      (error) => {
        this.dataSource = new MatTableDataSource<Account>(null);
        console.log(error)

      }
    );    // this.accountService.findAll(this.codeId).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.ACCOUNTS = data;
    //     this.dataSource = new MatTableDataSource<Account>(this.ACCOUNTS);
    //     this.dataSource.paginator = this.paginator;
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.dataSource = new MatTableDataSource<Account>(null);
    //   }
    // );
  }

  openDialog(code: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Voulez vous supprimer le compte ' + code + '?',
        codeSupp: code,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteAccount(result.data.codeSupp);
      }
    });
  }
  goToOperations(code: string) {
    this.router.navigate([
      'overview/client/' + this.codeId + '/account/' + code + '/operations',
    ]);
  }
add(){
  
  console.log('hahahaha')
  console.log(this.account.idClient)
  this.accountService
  .save(this.account)
  .subscribe((result) => {
    // this.gotoTransfertList()
  console.log("test : " +JSON.stringify(result));
 console.log("test")
 this.router.navigate(['overview/client/'+this.account.idClient+'/accounts']);


},
(error) => {
console.log(error)

})

  }

}
