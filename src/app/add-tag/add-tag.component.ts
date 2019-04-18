import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from './../services/posts.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {
  tags;
  addTag: FormGroup;
  title: FormControl = new FormControl('', [Validators.required]);
  constructor(private tagService: PostsService , private router: Router ) { }

  ngOnInit() {
    this.addTag = new FormGroup ({
      title : this.title
    });
  }
  saveTags() {
    this.tagService.addTags(this.addTag.value).subscribe(tags => {
      if (tags) {
        this.tagService.getTags().subscribe((pro => (this.tags = pro)));
        console.log('tags1', this.tagService.getTags().subscribe((pro => (this.tags = pro))));
        this.router.navigateByUrl('/tags');

      }
    });
  }

}
