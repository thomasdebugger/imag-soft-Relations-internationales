import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { DatabaseService } from './services/database/database.service';
import { SimulatorService } from './services/simulator/simulator.service';

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
        // Angular Material modules
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
    ],
    providers: [
        DatabaseService,
        SimulatorService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
