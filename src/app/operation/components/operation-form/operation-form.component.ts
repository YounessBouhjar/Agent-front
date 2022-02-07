import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/account/service/account.service';
import { Operation } from '../../model/operation';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Account } from 'src/app/account/model/account';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css'],
})
export class OperationFormComponent implements OnInit {
  codeId: string;
  codeId2: string;
  operation: Operation;
  account: Account;
  midpoint: number;
  devise1: string;
  devise2: string;

  operationForm = new FormGroup({
    type: new FormControl('', Validators.required),
    sommeEspece: new FormControl('', Validators.required),
    devise: new FormControl('', Validators.required),
  });

  get type() {
    return this.operationForm.get('type');
  }

  get sommeEspece() {
    return this.operationForm.get('sommeEspece');
  }
  get devise() {
    return this.operationForm.get('devise');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
  ) {
    console.log('operationForm');
    this.codeId = this.route.snapshot.params['id'];
    this.codeId2 = this.route.snapshot.params['id2'];
    console.log(this.codeId, this.codeId2);
  }

  ngOnInit(): void {
    // this.accountService.findAccount(this.codeId2).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.account = data;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // this.accountService.findCodeDevise(this.codeId2).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.devise1 = data;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  reset() {
    this.operationForm.reset();
  }
}
