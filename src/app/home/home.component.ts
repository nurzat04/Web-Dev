import { Component } from '@angular/core';
import { AlbumService } from '../album.service';
import { albums, Album } from '../album';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showCreateAlbumDialog = false;
  //newAlbum: any = {};
  newAlbum: Album = { userId: 0, id: 0, title: '' , photos: []};
  constructor(private albumService: AlbumService) {}

  openCreateAlbumDialog() {
    this.showCreateAlbumDialog = true;
    //this.newAlbum = {};
    this.newAlbum = { userId: 0, id: 0, title: '' , photos: []};
    

  }

  createAlbum() {
    this.albumService.createAlbum(this.newAlbum).subscribe(
      (response) => {
        alert('Album created successfully!');
        albums.push(this.newAlbum);
        this.showCreateAlbumDialog = false;
      }
    );
  }


}
