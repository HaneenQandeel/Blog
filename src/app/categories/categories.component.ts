import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories;
  counter = 0;
  constructor(private categoryService: PostsService, private router: Router) { }

  ngOnInit() {
    return this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log('categories', categories);
    });
  }
  deleteCategory(id) {
    this.categoryService.deleteCategories(id).subscribe(data => {
      if (data) {
        this.categoryService.getCategories().subscribe(dd => (this.categories = dd));
      }
    });

}
update(id) {
  this.router.navigate(['/edit-category', id]);
}

  }
