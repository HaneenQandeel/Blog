import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PostsService } from './../services/posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  post;
  id;
  editForm: FormGroup;
  Title: FormControl = new FormControl('', [Validators.required]);
  body: FormControl = new FormControl('', [Validators.required]);

  constructor(private editService: PostsService, private activatedRoute: ActivatedRoute,
     private router: Router, private toastr: ToastrManager) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      Title: this.Title,
      body: this.body
    });
    this.id = this.activatedRoute.snapshot.params['id'];
    this.editService.getPostById(this.id).subscribe((data) => {
      this.post = data;
      this.Title.setValue(this.post.Title);
      this.body.setValue(this.post.body);

    });

  }

  editPosts() {
    this.editService.editPost(this.id, this.editForm.value).subscribe((data) => {
      if (data) {
        this.editService.getPosts().subscribe((re) => {
          this.post = re;
        });
        this.router.navigateByUrl('/posts');
        this.toastr.successToastr('Edit Post Successfully', 'Success!');

      }
    });
  }

}
