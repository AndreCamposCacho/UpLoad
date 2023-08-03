import { Component, OnInit } from '@angular/core';
import { Upload1Service } from '../upload1.service';
import { Video } from '../data/videos';
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(public uploadservice: Upload1Service) { }

  emptyBookmark = regularBookmark;

  favorite_videos: Video[] = [];

  ngOnInit(): void {
    console.log("Os id's dos videos favoritos são: " + this.uploadservice.favorite_ids);
    if (this.uploadservice.favorite_ids.length != 0) {
      this.uploadservice.getFavorites().subscribe((favorite: any) => {
        this.favorite_videos = <Video[]>favorite;
      })
    }
    //console.table(this.favorite_videos)
  }

}
