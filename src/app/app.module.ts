import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';
import { SerieComponent } from './serie/serie.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import { MatMenuModule, } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'series', component: SerieComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimeComponent,
    SerieComponent,
    SignupComponent,
    LoginComponent,
    NewsComponent,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
