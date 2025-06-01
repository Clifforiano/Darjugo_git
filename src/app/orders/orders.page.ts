import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: false
  // Note: The 'standalone' property is used in Angular to indicate that this component is not part of any module.
})
export class OrdersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
