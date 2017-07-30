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
import { AuthGuard } from './shared/auth.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'edit', component: MediaEditComponent, canActivate: [AuthGuard] },
  { path: 'browse', component: BrowseMediaComponent, canActivate: [AuthGuard] },
  { path: 'browse/:name', component: MediaDetailComponent, canActivate: [AuthGuard] },
  { path: 'create-media', component: CreateMediaComponent, canActivate: [AuthGuard] },
  { path: 'create-media/media', component: CreateNewContentComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
