import { NgModule } from '@angular/core';
// PrimeNg components
import {SidebarModule} from 'primeng/sidebar';
const PrimeComponents = [
    SidebarModule,
];

@NgModule({
    imports: [PrimeComponents],
    exports: [PrimeComponents]
  })
  export class PrimeNgModule { }
