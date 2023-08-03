import { Component, OnInit } from '@angular/core';

import {Upload1Service} from "../upload1.service";
import { Video} from "../data/videos";


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit{

  lista_videos?: Video[];



  constructor(private uploadservice: Upload1Service){

  }

  ngOnInit(): void {
    this.uploadservice.getVideos().subscribe((videos:any) =>{
      this.lista_videos = <Video[]>videos.data;
    })
  }

}
