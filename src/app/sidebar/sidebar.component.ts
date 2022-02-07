import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthentificationService } from '../authentification/services/authentification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map((result) => result.matches),
    shareReplay()
  );
  
  constructor(
  private breakpointObserver: BreakpointObserver,
  private authentificationService: AuthentificationService,
  private router: Router,
  
  ) {}
  logOut() {
  this.authentificationService.logOut();
  this.router.navigate(['/login']);
  }
  
  }
