import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideBar } from './models/links-list.model';

@Component({
  selector: 'shyft-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {
@Input() modal: boolean;
@Input() display: boolean;
@Input() showCloseIcon: boolean;
@Input() logo: string;
@Output() navigationChanged: EventEmitter<any> = new EventEmitter();
@Input() navList: SideBar;

  ngOnInit(): void {
  }

changeNavigation(nav): void {
  this.navigationChanged.emit({nav});
}

getKey(obj): string{
  return Object.keys(obj)[0];
}
}
