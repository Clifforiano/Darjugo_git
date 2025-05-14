import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false
  // Note: The 'standalone' property is used in Angular to indicate that this component is not part of any module.
})
export class CartPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
