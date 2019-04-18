import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from './../services/posts.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';




@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category;
  id;
  editCategory: FormGroup;
  Name: FormControl = new FormControl('', [Validators.required]);
  constructor(private editService: PostsService, private router: Router,
    private activatedRoute: ActivatedRoute, private toastr: ToastrManager) { }

  ngOnInit() {
    this.editCategory = new FormGroup({
      Name: this.Name
    });
    this.id = this.activatedRoute.snapshot.params['id'];
    this.editService.getCategoriesById(this.id).subscribe((data) => {
      this.category = data;
      this.Name.setValue(this.category.Name);

    });
  }
  editCategories() {
    this.editService.editCategory(this.id, this.editCategory.value).subscribe((data) => {
      if (data) {
        this.editService.getCategories().subscribe((re) => {
          this.category = re;
        });
        this.router.navigateByUrl('/category');
        this.toastr.successToastr('Edit Category Successfully', 'Success!');

      }
    });
  }

}
