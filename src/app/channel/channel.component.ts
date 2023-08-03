import { Component, Input, OnInit } from '@angular/core';
import { Upload1Service } from "../upload1.service";
import { Channel } from "../data/canal";
import { ActivatedRoute } from "@angular/router";
import { Video } from "../data/videos"
import { Comment } from '../data/comment.model';

import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { VideoPlayerComponent } from "../video-player/video-player.component";





@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  umCanal!: Channel;

  videos: Video[] = [];

  comments: Comment[] = [];

  charPic!: string;

  fabookmark = faBookmark;
  fasharenodes = faShareNodes;

  //Submission values
  user_name!: string;
  mail!: string;
  comment_body!: string;

  link = "https://dev-project-upskill2-grupo-1.pantheonsite.io/";
  comment_photo = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png"

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


  //Utility Functions

  htmlTagSlicer(str: string) {
    return str.replace(/(<([^>]+)>)/ig, '');
  }

      //User photo
  userPicGenerator(user_name: string) {
    this.charPic = user_name.charAt(0);
    return this.charPic.toUpperCase();
  }

      //Name cleaner
  usernameCleaner(user_name: string) {
    return user_name.replace(/ *\([^)]*\) */g, "");
  }




  page = 0;

  moreResults() {
    let nid = this.route.snapshot.params['nid']
    this.page++;
    this.uploadservice.getvideoscanal(nid, this.page).subscribe((videos: any) => {
      this.videos.push(...videos);
    })

  }


  //Comment Logic

  postComment(
    channelId: number,
    user_name: string,
    mail: string,
    body: string
  ) {
    this.uploadservice.postChannelComment(channelId, user_name, mail, body).subscribe((get: any) => {
      this.commentSubscription();
    });
  }

  commentSubmission(submit: any) {
    const submission = submit.value;
    this.user_name = submission.username;
    this.mail = submission.usermail;
    this.comment_body = submission.usercomment;
    console.log("Submited name is: " + this.user_name);
    console.log("Submited mail is: " + this.mail);
    console.log("Submited comment is: " + this.comment_body);

    this.postComment(this.umCanal.nid, this.user_name, this.mail, this.comment_body);
  }

  commentSubscription() {
    return this.uploadservice.getChannelComments(this.umCanal.nid).subscribe((commentsReceived: any) => {
      //console.log("ESTES SAO OS COMMENTS")
      //console.table(comment);
      this.comments = <Comment[]>commentsReceived;
      console.table(this.comments);
    })
  }


  constructor(
    private route: ActivatedRoute, 
    public uploadservice: Upload1Service
    ) {}

  ngOnInit(): void {

    let nid = this.route.snapshot.params['nid']

    this.uploadservice.getchannel(nid).subscribe((canais) => {
      this.umCanal = canais[0];
      this.commentSubscription();
    });

    this.uploadservice.getvideoscanal(nid, this.page).subscribe((videos: any) => {
      this.videos = <Video[]>videos;
    })


  }
}