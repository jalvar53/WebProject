import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { CreateNewContentComponent } from './create-file/create-new-content/create-new-content.component';
import { CreateMediaComponent } from './create-file/create-media.component';
import { BrowseMediaComponent } from './browse-media/browse-media.component';
import { MediaDetailComponent } from './browse-media/media-detail/media-detail.component';
import { MediaEditComponent } from './browse-media/media-edit/media-edit.component';
import { SettingsComponent } from './account/settings/settings.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'edit', component: MediaEditComponent},
  {path: 'browse', component: BrowseMediaComponent},
  {path: 'browse/:name', component: MediaDetailComponent},
  {path: 'create-media', component: CreateMediaComponent},
  {path: 'create-media/media', component: CreateNewContentComponent},
  {path: 'settings', component: SettingsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
