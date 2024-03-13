import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component'
import { AlbumService } from './album.service';
import {AlbumsDetailComponent} from './albums-detail/albums-detail.component'
import { HttpClientModule } from '@angular/common/http';
import { AlbumsPhotosComponent } from './albums-photos/albums-photos.component';

@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forRoot([
        { path: '', component: AlbumsComponent },
        {path: 'album/:id', component: AlbumsDetailComponent},
        {path: 'album/:id/photos', component: AlbumsPhotosComponent},
      ])
    ],
    declarations: [
      AppComponent,
      HomeComponent,
      AlbumsComponent,
      AlbumsDetailComponent,
      AlbumsPhotosComponent
    ],
    providers: [AlbumService],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  