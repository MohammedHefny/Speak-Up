import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostsService) {}

  onFav() {
this.router.navigate(['favourite'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }
}
