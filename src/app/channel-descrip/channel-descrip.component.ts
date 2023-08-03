import {Component, Input, OnInit} from '@angular/core';
import{Upload1Service} from "../upload1.service";


interface AllCanais {

  title:string,
  field_description: string,
  field_thumbnail_channel: string,
  field_user_photo: string,

}



@Component({
  selector: 'app-channel-descrip',
  templateUrl: './channel-descrip.component.html',
  styleUrls: ['./channel-descrip.component.scss']
})

export class ChannelDescripComponent implements OnInit{

  link = 'https://dev-project-upskill2-grupo-1.pantheonsite.io'




  @Input()title!: string;
  @Input()field_description!: string;
  @Input()field_thumbnail_channel!: string;
  @Input()field_user_photo!: string;


  canal?: AllCanais[];


  constructor(public uploadservice: Upload1Service){

  }

  ngOnInit(): void {

  }

}
