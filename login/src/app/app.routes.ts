import { Routes } from '@angular/router'
import { MainLayout } from './layouts/main-layout/main-layout'

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: '', redirectTo: 'auth', pathMatch: 'full' },
            {
                path: 'auth',
                title: 'Auth',
                loadComponent: () =>
                    import('./features/auth/pages/auth-pages/auth-pages').then((m) => m.AuthPages),
            }
        ],
    },
    // ROTA PARA 404
    {
        path: '**',
        title: 'Not Found',
        loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    },
]
