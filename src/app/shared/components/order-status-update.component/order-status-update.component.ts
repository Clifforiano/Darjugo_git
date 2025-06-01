import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
  standalone: true,
  selector: 'app-order-status-update',
  templateUrl: './order-status-update.component.html',
  styleUrls: ['./order-status-update.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class OrderStatusUpdateComponent {
  @Input() orderId!: string;
  status = '';
  statusOptions = ['pendiente', 'enviado', 'entregado', 'cancelado'];



  constructor(private orderService: OrderService) {}


  updateStatus(): void {
    if (this.status && this.orderId) {
      this.orderService.updateOrderStatus(this.orderId, this.status)
        .subscribe(() => alert('Estado actualizado'));
    }
  }
}
