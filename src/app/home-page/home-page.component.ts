import { Component, OnInit } from '@angular/core';
import { post } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  constructor(private postService: PostsService) {}
posts: post[]
ngOnInit() {
  this.posts = this.postService.getPosts()
}
}
