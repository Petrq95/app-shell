import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { AppShellModule, AppShellComponent } from 'app-shell';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppShellModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector){}
  ngDoBootstrap(): void {
    const element = createCustomElement(AppShellComponent, { injector: this.injector });
    customElements.define('app-shell-nav', element);
  }
 }
