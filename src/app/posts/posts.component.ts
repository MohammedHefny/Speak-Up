import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostsService) {}
  EditMode: boolean = false;
  id: number
  postForm: FormGroup
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (!isNaN(params['id'])) {
          this.EditMode = true
          this.id = params['id']
        }
      }
    )
    if (!this.EditMode) {
      this.postForm = new FormGroup ({
        'thougths': new FormControl(null, [Validators.required]),
        'image': new FormControl(null, [Validators.required]),
        'feeling': new FormControl('Excited', [Validators.required]),
      })
    }else {
      this.postForm = new FormGroup ({
        'thougths': new FormControl(this.postService.getPost(this.id).thougths, [Validators.required]),
        'image': new FormControl(this.postService.getPost(this.id).imageUrl, [Validators.required]),
        'feeling': new FormControl(this.postService.getPost(this.id).feeling, [Validators.required]),
      })
    }
  }
  onSumbit() {
    if (!this.EditMode) {
      this.postService.addPost(this.postForm.value['image'], this.postForm.value['thougths'], this.postForm.value['feeling'])
    }else {
      this.postService.updatePost(this.id, this.postForm.value['image'], this.postForm.value['thougths'], this.postForm.value['feeling'] )
    }
    this.router.navigate(['/home'], {relativeTo: this.route})

  }
  onCancel() {
    this.router.navigate(['/home'], {relativeTo: this.route})

  }
  onImageBlur() {
      this.postService.imageUrl.next(this.postForm.value['image'])
  }
}
