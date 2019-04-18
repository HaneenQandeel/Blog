import { Component, OnInit } from '@angular/core';
import { PostsService } from './../services/posts.service';


@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  postTable;
  constructor(private postTableServices: PostsService) { }

  ngOnInit() {
    return this.postTableServices.getPosts().subscribe(postTable => {
      this.postTable = postTable;
      console.log('postTable', postTable);
  });
  }

}
