import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AddPostComponent } from './add-post/add-post.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { AddTagComponent } from './add-tag/add-tag.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    PostComponent,
    PostsComponent,
    CommentsComponent,
    TagsComponent,
    UsersComponent,
    CategoriesComponent,
    HomeComponent,
    AddPostComponent,
    EditProductComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    ShowPostComponent,
    AddTagComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, NgxPaginationModule, BrowserAnimationsModule, FormsModule, ToastrModule.forRoot(),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-danger',
      cancelButtonClass: 'btn btn-primary'
  }), AppRoutingModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
