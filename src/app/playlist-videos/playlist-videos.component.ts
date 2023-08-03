import { Component,Input,OnInit } from '@angular/core';
import {Upload1Service} from "../upload1.service";
import {Video} from "../data/videos";
import {ActivatedRoute} from "@angular/router";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faShuffle} from "@fortawesome/free-solid-svg-icons";


interface VideoPlaylist {

  mid: number,
  name: string,
  thumbnail__target_id: string,
  field_media_oembed_video: string,
  field_media_duration: string,
  nid: number,
  title: string,
  field_categoria_playlist: string,
  field_thumbnail_playlist: string
}


@Component({
  selector: 'app-playlist-videos',
  templateUrl: './playlist-videos.component.html',
  styleUrls: ['./playlist-videos.component.scss']
})

export class PlaylistVideosComponent implements OnInit{

  faplay = faPlay
  fashuffle = faShuffle


  videos: Video[] = [];

  video_T: VideoPlaylist[] = [];

  @Input() mid!: number;
  @Input() name!: string;
  @Input() thumbnail__target_id!: string;
  @Input() field_media_oembed_video!: string;
  @Input() field_media_duration!:string;
  @Input() title!:string;
  @Input() field_categoria_playlist!: string;
  @Input() field_thumbnail_playlist!: string;

  @Input()nid!:number;


  link = "https://dev-project-upskill2-grupo-1.pantheonsite.io/";



  constructor(private route: ActivatedRoute, public uploadservice: Upload1Service){

  }

  ngOnInit(): void {

    let tid = this.route.snapshot.params['tid']

    this.uploadservice.getOneVideoPlaylist(tid).subscribe((videos:any) =>{
      this.video_T = <VideoPlaylist[]>videos;
    })

    this.uploadservice.getVideosPlaylist(tid).subscribe((videos:any) =>{
      this.videos = <Video[]>videos;
    })


  }

}
