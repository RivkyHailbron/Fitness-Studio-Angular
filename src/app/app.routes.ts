import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationSecretaryComponent } from './registration-secretary/registration-secretary.component';
import { GymteacherComponent } from './gymteacher/gymteacher.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'registration', component: RegistrationSecretaryComponent },
    { path: 'teacher', component: GymteacherComponent },
     
];

