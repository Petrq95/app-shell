import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppShellComponent],
  imports: [
    PrimeNgModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  exports: [AppShellComponent]
})
export class AppShellModule { }
