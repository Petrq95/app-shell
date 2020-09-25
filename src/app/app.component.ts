import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideBar } from 'app-shell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-shell-library';
  display = true;
  navList: SideBar[] = [
    {
      apps: [
       {
         linkName: 'Dashboard',
         linkUrl: 'dashboard'
       },
       {
         linkName: 'App Marketplace',
         linkUrl: 'app-marketplace'
       },
       {
         linkName: 'Organization',
         linkUrl: 'organization'
       }
    ],
     },
      {
        integrations: [
         {
           linkName: 'Apps',
           linkUrl: 'apps'
         },
         {
           linkName: 'Appointments Admin',
           linkUrl: 'appointments-admin'
         },
         {
           linkName: 'Loaner',
           linkUrl: 'loaner'
         }
       ],
     },
       {
         support: [
         {
           linkName: 'Hep Desk',
           linkUrl: 'help'
         },
         {
           linkName: 'Contact',
           linkUrl: 'contact'
         },
         {
           linkName: 'Suggestions',
           linkUrl: 'suggestions'
         }
       ]
   }
   ];

   constructor(private router: Router){}
  changed(event): void{
    this.router.navigate([event.nav.linkUrl]);
  }
}
