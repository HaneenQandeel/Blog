import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import {IPost} from '../models/posts';
import { Router } from '@angular/router';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postTable;
  post: IPost;
  constructor(private postTableServices: PostsService, private router: Router) { }

  ngOnInit() {
    return this.postTableServices.getPosts().subscribe(postTable => {
      this.postTable = postTable;
      console.log('postTable', postTable);
  });
  }
  deletePosts(id) {
    this.postTableServices.deletePost(id).subscribe(data => {
      if (data) {
        this.postTableServices.getALl().subscribe(dd => (this.postTable = dd));
      }
    });

  }
  update(id) {
    this.router.navigate(['/edit-product', id]);
  }

}
