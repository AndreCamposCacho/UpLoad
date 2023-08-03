import { Component, OnInit } from '@angular/core';
import { Upload1Service } from "../upload1.service";
import { Video } from "../data/videos";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-suggested-videos',
  templateUrl: './suggested-videos.component.html',
  styleUrls: ['./suggested-videos.component.scss']
})
export class SuggestedVideosComponent implements OnInit {

  lista_videos?: Video[];

  constructor(private uploadservice: Upload1Service) {

  }

  ngOnInit(): void {
    this.uploadservice.getaSuggestion(20).subscribe((videos: any) => {
      console.log(videos)
      this.lista_videos = <Video[]>videos;
    })
  }

  moreSuggestions(): void {
    this.uploadservice.getaSuggestion(20).subscribe((videos: any) => {
      console.log(videos)
      this.lista_videos = <Video[]>videos;
    })
  }
}
