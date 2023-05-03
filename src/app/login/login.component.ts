import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private postService: PostsService) {}
  @ViewChild('f') loginForm: NgForm
  onSubmit () {
    console.log(this.loginForm)
  }
  pass1: number
  pass2: number
  passwordMatch: boolean = false
  onPassBlur(){
  if ((this.pass1 === this.pass2) && this.pass1 && this.pass2) {
    this.passwordMatch = true
  }else {
    this.passwordMatch = false
  }
}
onLogin() {
this.authService.login()
this.router.navigate(['home'], {relativeTo: this.route})
this.postService.user(this.username)

}
onLogout() {
this.authService.logout()
}
username: string = ''
onUsername() {
}
}
