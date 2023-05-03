import { Component } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.scss']
})
export class EditPostsComponent {
  constructor(private postService: PostsService) {}
  URL: string = ''
  ngOnInit(){
      this.postService.imageUrl.subscribe(
      (imageURl: string) => {
        this.URL = imageURl
      }
     )
    }
}
