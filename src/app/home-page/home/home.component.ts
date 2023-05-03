import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { post } from 'src/app/posts.model';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 constructor(private postService: PostsService, private route: ActivatedRoute, private router: Router) {}
  username: string
  ngOnInit(){
  this.username  =  this.postService.getName()
  this.clicked = this.postService.getClick()
  }
@Input() post: post
@Input() index: number
toggle: boolean = false
onDelete() {
  this.postService.deletePost(this.index)
}
onEdit() {
this.router.navigate(['/likedPosts',this.index], {relativeTo: this.route})
}
getColor() {
  return this.index % 2 === 0 ? 'var(--secondary-color)' : 'var(--yellow-color)'
}
clicked: boolean
onAddToFavourite() {

  this.toggle = true
  this.block = !this.block

  this.postService.clicked(this.clicked)
  this.clicked = !this.clicked
  if (this.postService.favPost.includes(this.post) === true) {
    this.clicked = false
    this.postService.removeFavPost(this.post)
  }else if (this.postService.favPost.includes(this.post) === false){
  this.clicked = true
    this.postService.addFavPost(this.post)
  }
}
block: boolean = false
onMenu() {
  this.block = !this.block
}
}
