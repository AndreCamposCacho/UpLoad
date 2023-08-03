import { Component,OnInit, Input } from '@angular/core';
import{Upload1Service} from "../upload1.service";
import {Playlist} from "../data/playlist";
import {ActivatedRoute} from "@angular/router";
import {Video} from "../data/videos";

interface VideoPlaylist {

  mid: number,
  name: string,
  thumbnail__target_id: string,
  field_media_oembed_video: string,
  field_media_duration: string,
  nid: number,
  title: string,
  field_categoria_playlist: string
}


@Component({
  selector: 'app-playlists-page',
  templateUrl: './playlists-page.component.html',
  styleUrls: ['./playlists-page.component.scss']
})
export class PlaylistsPageComponent implements OnInit{

  lista_playlist?: Playlist[];

  lista_video: {
    [key: number]: Video[]
  } = {};


  video_T: VideoPlaylist[] = [];


  /*Inputs Playlists*/
  @Input() title!: string;
  @Input()nid!: number;
  @Input() field_categoria_playlist!: string;
  @Input()field_thumbnail_playlist!: string;

  /*Inputs thumb_video*/
  @Input() name!: string;
  @Input() thumbnail__target_id!: string;

  link = "https://dev-project-upskill2-grupo-1.pantheonsite.io";

  constructor(private route: ActivatedRoute, public uploadservice: Upload1Service) {

  }

  ngOnInit() {
    this.uploadservice.getPlaylists().subscribe((playlists: any) => {
      this.lista_playlist = <Playlist[]>playlists;

      for(let playlist of this.lista_playlist){
        this.uploadservice.getVideosthumbplaylist(playlist.nid).subscribe((videos:any)=>{
          this.lista_video[playlist.nid] = <Video[]>videos;
        })
      }
    })
  }

}
