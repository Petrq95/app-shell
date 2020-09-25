import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppShellModule } from 'app-shell';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: AppComponent},
  {path: 'app-marketplace', component: AppComponent},
  {path: 'organization', component: AppComponent},
  {path: 'apps', component: AppComponent},
  {path: 'appointments-admin', component: AppComponent},
  {path: 'loaner', component: AppComponent}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppShellModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
