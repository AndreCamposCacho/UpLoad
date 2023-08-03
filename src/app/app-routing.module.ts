import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { VideosComponent } from "./videos/videos.component";
import { TesteComponent } from "./teste/teste.component";
import { ChannelsComponent } from "./channels/channels.component";
import { ChannelComponent } from "./channel/channel.component";
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from "./home/home.component";
import { FavoritesComponent } from './favorites/favorites.component';
import { AllthemesComponent } from "./allthemes/allthemes.component";
import { AllthemespageComponent } from "./allthemespage/allthemespage.component";
import { PlaylistsPageComponent } from "./playlists-page/playlists-page.component";
import { TagsVideosPageComponent } from "./tags-videos-page/tags-videos-page.component";
import { PlaylistVideosComponent } from "./playlist-videos/playlist-videos.component";


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'video-player/:mid', component: VideoPlayerComponent },
  //{ path: 'video-player/:videoID', component: VideoPlayerComponent },
  { path: 'teste', component: TesteComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'channel', component: ChannelComponent },
  { path: 'channel/:nid', component: ChannelComponent },//Talvez este substitui o de cima
  { path: 'themes', component: AllthemesComponent },
  { path: 'allthemes', component: AllthemespageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'playlists', component: PlaylistsPageComponent },
  { path: 'videostag/:tid', component: TagsVideosPageComponent },
  { path: 'playlistsvideos/:tid', component: PlaylistVideosComponent },
  { path: 'themepage/:nid/:tid', component: AllthemesComponent },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: false,                //Console debugging se for true
      scrollPositionRestoration: "top"    //Restore scroll after routing
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
