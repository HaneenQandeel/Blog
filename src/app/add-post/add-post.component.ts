import { Router } from '@angular/router';
import { PostsService } from './../services/posts.service';
import { IPost } from './../models/posts';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';




@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  posts;
  addForm: FormGroup;
  Title: FormControl = new FormControl('', [Validators.required]);
  body: FormControl = new FormControl('', [Validators.required]);
  // category: FormControl = new FormControl('', [Validators.required]);
  // tags: FormControl = new FormControl('', [Validators.required]);
  constructor(private addpost: PostsService, private router: Router, private toastr: ToastrManager) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      Title: this.Title,
      body: this.body
    });
  }
  save() {
    this.addpost.add(this.addForm.value).subscribe(posts => {
      if (posts) {
        this.addpost.getALl().subscribe((pro => (this.posts = pro)));
        this.router.navigateByUrl('/posts');
        this.toastr.successToastr('Add Post Successfully', 'Success!');

      }
     });
  }

}
