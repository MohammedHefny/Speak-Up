import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { EditPostsComponent } from './posts/edit-posts/edit-posts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PostsComponent } from './posts/posts.component';



const appRoutes: Routes = [
{path: '', component: LoginComponent, pathMatch: 'full'},
{path: 'home', component: HomePageComponent, canActivate: [AuthGuardService]},
{path: 'likedPosts', component: PostsComponent, canActivate: [AuthGuardService] ,children: [
  {path: '', component: EditPostsComponent, pathMatch: 'full'},
]},
{path: 'favourite', component: FavouritesComponent, canActivate: [AuthGuardService]},
{path: 'likedPosts/:id', component: PostsComponent, canActivate: [AuthGuardService],children: [
    {path: '', component: EditPostsComponent, pathMatch: 'full'},
  ]},
{path: 'WrongPathURL', component: PageNotFoundComponent},
{path: '**', redirectTo: 'WrongPathURL'},
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class appRoutingModule {}
