import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout, // pego o TS dele, a classe
        children: [
            // lista, tudo pode usar e vai trocar só o <router-outlet />
            {
                path: 'about',
                loadComponent: () =>
                    import('./study/about/about').then((m) => m.About),// caminho até o arquivo .TS, pega a classe
            },
        ],
    },
];
