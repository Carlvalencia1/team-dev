import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', component: LoginComponent },

];
