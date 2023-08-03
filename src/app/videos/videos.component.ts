import { Component, OnInit } from '@angular/core';
import { Upload1Service } from "../upload1.service";
import { Video } from "../data/videos";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor(private uploadservice: Upload1Service) {};

  //Variables
  lista_videos: Video[] = [];
  page: number = 0;

  //Get 1st page
  ngOnInit(): void {
    this.uploadservice.getaPage(this.page).subscribe((videos: any) => {
      this.lista_videos = <Video[]>videos;
    })
  }

  //Get more pages on sccroll by iteration
  onScroll(): void {
    console.log("on scroll chamado");
    this.page++;
    this.uploadservice.getaPage(this.page).subscribe((videos: any) => {
      this.lista_videos.push(...videos);
      console.log(videos);
    })
  }
}
