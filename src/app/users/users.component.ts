import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-users',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent  implements OnInit {
  users: any[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: error => {
        console.error(error);
      }
    })
  }
}
