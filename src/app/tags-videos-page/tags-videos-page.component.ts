import { Component,Input,OnInit } from '@angular/core';
import {Upload1Service} from "../upload1.service";
import {Video} from "../data/videos";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tags-videos-page',
  templateUrl: './tags-videos-page.component.html',
  styleUrls: ['./tags-videos-page.component.scss']
})
export class TagsVideosPageComponent implements OnInit{

  videos: Video[] = [];

  @Input() mid!: number;
  @Input() name!: string;
  @Input() thumbnail__target_id!: string;
  @Input() field_channel!: string;
  @Input() field_media_oembed_video!: string;
  @Input()field_media_duration!:string;


  link = "https://dev-project-upskill2-grupo-1.pantheonsite.io/";


  page = 0;

  moreVideos() {
    let tid = this.route.snapshot.params['tid']
    this.page++;
    this.uploadservice.getvideostags(tid,this.page).subscribe((videos:any) =>{
      this.videos.push(...videos);
    })

  }



  constructor(private route: ActivatedRoute, public uploadservice: Upload1Service){

  }

  ngOnInit(): void {


    this.route.params.subscribe(params=>{
      let tid = params['tid']

      this.uploadservice.getvideostags(tid,this.page).subscribe((videos:any) =>{
        this.videos = <Video[]>videos;
      })
    })


  }

}
