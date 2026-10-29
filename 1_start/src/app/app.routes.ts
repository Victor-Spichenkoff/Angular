import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthPage } from './features/auth/pages/auth-page/auth-page';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout, // pego o TS dele, a classe
        children: [
            // lista. Copia o elemento e vai trocar só o <router-outlet />
            {
                path: 'about',
                loadComponent: () =>
                    import('./features/about/pages/about-page/about-page').then((m) => m.AboutPage), // caminho até o arquivo .TS, pega a classe
            },
            {
                path: 'states',
                loadComponent: () =>
                    import('./features/states/pages/states-page/states-page').then((m) => m.StatesPage), // caminho até o arquivo .TS, pega a classe
            },
            // {
            //     path: '',
            //     component: App,
            // },
        ],
    },
    {
        path: 'auth',
        component: AuthPage,
    },
];
