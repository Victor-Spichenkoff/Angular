import { Routes } from '@angular/router';

export const TODOS_ROUTES: Routes = [
    {
        path: '', // /todos
        title: 'ToDos',
        loadComponent: () =>
            import('./pages/main-todo-page/main-todo-page').then((m) => m.MainTodoPage),
    },
    {
        path: ':groupId', // /todos/:id
        title: 'ToDos details',
        loadComponent: () =>
            import('./pages/todos-detail-page/todos-detail-page').then((m) => m.TodosDetailPage),
    },
]
