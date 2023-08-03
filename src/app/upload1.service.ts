import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Video} from './data/videos';
import {Channel} from './data/canal';

const Base_URL: string = "https://dev-project-upskill2-grupo-1.pantheonsite.io";

@Injectable({
  providedIn: 'root'
})
export class Upload1Service {

  favorite_ids = JSON.parse(localStorage.getItem("favorite") || "[]")

  language = localStorage.getItem("translate") || "/en"

  constructor(public http: HttpClient) {
  }


//guardar no local storage
  translate() {
    if (this.language === "/en") {
      this.language = "/pt-pt"
    } else {
      this.language = "/en"
    }
    localStorage.setItem("translate", this.language);
  }


  //GET
  getVideos() {
    return this.http.get(Base_URL + this.language + "/api/allvideos");
  }

  getaVideo(id: string) {
    return this.http.get<Video[]>(Base_URL + this.language + "/api/allvideos/" + id);
  }

  getaPage(pageNumber: number) {
    return this.http.get(Base_URL + this.language + "/api/allvideos" + "?page=" + pageNumber);
  }

  getaSuggestion(pageRange: number) {
    return this.http.get(Base_URL + this.language + "/api/suggestedvideos" + "?page=" + (Math.floor(Math.random() * (pageRange + 1))));
  }

  getvideoscanal(nid: number, page: number) {
    return this.http.get(Base_URL + this.language + "/api/videos_canal/" + nid + "?page=" + page);
  }

  getAllChannels() {
    return this.http.get(Base_URL + this.language + "/api/allchannels");
  }

  getAllArticles() {
    return this.http.get(Base_URL + this.language + "/api/thematics");
  }

  getArticle(nid: number) {
    return this.http.get(Base_URL + this.language + "/api/thematics/" + nid);
  }


  getchannel(nid: number) {
    return this.http.get<Channel[]>(Base_URL + this.language + "/api/allchannels/" + nid);
  }

  getSuggestedThematic() {
    return this.http.get(Base_URL + this.language + "/api/suggested_thematic?r=" + Date.now());
  }

  getSuggestedChannels(page: number) {
    return this.http.get(Base_URL + this.language + "/api/sugested_channels?page=" + page);
  }


  getPlaylists() {
    return this.http.get(Base_URL + this.language + "/api/playlist")
  }

  getVideosPlaylist(nid: number) {
    return this.http.get(Base_URL + this.language + "/api/playlist_videos/" + nid)
  }

  getVideosthumbplaylist(nid: number) {
    return this.http.get(Base_URL + this.language + "/api/videos_thumb_playlist/" + nid)
  }


  getOneVideoPlaylist(nid: number) {
    return this.http.get(Base_URL + this.language + "/api/onevideoplaylist/" + nid)
  }

  getTags(page: number) {
    return this.http.get(Base_URL + this.language + "/api/alltags?page=" + page)
  }

  getvideostags(tid: number, page: number) {
    return this.http.get(Base_URL + this.language + "/api/videos_thematic/" + tid + "?page=" + page)
  }


  getFavorites() {
    return this.http.get(Base_URL + "/api/allvideos/" + this.favorite_ids.toString());
  }

  isFavorite(id: number) {
    return this.favorite_ids.includes(id);
  }

  toggleFavorite(id: number) {
    if (!this.isFavorite(id)) {
      this.favorite_ids.push(id)
    } else {
      this.favorite_ids.splice(this.favorite_ids.indexOf(id), 1)
    }

    localStorage.setItem("favorite", JSON.stringify(this.favorite_ids));
  }

  postLike(videoId: number) {
    return this.http.post<any>(
      'https://dev-project-upskill2-grupo-1.pantheonsite.io/entity/flagging',
      {
        "entity_id": [videoId],
        "entity_type": ["media"],
        "flag_id": "likes",
        "uid": ["0"]
      }
    )
  }

  getLike(videoId: number) {
    return this.http.get(Base_URL + "/api/likevideo/" + videoId);
  }

  postDislike(videoId: number) {
    return this.http.post<any>(
      'https://dev-project-upskill2-grupo-1.pantheonsite.io/entity/flagging',
      {
        "entity_id": [videoId],
        "entity_type": ["media"],
        "flag_id": "dislikes",
        "uid": ["0"]
      }
    )
  }

  getDislike(videoId: number) {
    return this.http.get(Base_URL + "/api/dislikevideo/" + videoId);
  }

  //token: string = "2lf0JxxXk5E1wZzSrAa-ISXccuG9MZAbolWn8gUQbJw";
  //headers = {'Accepct':'application/vnd.api+json','X-CSRF-Token':String(this.token)};

  postVideoComment(
    videoId: number,
    user_name: string,
    mail: string,
    body: string
  ) {
    return this.http.post<any>(
      'https://dev-project-upskill2-grupo-1.pantheonsite.io/comment',
      {
        "entity_id": [{"target_id": videoId}],
        "entity_type": [{"value": "media"}],
        "comment_type": [{"target_id": "media_comments"}],
        "name": [{"value": user_name}],
        "field_name": [{"value": "field_media_comments"}],
        "field_mail": [{"value": mail}],
        "comment_body": [
          {"value": body, "format": "plain_text"}
        ]
      },
      {
        //'headers':(this.headers)
      }
    )
  }

  getVideoComments(videoId: number) {
    return this.http.get(Base_URL + "/api/comments_videos/" + videoId);
  }


  postChannelComment(
    channelId: number,
    user_name: string,
    mail: string,
    body: string
  ) {
    return this.http.post<any>(
      'https://dev-project-upskill2-grupo-1.pantheonsite.io/comment',
      {
        "entity_id": [{"target_id": channelId}],
        "entity_type": [{"value": "node"}],
        "comment_type": [{"target_id": "channel_comments"}],
        "name": [{"value": user_name}],
        "field_name": [{"value": "field_channel_comments"}],
        "field_mail": [{"value": mail}],
        "comment_body": [
          {"value": body, "format": "plain_text"}
        ]
      },
      {
        //'headers':(this.headers)
      }
    )
  }

  getChannelComments(channelId: number) {
    return this.http.get(Base_URL + "/api/comments_channels/" + channelId);
  }


}
