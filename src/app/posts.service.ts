import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { post } from './posts.model';

@Injectable({
  providedIn: 'root'
})
// feeling
export class PostsService{
posts: post[] = [
new post('mohamed', new Date(), 'assets/FB_IMG_1672749791742.jpg', 'and this was what he said in brief', 'Excited'),
new post('ali', new Date(), 'assets/FB_IMG_1672749793290.jpg', 'and this was his advice', 'Happy'),
new post('taha', new Date(), 'assets/FB_IMG_1672749798397.jpg', 'and then he ran', 'Sad'),
]
getPosts() {
return this.posts
}
getPost(index: number) {
  return this.posts[index]
}
numers: number[] = []

deletePost(index: number) {
  this.posts.splice(index,1)
  let counter = 0
  // it gets the server by id
    this.posts.find(
      (s) => {
        counter++
        return s[index] === this.favPost
      }
      );
      this.numers.push(counter)
this.favPost.splice(this.numers[this.numers.length - 1], 1)
console.log(this.favPost)
console.log(this.numers)
console.log(this.numers[this.numers.length - 1] )
}

addPost(imageURL: string, thougths: string, feeling: string) {
  this.posts.push(new post(this.namee[0], new Date(), imageURL, thougths, feeling))
}
updatePost(index: number,imageURL: string, thougths: string, feeling: string ) {
this.posts[index] = new post(this.namee[0], new Date(), imageURL, thougths, feeling)
this.favPost[index] = new post(this.namee[0], new Date(), imageURL, thougths, feeling)
}
imageUrl = new Subject<string>()
favouriteName: string = 'Add To Favourite'
favUser(name: string) {
  this.namee.push(name)
}
getFavName() {
  return this.namee[0]
}
click: boolean[] = []
clicked(clicker: boolean) {
  this.click.unshift(clicker)
}
getClick() {
  return this.click[0]
}
favPost: post[] = []
addFavPost(post: post) {
    if (this.favPost.length === 0) {
      this.favPost.push(post)
}else {
  if ( !this.favPost.includes(post) ) {
    this.favPost.push(post)
  }
}
}
numbers: number[] = []
removeFavPost(post: post) {
  let counter = 0
    // it gets the server by id
      this.favPost.find(
        (s) => {
          counter++
          return s === post
        }
        );
        this.numbers.push(counter)
  this.favPost.splice(this.numbers[this.numbers.length - 1] - 1, 1)
}

getFavPosts() {
  return this.favPost
}
deleteFavPosts(index: number) {
  this.favPost.splice(index,1)

}
namee: string[] = []
user(name: string) {
  this.namee.push(name)
}
getName() {
  return this.namee[0]
}
}
