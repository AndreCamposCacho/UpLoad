/*
import { Component, OnInit, Input } from '@angular/core';
import { Upload1Service } from "../upload1.service";
import { Video } from "../data/videos";
import { VideoPlayerComponent } from '../video-player/video-player.component';


@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.scss']
})
export class VideoDisplayComponent implements OnInit {

  lista_videos: Video[] = [];

  constructor(private uploadservice: Upload1Service) { }

  ngOnInit(): void {
    this.uploadservice.getVideos().subscribe((v: any) => {
      console.log("object video list ou coisa assim");
      console.table(v);

      console.log("É um array?" + Object.prototype.toString.call(v));

      for (let i = 0; i < v.length; i++) {

        for (let key in v[i]) {
          console.log(key);
        }

        let video: Video = {
          created: v[i].created,
          mid: parseInt(v[i].mid),
          name: v[i].name,
          field_tags: v[i].field_tags,
          thumbnail__target_id: v[i].thumbnail__target_id,
          field_categorias: v[i].field_categorias,
          field_channel: v[i].field_channel,
          field_user_photo: v[i].field_user_photo,
          field_media_oembed_video: v[i].field_media_oembed_video,
          field_media_duration: '',
          nid: 0
        };
        console.log(Object.prototype.toString.call(video));
        this.lista_videos.push(video);
      }

      console.table(this.lista_videos);
    })


  }

}
*/