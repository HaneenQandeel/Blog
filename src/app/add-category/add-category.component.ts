import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from './../services/posts.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category;
  addCategory: FormGroup;
  Name: FormControl = new FormControl('', [Validators.required]);
  constructor(private addcategory: PostsService, private router: Router) { }

  ngOnInit() {
    this.addCategory = new FormGroup({
      Name: this.Name
    });
  }
  saveCategory() {
    this.addcategory.addCategory(this.addCategory.value).subscribe(category => {
      if (category) {
        this.addcategory.getCategories().subscribe((pro => (this.category = pro)));
        this.router.navigateByUrl('/category');

      }
     });
  }


}
