import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProfileComponent } from './screens/profile/profile.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
