import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({


  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class MainMenuComponent {
  constructor(public authService: AuthService) {}


  logout(): void {
    this.authService.logout();
  }
}
