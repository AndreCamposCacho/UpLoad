import {Component, OnInit} from '@angular/core';
import {Upload1Service} from "../upload1.service";
import {PopupshareComponent} from "../popupshare/popupshare.component";
import {MatDialog} from "@angular/material/dialog";

interface AllThemes {
  title:string,
  field_header_image:string,
  field_tags:string,
  field_thumbnail_thematic:string,
  nid:number,
  field_thematic_teaser:string;
  body:string;
  tid: number
}


@Component({
  selector: 'app-allthemespage',
  templateUrl: './allthemespage.component.html',
  styleUrls: ['./allthemespage.component.scss']
})
export class AllthemespageComponent implements OnInit{

  lista_temas?: AllThemes[]
  link = 'https://dev-project-upskill2-grupo-1.pantheonsite.io'

  openDialog(){
    this.dialogRef.open(PopupshareComponent);
  }

  constructor(
    public uploadservice: Upload1Service,
    private dialogRef: MatDialog) {

  }


  ngOnInit(): void {this.uploadservice.getAllArticles().subscribe((temas:any) =>{
    this.lista_temas = <AllThemes[]>temas
  })

  }




}
