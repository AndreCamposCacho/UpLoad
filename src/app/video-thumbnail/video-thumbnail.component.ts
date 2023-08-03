import { Component, Input, OnInit } from '@angular/core';
import { Upload1Service } from "../upload1.service";
import { Video } from "../data/videos";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { VideoPlayerComponent } from '../video-player/video-player.component';
import {PopupshareComponent} from "../popupshare/popupshare.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {

  constructor(public uploadservice: Upload1Service,  private  dialogRef : MatDialog) {}


  video?: Video

  fullBookmark = solidBookmark;
  emptyBookmark = regularBookmark;
  fasharenodes = faShareNodes;

  link = "https://dev-project-upskill2-grupo-1.pantheonsite.io/";


  @Input() created!: string;
  @Input() mid!: number;
  @Input() name!: string;
  @Input() field_tags!: string;
  @Input() thumbnail__target_id!: string;
  @Input() user_picture!: string;
  @Input() uid!: number;
  @Input() field_categorias!: string;
  @Input() field_channel!: string;
  @Input() field_user_photo!: string;
  @Input() field_media_oembed_video!: string;
  @Input() field_media_duration!: string;
  @Input() nid!: number;
  @Input() field_media_description!: string;



  //Functions


  openDialog(){
    this.dialogRef.open(PopupshareComponent);
  }

  isFavorite(id: number) {
    return this.uploadservice.isFavorite(id);
  }

  toggleFavorite(id: number) {
    return this.uploadservice.toggleFavorite(id);
  }

  selectVideo() {

  }

  ngOnInit(): void {
  }
}
