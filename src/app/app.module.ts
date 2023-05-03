import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home-page/home/home.component';
import { PostsComponent } from './posts/posts.component';
import { EditPostsComponent } from './posts/edit-posts/edit-posts.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import { appRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomePageComponent,
    HomeComponent,
    PostsComponent,
    EditPostsComponent,
    FavouritesComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
