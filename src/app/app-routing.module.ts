import { AuthGuard } from './auth.guard';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent} from './post/post.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CategoriesComponent} from './categories/categories.component';
import {CommentsComponent} from './comments/comments.component';
import {TagsComponent} from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import {AddPostComponent} from './add-post/add-post.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {EditCategoryComponent} from './edit-category/edit-category.component';
import {ShowPostComponent} from './show-post/show-post.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {AddTagComponent} from './add-tag/add-tag.component';
import { AdminGuard } from './admin.guard';



const routes: Routes = [
  {path: '' , component: PostComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'category' , component: CategoriesComponent},
  {path: 'comment' , component: CommentsComponent, canActivate: [AuthGuard]},
  {path: 'tags' , component: TagsComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'posts' , component: PostsComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'users' , component: UsersComponent},
  {path: 'add-post', component: AddPostComponent},
  {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent},
  {path: 'show-post', component: ShowPostComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'add-tag', component: AddTagComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
