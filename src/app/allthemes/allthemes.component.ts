import {Component, Input, OnInit} from '@angular/core';
import {Upload1Service} from "../upload1.service";
import {ActivatedRoute} from "@angular/router";
import { Video } from "../data/videos"


interface AllThemes {
  title:string,
  field_header_image:string,
  tags:string,
  field_thumbnail_thematic:string,
  nid:number,
  body:string,
  field_thematic_teaser:string,
  tid: number

}


@Component({
  selector: 'app-allthemes',
  templateUrl: './allthemes.component.html',
  styleUrls: ['./allthemes.component.scss']
})
export class AllthemesComponent implements OnInit{

  link = "https://dev-project-upskill2-grupo-1.pantheonsite.io/";

  lista_temas?: AllThemes[]

  videos: Video[] = [];

  //Inputs themes
  @Input()title!:string
  @Input()field_category!:string
  @Input()field_image!:string
  @Input()created!:string
  @Input()body!:string

  //Inputs tematic

  @Input() mid!: number;
  @Input() name!: string;
  @Input() thumbnail__target_id!: string;
  @Input() field_media_oembed_video!: string;
  @Input() field_media_duration!:string;

  page = 0;

  moreResults() {
    let nid = this.route.snapshot.params['nid']
    this.page++;
    this.uploadservice.getvideoscanal(nid, this.page).subscribe((videos: any) => {
      this.videos.push(...videos);
    })

  }


  constructor(
    public uploadservice: Upload1Service,
    private route: ActivatedRoute) {}


  ngOnInit(): void {

    let nid = this.route.snapshot.params['nid'];

    this.uploadservice.getArticle(nid).subscribe((articles:any)=>{
      this.lista_temas= <AllThemes[]>articles;
    })



    this.route.params.subscribe(params=>{
      let tid = params['tid']

      this.uploadservice.getvideostags(tid, this.page).subscribe((videos:any) =>{
        this.videos = <Video[]>videos;
      })
    })
  }


}
