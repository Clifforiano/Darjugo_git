import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  standalone: false
  // Note: The 'standalone' property is used in Angular to indicate that this component is not part of any module.
})
export class OrderListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
