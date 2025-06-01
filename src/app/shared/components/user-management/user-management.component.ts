import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent  implements OnInit {


  ngOnInit() {}

  users: User[] = [];
  roles = ['admin', 'user', 'manager'];


  constructor(private userService: UserService) {
    this.loadUsers();
  }


  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }


  updateRole(user: User): void {
    this.userService.updateUserRole(user.id, user.role).subscribe({
      next: () => alert('Rol actualizado'),
      error: (err) => console.error('Error', err)
    });
  }

  
}
