import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments;
  constructor(private commentServices: PostsService) { }

  ngOnInit() {
    return this.commentServices.getComment().subscribe(comments => {
      this.comments = comments;
      console.log('comments', comments);
    });
  }

  delete(id) {
    this.commentServices.delete(id).subscribe(data => {
      if (data) {
        this.commentServices.getALl().subscribe(dd => (this.comments = dd));
      }
    });

  }

}
