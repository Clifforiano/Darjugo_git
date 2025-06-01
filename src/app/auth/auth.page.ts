import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false
  // Note: The 'standalone' property is used in Angular to indicate that this component is not part of any module.
})
export class AuthPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
