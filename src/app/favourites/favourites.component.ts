import { Component, OnInit } from '@angular/core';
import { post } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit{
 posts: post[] = []
  empty:boolean = true
  constructor(private postService: PostsService){}
  username: string
ngOnInit() {
    this.username  =  this.postService.getName()
  this.posts = this.postService.getFavPosts()
  this.empty = false
}
onDelete(index: number) {
  this.postService.deleteFavPosts(index)
}

getColor(id: number) {
  return id % 2 === 0 ? 'var(--secondary-color)' : 'var(--yellow-color)'
}
}
