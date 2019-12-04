import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private clicked = false;

  constructor() { }

  ngOnInit() {
  }

  public menuClicked() {
    this.clicked = !this.clicked;
  }

}
