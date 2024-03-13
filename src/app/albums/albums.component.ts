import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  template: `
    <div *ngFor="let album of albums">
      <h3>
        <a [title]="album.id + 'details'" [routerLink]="['/album', album.id]">
          {{ album.title }}
        </a>
      </h3>
      <button (click)="deleteAlbum(album.id)">X</button>
    </div>
  `,
  styleUrl: './albums.component.css',

})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  
  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    // Fetch albums when the component initializes
    this.albumService.getAllAlbums().subscribe((data: any[]) => {
      // Add a "selected" property to each album for checkbox status
      this.albums = data.map((album) => ({ ...album, selected: false }));
    });
  }

  deleteAlbum(albumId: number) {
    // Add logic to handle the deletion of the album
    this.albumService.deleteAlbum(albumId).subscribe(() => {
      // Remove the deleted album from the local array
      this.albums = this.albums.filter((album) => album.id !== albumId);
    });
  }
}
