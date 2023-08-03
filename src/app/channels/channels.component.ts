import { Component, Input, OnInit } from '@angular/core';
import { Upload1Service } from "../upload1.service";

interface AllCanais {

  title: string,
  field_user_photo: string,
  field_thumbnail_channel: string,
  nid: number,
  body: string
}

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  link = 'https://dev-project-upskill2-grupo-1.pantheonsite.io'

  @Input() title!: string;
  @Input() field_user_photo!: string;
  @Input() field_thumbanil_channel!: string;
  @Input() nid!: number;

  lista_canais?: AllCanais[];

  ngOnInit(): void {

    this.uploadservice.getAllChannels().subscribe((canais: any) => {
      console.log(canais)
      this.lista_canais = <AllCanais[]>canais;
    })
  }

  constructor(public uploadservice: Upload1Service) {


  }


}


