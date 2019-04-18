import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    return this.postsService.getALl().subscribe(posts => {
      this.postsService.posts = posts;
      console.log('posts', posts);
    });
  }

}
