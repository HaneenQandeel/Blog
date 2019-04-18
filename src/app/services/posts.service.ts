
import { IPost } from './../models/posts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url = 'http://localhost:1337';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts;
  constructor(private httpclient: HttpClient) { }

  getALl() {
    return this.httpclient.get(`${url}/posts`);
  }
  getPosts() {
    return this.httpclient.get(`${url}/posts`);
  }
  getPostById(id) {
    return this.httpclient.get(`${url}/posts/${id}`);
  }
  deletePost(id) {
    return this.httpclient.delete(`${url}/posts/${id}`);
  }
  getCategories() {
    return this.httpclient.get(`${url}/categories`);
  }
  getCategoriesById(id) {
    return this.httpclient.get(`${url}/categories/${id}`);
  }
  getComment() {
    return this.httpclient.get(`${url}/comments`);
  }
  getTags() {
    return this.httpclient.get(`${url}/tags`);
  }
  getUsers() {
    return this.httpclient.get(`${url}/users`);
  }
  delete(id) {
    return this.httpclient.delete(`${url}/comments/${id}`);
  }
  add(post) {
    return this.httpclient.post(`${url}/posts`, post);
  }
  addCategory(category) {
    return this.httpclient.post(`${url}/categories`, category);
  }
  addTags(tags) {
    return this.httpclient.post(`${url}/tags`, tags);
  }
  editPost(id, post) {
    return this.httpclient.put(`${url}/posts/${id}`, post);
  }
  editCategory(id, category) {
    return this.httpclient.put(`${url}/categories/${id}`, category);
  }
  deleteCategories(id) {
    return this.httpclient.delete(`${url}/categories/${id}`);
  }
  deleteTags(id) {
    return this.httpclient.delete(`${url}/tags/${id}`);
  }
  deleteUsers(id) {
    return this.httpclient.delete(`${url}/users/${id}`);
  }
  searchPost(title) {
    return this.httpclient.get(`${url}/posts?Title_contains=${title}`);

  }

}
