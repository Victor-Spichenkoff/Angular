import { Routes } from '@angular/router'
import { MainLayout } from './layouts/main-layout/main-layout'

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: '', redirectTo: 'todos', pathMatch: 'full' },
            {
                path: 'todos',
                title: "ToDo",
                loadChildren: () =>
                    import('./features/todos/todos.routes').then((m) => m.TODOS_ROUTES),
            },
        ],
    },
    // ROTA PARA 404
    {
        path: '**',
        title: 'Not Found',
        loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    },
]
