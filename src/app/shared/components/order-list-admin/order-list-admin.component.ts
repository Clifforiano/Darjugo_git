import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { Order } from '../../shared/models/order.model';


@Component({
  standalone: true,
  selector: 'app-order-list-admin',
  templateUrl: './order-list-admin.component.html',
  styleUrls: ['./order-list-admin.component.scss'],
  imports: [CommonModule]
})

export class OrderListAdminComponent{
    orders: Order[] = [];
    statusFilter = 'todos';
  
  
    constructor(private orderService: OrderService) {
      this.loadOrders();
    }
  
  
    loadOrders(): void {
      this.orderService.getOrders().subscribe(orders => {
        this.orders = orders;
      });
    }
  
  
    get filteredOrders(): Order[] {
      if (this.statusFilter === 'todos') return this.orders;
      return this.orders.filter(o => o.status === this.statusFilter);
    }
  }

  }
