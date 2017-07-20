import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateImageComponent } from './create-file/create-image/create-image.component';
import { CreateFileComponent } from './create-file/create-file/create-file.component';
import { CreateVideoComponent } from './create-file/create-video/create-video.component';
import { CreateAudioComponent } from './create-file/create-audio/create-audio.component';
import { CreateMediaComponent } from './create-file/create-media.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-media', component: CreateMediaComponent},
  {path: 'create-media/image', component: CreateImageComponent},
  {path: 'create-media/video', component: CreateVideoComponent},
  {path: 'create-media/audio', component: CreateAudioComponent},
  {path: 'create-media/file', component: CreateFileComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
