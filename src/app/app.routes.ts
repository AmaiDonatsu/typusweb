import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: 'home', 
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    { 
        path: 'auth', 
        loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent)
    },
];
