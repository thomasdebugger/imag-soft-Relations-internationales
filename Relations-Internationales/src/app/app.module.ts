import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
  { path: 'home', component: HomeComponent }, // localhost/4200/home
  { path: 'login', component: LoginComponent }, // localhost/4200/login
  { path: '**', component: ErrorComponent }, // localhost/4200/error
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
