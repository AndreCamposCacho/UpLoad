import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { Form } from '@angular/forms';
import { Upload1Service } from "../upload1.service";
import { Video, videos } from "../data/videos";
import { faThumbsUp as like, faThumbsDown as dislike, faFlag } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as liked, faThumbsDown as disliked, faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { LikesAndDislikes } from '../data/likes-and-dislikes.model';
import { Comment } from '../data/comment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  constructor(
    private sanitizer: DomSanitizer,
    private uploadservice: Upload1Service,
    private route: ActivatedRoute
  ) { }

  //Icons
  likeIcon = like;
  dislikeIcon = dislike;
  likedIcon = liked;
  dislikedIcon = disliked;
  flagIcon = faFlag;

  //Variables
  video!: Video;  // Static members forbiden in html

  comments: Comment[] = [];

  youtubeVideoId!: string; //Id de um youtube video, à direita do primeiro "="

  link = "https://dev-project-upskill2-grupo-1.pantheonsite.io/";

  taglessDescription!: string //Variável que leva a descrição dos videos sem tags html, funções abaixo.

  likeApi!: any;
  dislikeApi!: any;

  sanitizedUrl!: any;

  charPic!: string;

      //Submission values
  user_name!: string;
  mail!: string;
  comment_body!: string;

      //States
  isLiked: boolean = false;
  isDisliked: boolean = false;



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


  //Video Functions
  getVideoId() {
    //console.log("Tituo Simples");
    //console.table(VideoPlayerComponent.video);
    this.youtubeVideoId = this.video.field_media_oembed_video.slice(
      this.video.field_media_oembed_video.indexOf("=") + 1
    );
    //console.log("videoId = " + this.youtubeVideoId);
    return this.youtubeVideoId;
  }

  videoSanitizer(videoId: string) {
    const youtubeUrl: string = "https://www.youtube.com/embed/" + videoId;
    //console.log("The url is " + youtubeUrl);
    const cleanUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
    //console.log("The sanitized Url is " + cleanUrl);
    return cleanUrl;
  }



  //Like-Dislike Logic

  likeSubscription() {
    this.uploadservice.getLike(this.video.mid).subscribe((likes: any) => {
      //console.log("os likes são:");
      //console.table(likes);
      this.likeApi = likes.length;
      return this.likeApi;
    })
  }

  dislikeSubscription() {
    this.uploadservice.getDislike(this.video.mid).subscribe((dislikes: any) => {
      //console.log("os dislikes são:");
      //console.table(dislikes);
      this.dislikeApi = dislikes.length;
      return this.dislikeApi;
    })
  }

  likeFlag(videoId: number) {
    this.uploadservice.postLike(videoId).subscribe(data => {
      //id do video
      //console.log("Teste de likepost")
      //console.table(data);
      this.likeSubscription();
    })
  }

  dislikeFlag(videoId: number) {
    this.uploadservice.postDislike(videoId).subscribe(data => {
      //id do video
      //console.log("Teste de dislikepost")
      //console.table(data);
      this.dislikeSubscription();
    })
  }

  like(): void {
    if (this.isDisliked == true) {
      this.isDisliked = false;
      this.isLiked = !this.isLiked;
      this.likeFlag(this.video.mid);
    }
    else if (this.isLiked == true) {
      this.isLiked = !this.isLiked;
    }
    else {
      this.isLiked = !this.isLiked;
      this.likeFlag(this.video.mid);
    }
  }

  dislike(): void {
    if (this.isLiked == true) {
      this.isLiked = false;
      this.isDisliked = !this.isDisliked;
      this.dislikeFlag(this.video.mid);
    }
    else if (this.isDisliked == true) {
      this.isDisliked = !this.isDisliked;
    }
    else {
      this.isDisliked = !this.isDisliked;
      this.dislikeFlag(this.video.mid);
    }
  }



  //Comment Logic

  postComment(
    videoId: number,
    user_name: string,
    mail: string,
    body: string
  ) {
    this.uploadservice.postVideoComment(videoId, user_name, mail, body).subscribe((get:any) => {
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

    this.postComment(this.video.mid, this.user_name, this.mail, this.comment_body);
  }
  
  commentSubscription() {
    return this.uploadservice.getVideoComments(this.video.mid).subscribe((commentsReceived: any) => {
      //console.log("ESTES SAO OS COMMENTS")
      //console.table(comment);
      this.comments = <Comment[]>commentsReceived;
      console.table(this.comments);
    })
  }



  ngOnInit() {
    let id_video = this.route.snapshot.params['mid'];

    this.uploadservice.getaVideo(id_video).subscribe(video => {

      this.video = video[0];

      this.taglessDescription = this.htmlTagSlicer(this.video.field_media_description)

      //Output do url com o sanitize
      this.sanitizedUrl = this.videoSanitizer(this.getVideoId());

      this.likeSubscription();

      this.dislikeSubscription();

      this.commentSubscription();
    })

  }

}
