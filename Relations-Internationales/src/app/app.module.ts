import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule,
    MatPaginatorModule, MatIconModule, MatListModule, MatDialogModule, MatSelectModule, MatCheckboxModule, MatSlideToggleModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { DatabaseService } from './services/database/database.service';

import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import { SimulatorService } from './services/simulator/simulator.service';
import { AdministratorSideComponent } from './pages/administrator-side/administrator-side.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { AddCourseDialogComponent } from './components/add-element-dialog/add-course-dialog/add-course-dialog.component';
import { FormsModule } from '@angular/forms';
import { AddContactDialogComponent } from './components/add-element-dialog/add-contact-dialog/add-contact-dialog.component';
import { AddDailyTopicDialogComponent } from './components/add-element-dialog/add-daily-topic-dialog/add-daily-topic-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { DatePipe } from '@angular/common';
import { AddStudentDialogComponent } from './components/add-element-dialog/add-student-dialog/add-student-dialog.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { AddPollDialogComponent } from './components/add-element-dialog/add-poll-dialog/add-poll-dialog.component';

const appRoutes: Routes = [
    // default route
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // localhost/4200/home
    { path: 'home', component: HomeComponent },
    // localhost/4200/login
    { path: 'login', component: LoginComponent },
    // localhost/4200/student-profile-page
    { path: 'student-profile-page', component: StudentProfilePageComponent },
    // localhost/4200/student-details/:idPerson
    { path: 'student-details/:idPerson', component: StudentDetailsComponent },
    // localhost/4200/error
    { path: '**', component: ErrorComponent },
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
        StudentDetailsComponent,
        AddCourseDialogComponent,
        AddContactDialogComponent,
        AddDailyTopicDialogComponent,
        HeaderComponent,
        AddStudentDialogComponent,
        CourseDetailsComponent,
        AddPollDialogComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        // Angular Material modules
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatTreeModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
        MatListModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSlideToggleModule,
    ],
    providers: [
        DatabaseService,
        SimulatorService,
        DatePipe,
    ],
    bootstrap: [AppComponent],
    entryComponents: [AddCourseDialogComponent,
        AddContactDialogComponent,
        AddDailyTopicDialogComponent,
        AddStudentDialogComponent,
        AddPollDialogComponent],
})
export class AppModule { }
