import {Component, Input, OnInit} from '@angular/core';
import {Upload1Service} from "../upload1.service";
import {Video} from "../data/videos";
import {ActivatedRoute} from "@angular/router";



interface AllCanais {

  title:string,
  field_user_photo: string,
  nid: number
}

interface AllThemes {
  title:string,
  field_header_image:string,
  field_thumbnail_thematic: string,
  nid: number,
  tid: number
}


@Component({
  selector: 'app-allchannels',
  templateUrl: './allchannels.component.html',
  styleUrls: ['./allchannels.component.scss']
})
export class AllchannelsComponent implements OnInit {
  link = 'https://dev-project-upskill2-grupo-1.pantheonsite.io'
  @Input()title!:string;
  @Input()field_header_image!: string;
  @Input()field_thumbnail_thematic!: string;
  @Input()nid!: number;

  lista_canais?: AllCanais[];

  lista_temas?: AllThemes[];

  page = 0


  moreResults() {
    this.page = this.page + 1
    this.uploadservice.getSuggestedChannels(this.page).subscribe((canais:any) =>{
      if(canais.length > 0) {
        this.lista_canais = <AllCanais[]>canais;
      }

    })

  }




  constructor(private route: ActivatedRoute, public uploadservice: Upload1Service) {


  }

  ngOnInit(): void {
    this.uploadservice.getSuggestedChannels(this.page).subscribe((canais:any) =>{
      this.lista_canais = <AllCanais[]>canais;
    })

    this.uploadservice.getSuggestedThematic().subscribe((temas:any) =>{
      this.lista_temas = <AllThemes[]>temas
    })

  }


}
