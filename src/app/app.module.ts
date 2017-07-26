import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FormsModule } from '@angular/forms';

import { DataBaseService } from './shared/database.service';
import { CreateNewContentComponent } from './create-file/create-new-content/create-new-content.component';
import { HttpModule } from '@angular/http';
import { BrowseMediaComponent } from './browse-media/browse-media.component';
import { MediaService } from './shared/media.service';
import { MediaItemComponent } from './browse-media/media-item/media-item.component';
import { MediaDetailComponent } from './browse-media/media-detail/media-detail.component';
import { CreateMediaComponent } from './create-file/create-media.component';
import { MediaEditComponent } from './browse-media/media-edit/media-edit.component';
import { UserService } from './shared/user.service';
import { SettingsComponent } from './account/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateMediaComponent,
    HomeComponent,
    HeaderComponent,
    CreateNewContentComponent,
    BrowseMediaComponent,
    MediaItemComponent,
    MediaDetailComponent,
    MediaEditComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DataBaseService, MediaService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
