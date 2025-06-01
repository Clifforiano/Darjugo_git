import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// Update the import path below to the correct location of order.model.ts
// Update the path below to the correct location of order.model.ts
// Update the path below to the correct location of order.model.ts
import { OrderModule } from '../../../models/order.module'; // Adjust the import path as necessarys


@Component({
  standalone: true,
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss'],
  imports: [CommonModule]
})
export class OrderTrackingComponent {
  @Input() order!: OrderModule;
  statusSteps = [
    { id: 'pendiente', label: 'Pendiente' },
    { id: 'procesando', label: 'Procesando' },
    { id: 'enviado', label: 'Enviado' },
    { id: 'entregado', label: 'Entregado' }
  ];
}
