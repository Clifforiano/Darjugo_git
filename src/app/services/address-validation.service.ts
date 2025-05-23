import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressValidationService {

  constructor(private http: HttpClient) { }
  validate(address: string): boolean {
    // Lógica de validación real con API aquí
    return address.length > 10; // Validación simple para ejemplo
  }
}
