import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTitle;
  constructor(private userService: PostsService) { }

  ngOnInit() {
  }
  search() {
    this.userService.searchPost(this.searchTitle).subscribe( data => {
      this.userService.posts = data;
       console.log('postTable', data);
    });

  }

}
