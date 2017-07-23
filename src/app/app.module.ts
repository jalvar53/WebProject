import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

import { DataBaseService } from './shared/database.service';

import { CreateImageComponent } from './create-file/create-image/create-image.component';
import { CreateVideoComponent } from './create-file/create-video/create-video.component';
import { CreateMediaComponent } from './create-file/create-media.component';
import { CreateFileComponent } from './create-file/create-file/create-file.component';
import { CreateAudioComponent } from './create-file/create-audio/create-audio.component';
import { HttpModule } from '@angular/http';
import { BrowseMediaComponent } from './browse-media/browse-media.component';
import { MediaService } from './shared/media.service';
import { MediaListComponent } from './browse-media/media-item/media-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateMediaComponent,
    HomeComponent,
    HeaderComponent,
    CreateImageComponent,
    CreateVideoComponent,
    CreateFileComponent,
    CreateAudioComponent,
    BrowseMediaComponent,
    MediaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DataBaseService, MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
