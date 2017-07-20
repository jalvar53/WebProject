import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CreateImageComponent } from './create-file/create-image/create-image.component';
import { CreateVideoComponent } from './create-file/create-video/create-video.component';
import { CreateMediaComponent } from './create-file/create-media.component';
import { CreateFileComponent } from './create-file/create-file/create-file.component';
import { CreateAudioComponent } from './create-file/create-audio/create-audio.component';

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
    CreateAudioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
