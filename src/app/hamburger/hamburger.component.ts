import { Component,Input, OnInit } from '@angular/core';
import { faHouse as faHouseSolid, faBarsStaggered as faChannels, faPlay as faPlaylists, faClapperboard as faThemes, faFilm as faVideotape } from '@fortawesome/free-solid-svg-icons';
import { UpLoadLogoComponent } from '../up-load-logo/up-load-logo.component';
import {Upload1Service} from "../upload1.service";
import { Tags} from "../data/tags";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent {

  tags?: Tags[] ;

  homeIcon = faHouseSolid;
  channelsIcon = faChannels;
  themesIcon = faThemes;
  playlistsIcon = faPlaylists;
  videoIcon = faVideotape;

  @Input() open!:boolean;


  /*Inputs tags*/
  @Input() name!: string;
  @Input() tid!: number;


  translate () {
    return this.uploadservice.translate()
  }

  refreshPage(){
    window.location.reload()
  }



  page = 0


  moreTags() {
    this.page = this.page + 1
    this.uploadservice.getTags(this.page).subscribe((tags:any) =>{
      if(tags.length > 0) {
        this.tags = <Tags[]>tags;
      }

    })

  }


  constructor(private route: ActivatedRoute, public uploadservice: Upload1Service){

  }


  ngOnInit(): void {
    this.uploadservice.getTags(this.page).subscribe((tags:any)=>{
      this.tags = <Tags[]>tags;
    })
  }


}
