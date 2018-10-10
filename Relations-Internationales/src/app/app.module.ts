import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { DatabaseService } from './services/database/database.service';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
    { path: 'home', component: HomeComponent }, // localhost/4200/home
    { path: 'login', component: LoginComponent }, // localhost/4200/login
    { path: 'student-profile-page', component: StudentProfilePageComponent }, // localhost/4200/student-profile-page
    { path: '**', component: ErrorComponent } // localhost/4200/error
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ErrorComponent,
        StudentProfilePageComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        // Angular Material modules
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatTreeModule,
        MatExpansionModule,
    ],
    providers: [DatabaseService],
    bootstrap: [AppComponent],
})
export class AppModule { }
