import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthPage } from './features/auth/pages/auth-page/auth-page';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout, // pego o TS dele, a classe
        // Conforme a rota, troca o <router-outlet />
        children: [
            // esse define a base ('/' -> mandar para /todos)
            { path: '', redirectTo: 'todos', pathMatch: 'full' }, // pathMatch: full = exatamente /
            {
                path: 'todos', // nos filhos, vai seguir sempre /todos/[o que ele definiu]
                loadChildren: () =>
                    import('./features/states/states.routes').then((m) => m.TODOS_ROUTES),
            },
            {
                path: 'about',
                loadComponent: () =>
                    import('./features/about/pages/about-page/about-page').then((m) => m.AboutPage), // caminho até o arquivo .TS, pega a classe
            },
        ],
    },
    // como esse é isolado, ele não usa o layout base
    {
        path: 'auth',
        component: AuthPage,
    },

    // ROTA PARA 404 - Pega tudo, deve ser última
    {
        path: '**', // qualquer outra URL
        loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    },
];
