import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css'],
})
export class NavAdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  isMenuOpen: boolean = false;

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  display: any;
  isBlock: boolean = false;
  className: string = 'fa fa-bars';
  onClick() {
    if (!this.isBlock) {
      this.display = 'flex';
      this.isBlock = true;
      this.className = 'fa fa-times';
    } else {
      this.display = 'none';
      this.isBlock = false;
      this.className = 'fa fa-bars';
    }
  }
}
