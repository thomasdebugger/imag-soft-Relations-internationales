import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule,
    MatPaginatorModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';

import { DatabaseService } from './services/database/database.service';
import { SimulatorService } from './services/simulator/simulator.service';
import { AdministratorSideComponent } from './pages/home/administrator-side/administrator-side.component';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
    { path: 'home', component: HomeComponent }, // localhost/4200/home
    { path: 'login', component: LoginComponent }, // localhost/4200/login
    { path: 'student-profile-page', component: StudentProfilePageComponent }, // localhost/4200/student-profile-page
    { path: '**', component: ErrorComponent }, // localhost/4200/error
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ErrorComponent,
        StudentProfilePageComponent,
        AdministratorSideComponent,
        HeaderComponent,
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
        MatTableModule,
        MatPaginatorModule,
    ],
    providers: [
        DatabaseService,
        SimulatorService,
        DatePipe,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
