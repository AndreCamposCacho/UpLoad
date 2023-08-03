import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { MatDialogModule } from '@angular/material/dialog';

import { HamburgerComponent } from './hamburger/hamburger.component';
import { UpLoadLogoComponent } from './up-load-logo/up-load-logo.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { VideosComponent } from './videos/videos.component';
import { AppRoutingModule } from './app-routing.module';
import { TesteComponent } from './teste/teste.component';
import { AllchannelsComponent } from './allchannels/allchannels.component';
import { ChannelsComponent } from './channels/channels.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ErrorComponent } from './error/error.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelDescripComponent } from './channel-descrip/channel-descrip.component';
import { HomeComponent } from './home/home.component';
import { SuggestedVideosComponent } from './suggested-videos/suggested-videos.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllthemesComponent } from './allthemes/allthemes.component';
import { AllthemespageComponent } from './allthemespage/allthemespage.component';
import { PlaylistsPageComponent } from './playlists-page/playlists-page.component';
import { TagsVideosPageComponent } from './tags-videos-page/tags-videos-page.component';
import { PlaylistVideosComponent } from './playlist-videos/playlist-videos.component';
import { PopupshareComponent } from './popupshare/popupshare.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburgerComponent,
    UpLoadLogoComponent,
    VideoThumbnailComponent,
    VideosComponent,
    TesteComponent,
    AllchannelsComponent,
    ChannelsComponent,
    VideoPlayerComponent,
    ErrorComponent,
    ChannelComponent,
    ChannelDescripComponent,
    HomeComponent,
    SuggestedVideosComponent,
    FavoritesComponent,
    AllthemesComponent,
    AllthemespageComponent,
    PlaylistsPageComponent,
    TagsVideosPageComponent,
    PlaylistVideosComponent,
    PopupshareComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    MatCardModule,
    InfiniteScrollModule,
    ShareButtonsModule.withConfig({ debug: true, }),
    ShareIconsModule,
    MatDialogModule,
    
    Ng2SearchPipeModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
