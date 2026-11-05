import { Routes } from '@angular/router';

export const TODOS_ROUTES: Routes = [
    {
        path: '', // /todos
        title: 'Tarefas', // isso é o que vai ser mostrado como title (nome aba)
        loadComponent: () => import('./pages/states-page/states-page').then((m) => m.StatesPage),
    },
    {
        path: ':id', // /todos/[qualquer-coisa]
        title: 'Detalhe da tarefa',
        loadComponent: () =>
            import('./pages/detail-todo-page/detail-todo-page').then((m) => m.DetailTodoPage),
    },
];
