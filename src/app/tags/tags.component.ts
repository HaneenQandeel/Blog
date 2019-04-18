import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags;
  constructor(private tagsService: PostsService) { }

  ngOnInit() {
    return this.tagsService.getTags().subscribe(tags => {
      this.tags = tags;
      console.log('tags', tags);
    });
  }
  deleteTag(id) {
    this.tagsService.deleteTags(id).subscribe(data => {

    } , error => {
      this.tagsService.getTags().subscribe(tags => (this.tags = tags));
    });

}

}
