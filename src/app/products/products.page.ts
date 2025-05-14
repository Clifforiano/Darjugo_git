import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false
  // Note: The 'standalone' property is used in Angular to indicate that this component is not part of any module.
})
export class ProductsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
