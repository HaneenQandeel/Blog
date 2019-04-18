import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private UserService: PostsService) { }

  ngOnInit() {
    return this.UserService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  deleteUser(id) {
    this.UserService.deleteUsers(id).subscribe(data => {
      if (data) {
        this.UserService.getUsers().subscribe(dd => (this.users = dd));
      }
    });

}

}
